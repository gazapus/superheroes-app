import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import Banner from './components/Banner';
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import CardsContainer from './components/CardsContainer';
import Modal from './components/Modal';

// CREAR ARCHIVO KEYS

export default function App() {
  const [prueba, setPrueba] = useState('X');
  const [heroDetails, setHeroDetails] = useState({});
  const [heroesCards, setHeroesCards] = useState(<ActivityIndicator style={{margin: 30}} size="large" color="#C9C927"/>)

  function generateRandomNumbers() {
    let randomNumbers = new Set([]);
    while (randomNumbers.size < 15) {
      randomNumbers.add(Math.round(Math.random() * 731));
    }
    return randomNumbers.values();
  }
  
  useEffect( () => {
    async function fetchData() {
      let randomNumbers = generateRandomNumbers();
      try {
        let resolves = await Promise.all([
          fetch('https://www.superheroapi.com/api.php/3282090465183136/' + randomNumbers.next().value),
          fetch('https://www.superheroapi.com/api.php/3282090465183136/' + randomNumbers.next().value),
          fetch('https://www.superheroapi.com/api.php/3282090465183136/' + randomNumbers.next().value),
          fetch('https://www.superheroapi.com/api.php/3282090465183136/' + randomNumbers.next().value),
          fetch('https://www.superheroapi.com/api.php/3282090465183136/' + randomNumbers.next().value),
          fetch('https://www.superheroapi.com/api.php/3282090465183136/' + randomNumbers.next().value),
          fetch('https://www.superheroapi.com/api.php/3282090465183136/' + randomNumbers.next().value),
          fetch('https://www.superheroapi.com/api.php/3282090465183136/' + randomNumbers.next().value),
          fetch('https://www.superheroapi.com/api.php/3282090465183136/' + randomNumbers.next().value),
          fetch('https://www.superheroapi.com/api.php/3282090465183136/' + randomNumbers.next().value),
          fetch('https://www.superheroapi.com/api.php/3282090465183136/' + randomNumbers.next().value),
          fetch('https://www.superheroapi.com/api.php/3282090465183136/' + randomNumbers.next().value),
          fetch('https://www.superheroapi.com/api.php/3282090465183136/' + randomNumbers.next().value),
          fetch('https://www.superheroapi.com/api.php/3282090465183136/' + randomNumbers.next().value),
          fetch('https://www.superheroapi.com/api.php/3282090465183136/' + randomNumbers.next().value),
        ]);
        let heroesData = await Promise.all(resolves.map(function (response) {
          return response.json();
        }));
        putHeroesCards(heroesData)
      } catch (e) {
        console.log(e);
        setHeroesCards(
          <Text style={{ color: 'red' }}>No se pudo cargar los datos</Text>
        );
      }
    }
    fetchData();
  }, []);

  function putHeroesCards(heroesData) {
    let newHeroesCards;
    newHeroesCards = heroesData.map(hero => {
      return (
        <Card
          heroDetails={hero}
          onPress={setHeroDetails}
          key={hero.id}
        />
      )
    })
    setHeroesCards(newHeroesCards);
  }

  function searchHero(name) {
    setPrueba(name);
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#C9C927" barStyle='ligth-content' />
      <Modal
        heroDetails={heroDetails}
        setHeroDetails={setHeroDetails}
        open={Object.entries(heroDetails).length !== 0}
      />
      <Banner />
      <SearchBar onPress={searchHero}></SearchBar>
      <CardsContainer>
        {heroesCards}
      </CardsContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C0633',
    alignItems: 'center',
    padding: 1,
    marginTop: Constants.statusBarHeight,
  },
});

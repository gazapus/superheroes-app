import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Banner from './components/Banner';
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import CardsContainer from './components/CardsContainer';
import Modal from './components/Modal';

// CREAR ARCHIVO KEYS

export default function App() {
  const [prueba, setPrueba] = useState('X');
  const [heroDetails, setHeroDetails] = useState({});
  const [heroes, setHeroes] = useState([]);
  const [heroesCards, setHeroesCards] = useState(<Text style={{ color: 'white' }}>Cargando</Text>)

  function generateRandomNumbers() {
    let randomNumbers = new Set([]);
    while (randomNumbers.size < 15) {
      randomNumbers.add(Math.round(Math.random() * 731));
    }
    return randomNumbers.values();
  }

  useEffect(() => {
    let randomNumbers = generateRandomNumbers();
    Promise.all([
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
    ])
      .then((responses) => {
        return Promise.all(responses.map(function (response) {
          return response.json();
        }));
      })
      .then((data) => {
        console.log("datos cargados")
        setHeroes(data);
        putHeroesCards();
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage();
      })
  }, []);

  function putHeroesCards() {
    let newHeroesCards;
    console.log(heroes.length)
    newHeroesCards = heroes.map(hero => {
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

  function setErrorMessage() {
    let heroesCards = <Text style={{ color: 'red' }}>No se pudo cargar los datos</Text>
    setHeroesCards(heroesCards);
  }

  function searchHero(name) {
    setPrueba(name);
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#C9C927" barStyle='ligth-content' />
      <Modal
        heroDetails={heroDetails}
        onClose={setHeroDetails}
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

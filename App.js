import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  ActivityIndicator,
  ScrollView,
  RefreshControl
} from 'react-native';
import Banner from './components/Banner';
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import CardsContainer from './components/CardsContainer';
import Modal from './components/Modal';

// CREAR ARCHIVO KEYS

export default function App() {
  const [nameSearched, setNameSearched] = useState('X');
  const [heroDetails, setHeroDetails] = useState({});
  const [heroesCards, setHeroesCards] = useState(<ActivityIndicator style={{ margin: 30 }} size="large" color="#C9C927" />);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getRandomHeroes();
  }, []);

  function generateRandomNumbers(quantity) {
    let randomNumbers = new Set([]);
    while (randomNumbers.size < quantity) {
      randomNumbers.add(Math.round(Math.random() * 731));
    }
    return randomNumbers.values();
  }

  async function getRandomHeroes() {
    let randomNumbers = generateRandomNumbers(15);
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
      putHeroesCards(heroesData);
      setRefreshing(false);
    } catch (e) {
      setHeroesCards(
        <Text style={{ color: 'red' }}>No se pudo cargar los datos</Text>
      );
      setRefreshing(false);
    }
  }

  async function getSearchedHero() {
    try {
      console.log(nameSearched)
      let resolves = await fetch('https://www.superheroapi.com/api.php/3282090465183136/search/' + nameSearched);
      let heroesFound = await resolves.json();
      console.log(heroesFound.results.length);
      putHeroesCards(heroesFound.results);
    } catch (e) {
      console.log("Falló")
    }
  }

  useEffect(() => {
    getRandomHeroes();
    setRefreshing(false);
  }, []);

  useEffect( () => {
    getSearchedHero();
  }, [nameSearched])


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
    setNameSearched(name);
  }

  return (
    <ScrollView
      style={styles.container}
      stickyHeaderIndices={[3]}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
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
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    padding: 1,
    width: '100%',
    backgroundColor: '#1C0633',
  }
});

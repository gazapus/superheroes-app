import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Banner from './components/Banner';
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import CardsContainer from './components/CardsContainer';
import Modal from './components/Modal';

const heroDetails2 =
{
  "response": "success",
  "id": "400",
  "name": "Lady Deathstrike",
  "powerstats": {
    "intelligence": "63",
    "strength": "28",
    "speed": "42",
    "durability": "85",
    "power": "48",
    "combat": "90"
  },
  "biography": {
    "full-name": "Yuriko Oyama",
    "alter-egos": "No alter egos found.",
    "aliases": [
      "Ana Cortes"
    ],
    "place-of-birth": "Osaka, Japan",
    "first-appearance": "Alpha Flight Vol. 1 #33 (1985)",
    "publisher": "Marvel Comics",
    "alignment": "bad"
  },
  "appearance": {
    "gender": "Female",
    "race": "Cyborg",
    "height": [
      "5'9",
      "175 cm"
    ],
    "weight": [
      "128 lb",
      "58 kg"
    ],
    "eye-color": "Brown",
    "hair-color": "Black"
  },
  "work": {
    "occupation": "-",
    "base": "-"
  },
  "connections": {
    "group-affiliation": "Ally of Reverend William Stryker, former employee of Sabretooth, formerly Reavers",
    "relatives": "Kenji Oyama (Lord Dark Wind, father, deceased), two unnamed brothers (deceased)"
  },
  "image": {
    "url": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/810.jpg"
  }
}
const heroDetails3 = { "response": "success", "id": "500", "name": "Omega Red", "powerstats": { "intelligence": "null", "strength": "61", "speed": "null", "durability": "null", "power": "null", "combat": "null" }, "biography": { "full-name": "Arkady Gregorivich", "alter-egos": "No alter egos found.", "aliases": ["Arkady Rossovich", "Vasyliev Arkady"], "place-of-birth": "-", "first-appearance": "-", "publisher": "Marvel Comics", "alignment": "bad" }, "appearance": { "gender": "Male", "race": "null", "height": ["6'11", "211 cm"], "weight": ["425 lb", "191 kg"], "eye-color": "Red", "hair-color": "Blond" }, "work": { "occupation": "Crimelord; former mercenary, KGB agent", "base": "-" }, "connections": { "group-affiliation": "Red Mafia (kingpin); former employee of Sabretooth, The General, Ivan Pushkin, and Matsu'o Tsurayaba; formerly KGB", "relatives": "-" }, "image": { "url": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/208.jpg" } }

const heroDetails4 =
{
  "response": "success", "id": "99", "name": "Black Cat", "powerstats": { "intelligence": "75", "strength": "16", "speed": "33", "durability": "10", "power": "23", "combat": "70" }, "biography": { "full-name": "Felicia Hardy", "alter-egos": "No alter egos found.", "aliases": ["Felicity Harmon"], "place-of-birth": "Queens, New York", "first-appearance": "Amazing Spider-Man #194 (July, 1979)", "publisher": "Marvel Comics", "alignment": "good" }, "appearance": { "gender": "Female", "race": "Human", "height": ["5'10", "178 cm"], "weight": ["120 lb", "54 kg"], "eye-color": "Green", "hair-color": "Blond" }, "work": { "occupation": "Cat burglar; Private investigator, founder of Cat's Eye Investigations.", "base": "-" }, "connections": { "group-affiliation": "Formerly Heroes for Hire", "relatives": "Walter Hardy (father, deceased), Lydia Hardy (mother)" }, "image": { "url": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/32.jpg" }
}
const heroDetails5 = {"response":"success","id":"155","name":"Captain Mar-vell","powerstats":{"intelligence":"null","strength":"80","speed":"null","durability":"null","power":"null","combat":"null"},"biography":{"full-name":"Mar-Vell","alter-egos":"No alter egos found.","aliases":["Captain Marvel","Dr. Walter Lawson"],"place-of-birth":"The city of Rad-Nam on the planet Kree-Lar in the Kree Galaxy (Greater Magellanic Cloud)","first-appearance":"MARVEL SUPERHEROES #18","publisher":"Marvel Comics","alignment":"good"},"appearance":{"gender":"Male","race":"null","height":["6'2'","188 cm"],"weight":["240 lb","108 kg"],"eye-color":"Blue","hair-color":"Blond"},"work":{"occupation":"Captain in the Kree space fleet, later adventurer, later \"Protector of the Universe\"","base":"-"},"connections":{"group-affiliation":"Avengers","relatives":"Mar-Vell (father-deceased), Elysius (mother-deceased)"},"image":{"url":"https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/654.jpg"}}

const heroDetails6 = {"response":"success","id":"27","name":"Angela","powerstats":{"intelligence":"null","strength":"97","speed":"null","durability":"null","power":"null","combat":"null"},"biography":{"full-name":"","alter-egos":"No alter egos found.","aliases":["-"],"place-of-birth":"-","first-appearance":"-","publisher":"Image Comics","alignment":"bad"},"appearance":{"gender":"Female","race":"null","height":["-","0 cm"],"weight":["- lb","0 kg"],"eye-color":"-","hair-color":"-"},"work":{"occupation":"-","base":"-"},"connections":{"group-affiliation":"-","relatives":"-"},"image":{"url":"https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/1070.jpg"}}

export default function App() {
  const [prueba, setPrueba] = useState('X');
  const [heroDetails, setHeroDetails] = useState(heroDetails2);

  function getHero(name) {
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
      <SearchBar onPress={getHero}></SearchBar>
      <CardsContainer>
        <Card
          heroDetails={heroDetails2}
          onPress={setHeroDetails}
        />
        <Card
          heroDetails={heroDetails3}
          onPress={setHeroDetails}
        />
        <Card
          heroDetails={heroDetails4}
          onPress={setHeroDetails}
        />
        <Card
          heroDetails={heroDetails5}
          onPress={setHeroDetails}
        />
        <Card
          heroDetails={heroDetails6}
          onPress={setHeroDetails}
        />
        <Card
          heroDetails={heroDetails2}
          onPress={setHeroDetails}
        />
        <Card
          heroDetails={heroDetails3}
          onPress={setHeroDetails}
        />
        <Card
          heroDetails={heroDetails4}
          onPress={setHeroDetails}
        />
        <Card
          heroDetails={heroDetails5}
          onPress={setHeroDetails}
        />
        <Card
          heroDetails={heroDetails6}
          onPress={setHeroDetails}
        />
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

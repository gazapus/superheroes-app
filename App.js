import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Banner from './components/Banner';
import SearchBar from './components/SearchBar';

export default function App() {
  const [prueba, setPrueba] = useState('X');

  function getHero(name){
    setPrueba(name);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Banner/>
      <SearchBar onPress={getHero}></SearchBar>
      <Text>
        {prueba}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C0633',
    alignItems: 'center',
  },
});

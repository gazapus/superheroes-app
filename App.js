import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Banner from './components/Banner';
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import CardsContainer from './components/CardsContainer';


export default function App() {
  const [prueba, setPrueba] = useState('X');

  function getHero(name) {
    setPrueba(name);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Banner />
      <SearchBar onPress={getHero}></SearchBar>
      <Text>
        {prueba}
      </Text>
      <CardsContainer>
        <Card
          title="Superman"
          imageUri="https://st-listas.20minutos.es/images/2013-05/361739/4031863_640px.jpg?1495723072"
        />
        <Card
          title="Batman"
          imageUri="https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/AUF6KYCRGNFM7E5NT5EEAGKHHI.jpg"
        />
        <Card
          title="Wonder woman"
          imageUri="https://vignette.wikia.nocookie.net/batman/images/c/c5/Wonder_Woman_0302.jpg/revision/latest/top-crop/width/360/height/450?cb=20130311164829&path-prefix=es"
        />
        <Card
          title="Black Adam"
          imageUri="https://i2.wp.com/impulsogeek.com/wp-content/uploads/2020/07/Black-Adam-Portada.png?fit=960%2C500&ssl=1"
        />
        <Card
          title="Superman"
          imageUri="https://st-listas.20minutos.es/images/2013-05/361739/4031863_640px.jpg?1495723072"
        />
        <Card
          title="Batman"
          imageUri="https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/AUF6KYCRGNFM7E5NT5EEAGKHHI.jpg"
        />
        <Card
          title="Wonder woman"
          imageUri="https://vignette.wikia.nocookie.net/batman/images/c/c5/Wonder_Woman_0302.jpg/revision/latest/top-crop/width/360/height/450?cb=20130311164829&path-prefix=es"
        />
        <Card
          title="Black Adam"
          imageUri="https://i2.wp.com/impulsogeek.com/wp-content/uploads/2020/07/Black-Adam-Portada.png?fit=960%2C500&ssl=1"
        /><Card
          title="Superman"
          imageUri="https://st-listas.20minutos.es/images/2013-05/361739/4031863_640px.jpg?1495723072"
        />
        <Card
          title="Batman"
          imageUri="https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/AUF6KYCRGNFM7E5NT5EEAGKHHI.jpg"
        />
        <Card
          title="Wonder woman"
          imageUri="https://vignette.wikia.nocookie.net/batman/images/c/c5/Wonder_Woman_0302.jpg/revision/latest/top-crop/width/360/height/450?cb=20130311164829&path-prefix=es"
        />
        <Card
          title="Black Adam"
          imageUri="https://i2.wp.com/impulsogeek.com/wp-content/uploads/2020/07/Black-Adam-Portada.png?fit=960%2C500&ssl=1"
        />
        <Card
          title="Superman"
          imageUri="https://st-listas.20minutos.es/images/2013-05/361739/4031863_640px.jpg?1495723072"
        />
        <Card
          title="Batman"
          imageUri="https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/AUF6KYCRGNFM7E5NT5EEAGKHHI.jpg"
        />
        <Card
          title="Wonder woman"
          imageUri="https://vignette.wikia.nocookie.net/batman/images/c/c5/Wonder_Woman_0302.jpg/revision/latest/top-crop/width/360/height/450?cb=20130311164829&path-prefix=es"
        />
        <Card
          title="Black Adam"
          imageUri="https://i2.wp.com/impulsogeek.com/wp-content/uploads/2020/07/Black-Adam-Portada.png?fit=960%2C500&ssl=1"
        />
        <Card
          title="Superman"
          imageUri="https://st-listas.20minutos.es/images/2013-05/361739/4031863_640px.jpg?1495723072"
        />
        <Card
          title="Batman"
          imageUri="https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/AUF6KYCRGNFM7E5NT5EEAGKHHI.jpg"
        />
        <Card
          title="Wonder woman"
          imageUri="https://vignette.wikia.nocookie.net/batman/images/c/c5/Wonder_Woman_0302.jpg/revision/latest/top-crop/width/360/height/450?cb=20130311164829&path-prefix=es"
        />
        <Card
          title="Black Adam"
          imageUri="https://i2.wp.com/impulsogeek.com/wp-content/uploads/2020/07/Black-Adam-Portada.png?fit=960%2C500&ssl=1"
        /><Card
          title="Superman"
          imageUri="https://st-listas.20minutos.es/images/2013-05/361739/4031863_640px.jpg?1495723072"
        />
        <Card
          title="Batman"
          imageUri="https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/AUF6KYCRGNFM7E5NT5EEAGKHHI.jpg"
        />
        <Card
          title="Wonder woman"
          imageUri="https://vignette.wikia.nocookie.net/batman/images/c/c5/Wonder_Woman_0302.jpg/revision/latest/top-crop/width/360/height/450?cb=20130311164829&path-prefix=es"
        />
        <Card
          title="Black Adam"
          imageUri="https://i2.wp.com/impulsogeek.com/wp-content/uploads/2020/07/Black-Adam-Portada.png?fit=960%2C500&ssl=1"
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
  },
});

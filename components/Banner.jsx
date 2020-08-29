import React from 'react';
import { StyleSheet, Text, ImageBackground, Dimensions } from 'react-native';

export default function () {
    return (
        <ImageBackground
            style={styles.banner}
            source={require('../assets/city.jpg')}
        >
            <Text style={styles.title}>SUPER HEROES</Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    banner: {
        width: '100%',
        height: Dimensions.get('screen').height * 0.22,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFFFC5',
        textShadowColor: '#75309E',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    }
});

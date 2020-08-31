import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function (props) {
    const [publisherLogo, setPublisherLogo] = useState(<Text style={styles.logoText}>...</Text>)

    useEffect(() => {
        switch (props.heroDetails.biography.publisher) {
            case 'Marvel Comics': 
                setPublisherLogo(
                    <Image
                        style={styles.logoImage}
                        source={require('../assets/Marvel.png')}
                    />
                ); break;
            case 'DC Comics': 
                setPublisherLogo(
                    <Image
                        style={styles.logoImage}
                        source={require('../assets/DC.png')}
                    />
                ); break;
            default: 
                setPublisherLogo(
                    <Text style={styles.logoText}>
                        {props.heroDetails.biography.publisher}
                    </Text>
                );
                break;
        }
    }, []);

    return (
        <View style={styles.cardDescriptionContainer}>
            <Text style={styles.title}>
                {props.heroDetails.name}
            </Text>
            <Text style={styles.textBasic}>
                <Text style={styles.textLabel}>Name: </Text>
                <Text>{props.heroDetails.biography['full-name']}</Text>
            </Text>
            <Text style={styles.textBasic}>
                <Text style={styles.textLabel}>Origin: </Text>
                <Text>
                    {(props.heroDetails.biography['place-of-birth'] !== '-') ? props.heroDetails.biography['place-of-birth'] : 'Unknown'}
                </Text>
            </Text>
            <Text style={styles.textBasic}>
                <Text style={styles.textLabel}>Species: </Text>
                <Text>
                    {(props.heroDetails.appearance.race === null ||
                      props.heroDetails.appearance.race === 'null'  
                    ) ? 'Unknown' : props.heroDetails.appearance.race}
                </Text>
            </Text>
            <View style={styles.logoContainer}>
                {publisherLogo}
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    cardDescriptionContainer: {
        width: '80%',
        borderStyle: 'solid',
        borderColor: 'white',
        color: 'white',
        padding: 8
    },
    title: {
        fontSize: 23,
        padding: 5,
        textTransform: 'capitalize',
        textAlign: 'center',
        color: '#A5A04E',
        fontWeight: 'bold'
    },
    textBasic: {
        color: 'white',
        fontSize: 15
    },
    textLabel: {
        fontWeight: 'bold'
    },
    logoContainer: {
        width: '100%',
        alignItems: 'flex-end'
    },
    logoImage: {
        width: 35,
        height: 35,
        margin: 0
    },
    logoText: {
        fontWeight: 'bold',
        color: '#232ECF',
    }
});
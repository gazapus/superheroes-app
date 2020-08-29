import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function (props) {
    const [publisherLogo, setPublisherLogo] = useState(require('../assets/interrogation.png'))

    useEffect(() => {
        switch (props.heroDetails.biography.publisher) {
            case 'Marvel Comics': setPublisherLogo(require('../assets/Marvel.png')); break;
            case 'DC Comics': setPublisherLogo(require('../assets/DC.png')); break;
            default: setPublisherLogo(require('../assets/interrogation.png')); break;
        }
    });

    return (
        <View style={styles.cardDescriptionContainer}>
            <Text style={styles.title}>
                {props.heroDetails.name}
            </Text>
            <Text style={styles.textBasic}>
                <Text style={styles.textLabel}>Nombre: </Text>
                <Text>{props.heroDetails.biography['full-name']}</Text>
            </Text>
            <Text style={styles.textBasic}>
                <Text style={styles.textLabel}>Lugar de origen: </Text>
                <Text>{props.heroDetails.biography['place-of-birth']}</Text>
            </Text>
            <Text style={styles.textBasic}>
                <Text style={styles.textLabel}>Especie: </Text>
                <Text>{props.heroDetails.appearance.race}</Text>
            </Text>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logoImage}
                    source={publisherLogo}
                />
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
        fontSize: 20,
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
        margin: 4
    }
});

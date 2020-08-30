import React from 'react';
import { StyleSheet, Text, ImageBackground, TouchableHighlight, Dimensions, View } from 'react-native';

export default function (props) {
    return (
        <View style={styles.cardContainer}>
            <TouchableHighlight onPress={() => props.onPress(props.heroDetails)}>
                <ImageBackground
                    style={styles.cardImage}
                    source={{uri: props.heroDetails.image.url}}
                    imageStyle={{   // Need this for put the image on the top
                        resizeMode: "cover",
                        height: 220, 
                        top: 0
                    }}
                >
                    <Text style={styles.cardText}>
                        {props.heroDetails.name}
                    </Text>
                </ImageBackground>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        width: Dimensions.get('screen').width * 0.3,
        height: Dimensions.get('screen').width * 0.3,
        borderRadius: 5,
        backgroundColor: '#190037',
        marginBottom: 10
    },
    cardImage: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    cardText: {
        textTransform: 'uppercase',
        width: '100%',
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(59, 34, 73, 0.55)'
    }
});

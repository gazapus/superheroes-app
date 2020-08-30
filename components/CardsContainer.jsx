import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

export default function (props) {

    return (
        <View style={styles.cardsContainer}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    cardsContainer: {
        width: '99%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    scrollArea: {
        width: '100%'
    }
});

import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

export default function (props) {
    return (
        <ScrollView style={styles.scrollArea}>
            <View style={styles.cardsContainer}>
                {props.children}
            </View>
        </ScrollView>
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

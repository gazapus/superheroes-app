import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

export default function (props) {
    return (
        <ScrollView>
            <View style={styles.cardsContainer}>
                {props.children}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    cardsContainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    }
});

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Dimensions, Image, TouchableHighlight } from 'react-native';

export default function (props) {
    const [text, setText] = useState('');

    function onPress() {
        props.onPress(text);
    }

    return (
        <View style={styles.searchBarContainer}>
            <TextInput
                style={styles.searchInput}
                onChangeText={newText => setText(newText)}
                value={text}
                maxLength={40}
                placeholder="Buscar"
                placeholderTextColor="#78359D"
                onEndEditing={onPress}
            />
            <TouchableHighlight onPress={onPress}>
                <Image
                    style={styles.searchImage}
                    source={require('../assets/searchicon.png')}
                />
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    searchBarContainer: {
        width: '95%',
        height: Dimensions.get('screen').height * 0.07,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#A6A63D',
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 8,
        paddingRight: 8,
        margin: 6
    },
    searchInput: {
        height: '98%',
        fontSize: 22,
        flexGrow: 1,
        color: '#C9C927'
    },
    searchImage: {
        width: Dimensions.get('screen').height * 0.05,
        height: Dimensions.get('screen').height * 0.05,
    }
});

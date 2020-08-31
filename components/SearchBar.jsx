import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Dimensions, Image, TouchableHighlight } from 'react-native';

export default function (props) {
    const [text, setText] = useState('');

    return (
        <View style={styles.searchBarContainer}>
            <TextInput
                style={styles.searchInput}
                onChangeText={newText => setText(newText)}
                value={text}
                maxLength={40}
                placeholder="Buscar"
                placeholderTextColor="#78359D"
                onSubmitEditing={ ()=> {props.onPress(text)}}
            />
            <TouchableHighlight onPress={ ()=> {props.onPress(text)}} >
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
        height: Dimensions.get('screen').height * 0.065,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 0,
        borderColor: 'rgba(166, 166, 61, 0.3)',
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 8,
        paddingRight: 8,
        margin: 6,
        backgroundColor: 'rgba(36, 7, 66, 0.9)'
    },
    searchInput: {
        fontSize: 20,
        flexGrow: 1,
        color: '#C9C927',
        textAlign: 'center',
    },
    searchImage: {
        width: Dimensions.get('screen').height * 0.045,
        height: Dimensions.get('screen').height * 0.045,
    }
});

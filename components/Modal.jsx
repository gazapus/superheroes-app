import React from 'react';
import { StyleSheet, Modal, View, Text, Image, ImageBackground, Button, Dimensions } from 'react-native';
import CardDescription from './CardDescription'

export default function (props) {
    const imageUri = (props.heroDetails.image === undefined) ? '' : props.heroDetails.image.url;

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.open}
            onRequestClose={() => props.setHeroDetails({})}
        >
            <View style={styles.modalWindow}>
                <View style={styles.modalContent}>
                    <View style={styles.modalImageContainer}>
                        <ImageBackground
                            style={styles.modalImage}
                            source={{ uri: imageUri }}
                            imageStyle={{ resizeMode: 'contain' }}
                        />
                    </View>
                    <CardDescription heroDetails={props.heroDetails} />
                    <View>
                        <Button
                            onPress={() => props.setHeroDetails({})}
                            title="Cerrar"
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalWindow: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    modalContent: {
        backgroundColor: '#190D26',
        alignItems: 'center',
        justifyContent: 'center',
        width: '85%',
        paddingTop: 10,
        paddingBottom: 20
    },
    modalImageContainer: {
        width: '95%',
        margin: 5,
    },
    modalImage: {
        width: '100%',
        height: Dimensions.get('window').height * 0.5,
    }
});

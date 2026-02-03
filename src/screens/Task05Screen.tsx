import React from 'react';
import { View, Text, StyleSheet, Image,  } from 'react-native';

export default function Task05Screen() {
    return (
        <View style={styles.container}>
            <Image source={{uri: "https://cdn.britannica.com/16/234216-050-C66F8665/beagle-hound-dog.jpg"}} style={styles.image}/>
            <Text style={styles.title}>Imagem de um cachorro Beagle.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'darkslategray',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        gap:10,
    },
    title: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: 300,
    }
});
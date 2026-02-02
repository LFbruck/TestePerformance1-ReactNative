import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Task03Screen() {
    return (
        <View style={styles.container}>
            <Image source={{uri: "https://static.vecteezy.com/ti/fotos-gratis/t2/36324708-ai-gerado-cenario-do-uma-tigre-caminhando-dentro-a-floresta-foto.jpg"}}
            style={{ width:"100%", height: 500}}/>
            <Text style={styles.title}>Tigre. Um dos animais mais incriveis do mundo!</Text>
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
        gap: 10,
    },
    title: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
});
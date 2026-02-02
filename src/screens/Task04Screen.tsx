import React from 'react';
import {  Text, StyleSheet, ScrollView } from 'react-native';

export default function Task04Screen() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} >
            <Text style={styles.title}>1.Bitcoin</Text>
            <Text style={styles.title}>2.Ouro</Text>
            <Text style={styles.title}>3.Prata</Text>
            <Text style={styles.title}>4.Ethereum</Text>
            <Text style={styles.title}>5.Solana</Text>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'darkslategray',

    },
    contentContainer:{
        alignItems: 'center',
        padding: 20,
    },
    title: {
        color: 'white',
        fontSize: 70,
        textAlign: 'center',
    },
});
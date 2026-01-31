import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Task01Screen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindos ao meu TP1 de React Native</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'darkslategray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
    },
});
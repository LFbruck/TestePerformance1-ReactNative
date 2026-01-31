import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TaskXXScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tarefa XX - Em desenvolvimento</Text>
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
    },
    title: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
});
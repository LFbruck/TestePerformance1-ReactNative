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
            <Text style={styles.title}>6. Dólar</Text>
            <Text style={styles.title}>7. Euro</Text>
            <Text style={styles.title}>8. Libra</Text>
            <Text style={styles.title}>9. Iene</Text>
            <Text style={styles.title}>10. Real</Text>
            <Text style={styles.title}>6. Diamante</Text>
            <Text style={styles.title}>7. Platina</Text>
            <Text style={styles.title}>8. Dólar</Text>
            <Text style={styles.title}>9. Euro</Text>
            <Text style={styles.title}>10. Cardano</Text>
            <Text style={styles.title}>11. Polkadot</Text>
            <Text style={styles.title}>12. Litecoin</Text>
            <Text style={styles.title}>13. Chainlink</Text>
            <Text style={styles.title}>14. Avalanche</Text>
            <Text style={styles.title}>15. Polygon</Text>
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
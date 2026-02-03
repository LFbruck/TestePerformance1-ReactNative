import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Task09Screen() {
    return (
        <View style={styles.container}>
            <Image source={{uri:"https://www.atptour.com/-/media/alias/player-gladiator-headshot/a0e2"}} style={styles.fotoPerfil}></Image>
            <Text style={styles.nome} >CARLOS ALCARAZ  </Text>
            <Text style={styles.biografia}>Tenista espanhol, número 1 do mundo. Aos 21 anos, já conquistou 4 Grand Slams (US Open 2022, Wimbledon 2024, Roland Garros 2024, US Open 2024). Conhecido por seu jogo explosivo, velocidade e mentalidade vencedora. Considerado o futuro do tênis mundial.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'darkslategray',
        gap:20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
   fotoPerfil:{
        width: 300,
       height:450,
       borderRadius: 100,
       borderWidth: 3,
       borderColor: '#fff',
   },
    nome: {
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 50,
    },
    biografia: {
        color: 'white',
        fontSize:20,
        marginTop:15,
        textAlign: 'center',
    }
});
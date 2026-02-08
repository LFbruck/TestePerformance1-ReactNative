import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Pressable} from 'react-native';

export default function Task14Screen() {

    const cores = ["red", "blue", "green", "yellow", "purple", "pink", "brown", "orange"];

    const [fundo, setFundo] = useState("grey");
    const mudarCor = ()=>{
        const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
        setFundo(corAleatoria);
    }
    return (
        <View style={[styles.container,{backgroundColor:fundo}]}>
            <Pressable onPress={mudarCor} style={styles.botao} >
                <Text style={styles.texto}>Clique para mudar a cor de fundo</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    botao: {
        backgroundColor: "black",
        borderRadius: 10,
        height: 100,
        justifyContent: 'center',

    },
    texto: {
        color: "white",
        fontSize: 40,
    }

});
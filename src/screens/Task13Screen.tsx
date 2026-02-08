import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function Task13Screen() {

    const [contador, setContador] = useState(0);
    const diminuir = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    };

    return (
        <View style={styles.container}>
            <Button  color="green" title="Clique aqui para aumentar" onPress={() => setContador( contador + 1)} />
            <Button  color="red" title="Clique aqui pra diminuir" onPress={diminuir}></Button>

            <Text style={styles.texto}>Numero de cliques: {contador}</Text>

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
        gap:20,
    },
    title: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    texto: {
        backgroundColor: "orange",
        fontSize: 40,
    },

});
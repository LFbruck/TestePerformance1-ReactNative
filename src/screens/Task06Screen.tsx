import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Task06Screen() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.botao1}>
                <Text style={styles.title}>Botão 1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao2}>
                <Text style={styles.title}>Botão 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao3}>
                <Text style={styles.title}>Botão 3</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'darkslategray',
        gap:40,
        padding: 40,
    },
    title: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    botao1: {
        width: '100%',
        height:100,
        backgroundColor: "red",
        borderRadius: 5,
    },
    botao3:{
        width:200,
        height:200,
        backgroundColor: "blue",
        borderRadius: 10,

    },
    botao2:{
        width:100,
        height:300,
        backgroundColor: "green",
        borderRadius: 1,
    }
}
)

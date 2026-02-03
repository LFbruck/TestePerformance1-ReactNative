import React from 'react';
import { View, Text, StyleSheet , TouchableOpacity, Alert} from 'react-native';

export default function Task07Screen() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.botao1} onPress={()=> Alert.alert("Voce clicou", "No botão 1!")}>
                <Text style={styles.title}>Botão 1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao2} onPress={()=> Alert.alert("Botão 2", "Clicado!")}>
                <Text style={styles.title}>Botão 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao3} onPress={()=> Alert.alert("Opaaa Voce clicou!", "No botão 3!")}>
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

            justifyContent: 'center',
        },
        botao3:{
            width:200,
            height:200,
            backgroundColor: "blue",
            borderRadius: 10,
            justifyContent: 'center'

        },
        botao2:{
            width:100,
            height:300,
            backgroundColor: "green",
            borderRadius: 1,
            justifyContent: 'center'
        }
    }
)

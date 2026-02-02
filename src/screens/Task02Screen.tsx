import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';

export default function Task02Screen() {

    const [usuario, setUsuario] = React.useState("");
    const [senha, setSenha] = React.useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Usuario:</Text>

            <TextInput style={styles.input} placeholder={"Digite seu Usuario"}  value={usuario} onChangeText={setUsuario}  />

            <Text style={styles.title}>Senha:</Text>
            <TextInput style={styles.input} placeholder={"Digite sua Senha"} value={senha} onChangeText={setSenha}  />
            <Button title="Entrar" onPress={() => {

                console.log("Botão clicado!");
                console.log("Usuario:", usuario);
                console.log("Senha:", senha);
                if (usuario === "" || senha === "") {
                    Alert.alert("Invalido! Usuario ou Senha não preenchido!");
                } else{
                    Alert.alert("Sucesso!", "Login Efetuado")

            }}}/>

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
        gap: 15,
    },
    title: {
        color: 'white',
        fontSize: 40,

    },
    input:{
        borderColor: "white",
        backgroundColor: "white",
        fontSize:20,
    }
});
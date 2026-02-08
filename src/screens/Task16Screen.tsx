import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default function Task16Screen() {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Seu feedback:</Text>
            <TextInput
                multiline={true}
                style={styles.input}
                placeholder="Escreva seu feedback aqui...d"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "darkslategray",
        padding: 20,
    },
    label: {
        color: "white",
        fontSize: 20,
        marginBottom: 10,
    },
    input: {
        backgroundColor: "white",
        height: 200,
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "white",
    },
});
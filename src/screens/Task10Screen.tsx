import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

export default function Task10Screen() {
    // Array de itens da lista de compras
    const listaCompras = [
        { id: "1", nome: "Arroz" },
        { id: "2", nome: "Feijão" },
        { id: "3", nome: "Macarrão" },
        { id: "4", nome: "Óleo" },
        { id: "5", nome: "Açúcar" },
        { id: "6", nome: "Café" },
        { id: "7", nome: "Leite" },
        { id: "8", nome: "Pão" },
        { id: "9", nome: "Manteiga" },
        { id: "10", nome: "Ovos" },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de com flatlist</Text>

            <FlatList
                data={listaCompras}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemTexto}>{item.nome}</Text>
                    </View>
                )}
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
    titulo: {
        color: "white",
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        marginTop: 20,
    },
    itemContainer: {
        backgroundColor: "#ffffff20",
        padding: 15,
        marginVertical: 8,
        borderLeftColor: "white",
    },
    itemTexto: {
        color: "white",
        fontSize: 18,
    },
});
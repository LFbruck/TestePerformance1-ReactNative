import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function Task15Screen() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.noticia}>
                    <Text style={styles.titulo}>Brasil conquista medaalha de atletismo</Text>
                    <Image
                        source={{ uri: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400" }}
                        style={styles.imagem}
                    />
                    <Text style={styles.texto}>Corredora brasileira conquista medalha de ouro</Text>
                </View>

                <View style={styles.noticia}>
                    <Text style={styles.titulo}>Nova tecnologia dde IA no mercado</Text>
                    <Image
                        source={{ uri: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400" }}
                        style={styles.imagem}
                    />
                    <Text style={styles.texto}>Empresa lança produto inovador que promete revolucionar o setor tech.</Text>
                </View>

                <View style={styles.noticia}>
                    <Text style={styles.titulo}>Bitcoin em queda!</Text>
                    <Image
                        source={{ uri: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400" }}
                        style={styles.imagem}
                    />
                    <Text style={styles.texto}>Oportunidade de compra, enquanto desesperados vendem.</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "darkslategray",
        padding: 20,
        gap: 50,

    },
    noticia: {
        backgroundColor: "white",
        padding: 15,
        marginBottom: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "gray",
        height: 300,

    },
    titulo: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    imagem: {
        width: "100%",
        height: 150,
        marginBottom: 10,
    },
    texto: {
        fontSize: 14,
    },
});
import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function Task11Screen() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Galeria Jeep</Text>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{uri: "https://www.autoo.com.br/fotos/2022/3/296_222/jeep_compass_2022_1_16032022_70918_296_222.jpg"}}
                        style={styles.image}
                    />
                    <Text style={styles.legenda}>Jeep Compass</Text>
                </View>

                <View style={styles.imageContainer}>
                    <Image
                        source={{uri: "https://motorshow.com.br/wp-content/uploads/sites/2/2022/09/jeep-avenger-02-6319d0b791c05-scaled.jpeg"}}
                        style={styles.image}
                    />
                    <Text style={styles.legenda}>Jeep Avenger</Text>
                </View>

                <View style={styles.imageContainer}>
                    <Image
                        source={{uri: "https://quatrorodas.abril.com.br/wp-content/uploads/2024/04/Jeep-Commander-Longitude-2025.jpg?crop=1&resize=1212,909"}}
                        style={styles.image}
                    />
                    <Text style={styles.legenda}>Jeep Commander</Text>
                </View>

                <View style={styles.imageContainer}>
                    <Image
                        source={{uri: "data:image/jpeg;base64,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"}}
                        style={styles.image}
                    />
                    <Text style={styles.legenda}>Jeep Renegade</Text>
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
    },
    titulo: {
        color: "white",
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        marginTop: 20,
    },
    imageContainer: {
        marginRight: 15,
        alignItems: "center",
    },
    image: {
        width: 500,
        height: 200,
        borderRadius: 10,
        resizeMode: "cover",
    },
    legenda: {
        color: "white",
        fontSize: 16,
        marginTop: 10,
        textAlign: "center",
    },
});
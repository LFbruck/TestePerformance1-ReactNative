import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }: any) {
    const tasks = [
        { id: 1, title: 'Tarefa 01', description: 'Tela de boas-vindas' },
        { id: 2, title: 'Tarefa 02', description: 'Login básico' },
        { id: 3, title: 'Tarefa 03', description: 'Elemento Image' },
        { id: 4, title: 'Tarefa 04', description: 'Elemento ScrollView' },
        { id: 5, title: 'Tarefa 05', description: 'Elemento Image' },
        { id: 6, title: 'Tarefa 06', description: 'Personalização de botões' },
        { id: 7, title: 'Tarefa 07', description: 'Resposta ao Button' },
        { id: 8, title: 'Tarefa 08', description: 'TouchableOpacity' },
        { id: 9, title: 'Tarefa 09', description: 'Tela de perfil simples' },
        { id: 10, title: 'Tarefa 10', description: 'Lista de compras' },
        { id: 11, title: 'Tarefa 11', description: 'Galeria com ScrollView' },
        { id: 12, title: 'Tarefa 12', description: 'Contagem de cliques' },
        { id: 13, title: 'Tarefa 13', description: 'Contagem de cliques V2' },
        { id: 14, title: 'Tarefa 14', description: 'Pressable' },
        { id: 15, title: 'Tarefa 15', description: 'Página de Notícias' },
        { id: 16, title: 'Tarefa 16', description: 'Campo de feedback' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Teste de Performance 1</Text>


            <ScrollView style={styles.scrollView}>
                {tasks.map((task) => (
                    <TouchableOpacity
                        key={task.id}
                        style={styles.taskButton}
                        onPress={() => navigation.navigate(`Task${task.id.toString().padStart(2, '0')}`)}
                    >
                        <Text style={styles.taskTitle}>{task.title}</Text>
                        <Text style={styles.taskDescription}>{task.description}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
        textAlign: 'center',
    },
    scrollView: {
        flex: 1,
    },
    taskButton: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    taskTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 5,
    },
    taskDescription: {
        fontSize: 14,
        color: '#7f8c8d',
    },
});
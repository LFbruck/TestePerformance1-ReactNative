import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import Task01Screen from '../screens/Task01Screen';
import Task02Screen from '../screens/Task02Screen';
import Task03Screen from '../screens/Task03Screen';
import Task04Screen from '../screens/Task04Screen';
import Task05Screen from '../screens/Task05Screen';
import Task06Screen from '../screens/Task06Screen';
import Task07Screen from '../screens/Task07Screen';
import Task08Screen from '../screens/Task08Screen';
import Task09Screen from '../screens/Task09Screen';
import Task10Screen from '../screens/Task10Screen';
import Task11Screen from '../screens/Task11Screen';
import Task12Screen from '../screens/Task12Screen';
import Task13Screen from '../screens/Task13Screen';
import Task14Screen from '../screens/Task14Screen';
import Task15Screen from '../screens/Task15Screen';
import Task16Screen from '../screens/Task16Screen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'TP1 - React Native' }}
                />
                <Stack.Screen name="Task01" component={Task01Screen} options={{ title: 'Tarefa 01' }} />
                <Stack.Screen name="Task02" component={Task02Screen} options={{ title: 'Tarefa 02' }} />
                <Stack.Screen name="Task03" component={Task03Screen} options={{ title: 'Tarefa 03' }} />
                <Stack.Screen name="Task04" component={Task04Screen} options={{ title: 'Tarefa 04' }} />
                <Stack.Screen name="Task05" component={Task05Screen} options={{ title: 'Tarefa 05' }} />
                <Stack.Screen name="Task06" component={Task06Screen} options={{ title: 'Tarefa 06' }} />
                <Stack.Screen name="Task07" component={Task07Screen} options={{ title: 'Tarefa 07' }} />
                <Stack.Screen name="Task08" component={Task08Screen} options={{ title: 'Tarefa 08' }} />
                <Stack.Screen name="Task09" component={Task09Screen} options={{ title: 'Tarefa 09' }} />
                <Stack.Screen name="Task10" component={Task10Screen} options={{ title: 'Tarefa 10' }} />
                <Stack.Screen name="Task11" component={Task11Screen} options={{ title: 'Tarefa 11' }} />
                <Stack.Screen name="Task12" component={Task12Screen} options={{ title: 'Tarefa 12' }} />
                <Stack.Screen name="Task13" component={Task13Screen} options={{ title: 'Tarefa 13' }} />
                <Stack.Screen name="Task14" component={Task14Screen} options={{ title: 'Tarefa 14' }} />
                <Stack.Screen name="Task15" component={Task15Screen} options={{ title: 'Tarefa 15' }} />
                <Stack.Screen name="Task16" component={Task16Screen} options={{ title: 'Tarefa 16' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
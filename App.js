import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home'
import Films from './screens/Films'
import Payments from './screens/Payments'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator initialRoute='Home' screenOptions={{ headerShown: false }} >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Films' component={Films} />
        <Stack.Screen name='Payments' component={Payments} />
      </Stack.Navigator>
    </NavigationContainer>
  )
} 
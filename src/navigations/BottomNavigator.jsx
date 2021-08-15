import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import RoutineNavigator from './RoutineNavigator';
import Pomodoro from '../screens/Pomodoro/Pomodoro';
import Mantra from '../screens/Mantra/Mantra';

const Tab = createBottomTabNavigator()

export default function BottomNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{headerStyle: {backgroundColor: '#08FF7A'}}}>
                <Tab.Screen name='Routine' component={RoutineNavigator} options={{headerShown: false}} />
                <Tab.Screen name='Pomodoro' component={Pomodoro} />
                <Tab.Screen name='Mantra' component={Mantra} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

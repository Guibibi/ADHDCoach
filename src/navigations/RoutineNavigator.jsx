import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Routine from '../screens/Routine/Routine';
import AddRoutine from '../screens/Routine/AddRoutine/AddRoutine';

const RoutineStack = createStackNavigator()

export default function RoutineNavigator() {
    return (
        <RoutineStack.Navigator screenOptions={{headerStyle: {backgroundColor: '#08FF7A'}, headerTintColor: 'white',}} >
            <RoutineStack.Screen name='Routine' component={Routine} />
            <RoutineStack.Screen name='AddRoutine' component={AddRoutine} />
        </RoutineStack.Navigator>
    )
}

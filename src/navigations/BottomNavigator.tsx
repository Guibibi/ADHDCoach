import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import RoutineNavigator from "./RoutineNavigator";
import Pomodoro from "../screens/Pomodoro/Pomodoro";
import Mantra from "../screens/Mantra/Mantra";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#08FF7A" },
          headerTintColor: "white",
        }}
      >
        <Tab.Screen
          name="RoutineNavigator"
          component={RoutineNavigator}
          options={{
            headerShown: false,
            title: "Routine",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="time-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Pomodoro"
          component={Pomodoro}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="timer-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Mantra"
          component={Mantra}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ribbon-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

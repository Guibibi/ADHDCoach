import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Routine from "../screens/Routine/Routine";
import AddRoutine from "../screens/Routine/AddRoutine/AddRoutine";
import { Ionicons } from "@expo/vector-icons";
import { Icon, Text, Button, Logo } from "native-base";

const RoutineStack = createStackNavigator();

export default function RoutineNavigator() {
  return (
    <RoutineStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#08FF7A" },
        headerTintColor: "white",
      }}
    >
      <RoutineStack.Screen
        name="Routine"
        component={Routine}
        options={({ navigation }) => ({
          headerRight: () => (
            <Icon
              color="#fff"
              right={5}
              onPress={() => {
                navigation.push("AddRoutine");
              }}
              as={<Ionicons name="add-outline" />}
            />
          ),
        })}
      />
      <RoutineStack.Screen name="AddRoutine" component={AddRoutine} />
    </RoutineStack.Navigator>
  );
}

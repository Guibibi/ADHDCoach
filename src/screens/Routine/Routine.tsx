import React, { useEffect, useState } from "react";
import {
  Box,
  FlatList,
  Center,
  Text,
  Checkbox,
  VStack,
  Flex,
} from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/core";

import Card from "../../components/Card";

export default function Routine({ navigation }) {
  const [tasks, setTasks] = useState(null);
  const isFocused = useIsFocused();
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("tasks");
      if (value !== null) {
        setTasks(JSON.parse(value));
      }
    } catch (e) {
      // error reading value
    }
    console.log(tasks);
  };

  useEffect(() => {
    getData();
  }, [isFocused]);

  return (
    <Box h="100%" px={4} pt={2} bg="coolGray.500">
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card item={item} />}
      />
    </Box>
  );
}

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
    console.log("====================================");
    console.log("docused");
    console.log("====================================");
  }, [isFocused]);

  return (
    <Box h="100%" bg="coolGray.300">
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <Box px={0} py={4} mb={0} bg="coolGray.100">
            <Flex
              direction="row"
              justifyContent="space-around"
              alignItems="center"
            >
              <VStack w={10}>
                <Center>
                  <Text fontSize="lg">{item.streak}</Text>
                  <Text fontSize="xs">days</Text>
                </Center>
              </VStack>

              <VStack w={200}>
                <Center>
                  <Text fontSize="xl">{item.title}</Text>
                  <Text fontSize="xs">{item.alarmTime}</Text>
                </Center>
              </VStack>
              <Checkbox value="one" aria-label="Done" w={10}></Checkbox>
            </Flex>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
}

import React from "react";
import {
  Box,
  FlatList,
  Center,
  NativeBaseProvider,
  Text,
  Fab,
  Icon,
  Checkbox,
  Divider,
  VStack,
  Flex,
  HStack,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

export default function Routine({ navigation }) {
  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Take a shower",
      streak: 6,
      alarmTime: "9:00am",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Brush teeth",
      streak: 20,
      alarmTime: "12:00am",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Exercise",
      streak: 15,
      alarmTime: "9:00pm",
    },
  ];

  return (
    <Box h="100%" bg="coolGray.300">
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Box px={0} py={4} mb={0} bg="coolGray.100">
            <Flex
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              space={4}
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

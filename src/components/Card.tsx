import React from "react";
import {
  Box,
  FlatList,
  Center,
  Text,
  Checkbox,
  VStack,
  Flex,
} from "native-base";
import { Swipeable } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";
import { Ionicons } from "@expo/vector-icons";
export default function Card({ item }) {
  const leftSwipe = () => {
    return (
      <Box
        alignItems="center"
        justifyContent="center"
        px={0}
        py={4}
        borderRadius="md"
        borderRightRadius="md"
        w="30%"
        my={2}
        bg="red.600"
      >
        <Ionicons name="trash-outline" size={26} color="white" />
      </Box>
    );
  };

  return (
    <Swipeable renderLeftActions={leftSwipe} overshootLeft={false}>
      <Animatable.View animation="bounceIn">
        <Box px={0} py={4} borderRadius="lg" my={2} bg="white">
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
      </Animatable.View>
    </Swipeable>
  );
}

import React from "react";
import { VStack, Center, FormControl, Input } from "native-base";

export default function AddRoutine() {
  return (
    <VStack space={10} mx={5} my={5}>
      <FormControl isRequired>
        <FormControl.Label>Task name?</FormControl.Label>
        <Input p={2} placeholder="Is it react?" />
        <FormControl.ErrorMessage>What time?</FormControl.ErrorMessage>
      </FormControl>
      <FormControl isRequired>
        <FormControl.Label>Favorite framework</FormControl.Label>
        <Input p={2} placeholder="Is it react?" />
      </FormControl>
    </VStack>
  );
}

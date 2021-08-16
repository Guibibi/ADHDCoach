import React, { useState } from "react";
import {
  VStack,
  Center,
  FormControl,
  Input,
  Box,
  Button,
  Text,
  HStack,
  Select,
  Flex,
} from "native-base";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function AddRoutine() {
  const [datePickerVisibility, setDatePickerVisibility] = useState(false);
  const [timeChoosen, setTimeChoosen] = useState(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    setTimeChoosen(date.toString());
  };

  return (
    <Box safeArea>
      <VStack space={10} mx={5} my={5}>
        <FormControl isRequired>
          <FormControl.Label>Task name?</FormControl.Label>
          <Input p={2} placeholder="Take a shower" />
        </FormControl>
        <FormControl isRequired alignItems="center">
          <FormControl.Label>What time?</FormControl.Label>
          <Button
            size="md"
            w={80}
            colorScheme="primary"
            onPress={() => {
              showDatePicker();
            }}
          >
            Choose date
          </Button>
          <Text fontSize="xs">{timeChoosen}</Text>
          <DateTimePickerModal
            isVisible={datePickerVisibility}
            mode="time"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </FormControl>
        <FormControl isRequired>
          <FormControl.Label>What interval?</FormControl.Label>
          <Flex alignItems="center" direction="row" justifyContent="center">
            <Text>Every </Text>
            <Input p={2} placeholder="Number" />
            <Select placeholder="Repetition" w={40}>
              <Select.Item label="minutes" value="minutes" />
              <Select.Item label="hours" value="hours" />
              <Select.Item label="days" value="days" />
              <Select.Item label="weeks" value="weeks" />
              <Select.Item label="months" value="months" />
              <Select.Item label="years" value="years" />
            </Select>
          </Flex>
        </FormControl>
      </VStack>
    </Box>
  );
}

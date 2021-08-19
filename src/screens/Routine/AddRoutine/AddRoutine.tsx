import React, { useState } from "react";
import { VStack, Center, FormControl, Input, Button } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePicker from "@react-native-community/datetimepicker";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function AddRoutine() {
  const [task, setTask] = useState("");
  const [time, setTime] = useState(new Date(1598051730000));
  const [show, setShow] = useState(null);

  const showDate = () => {
    setShow(true);
  };

  const handleConfirm = (date) => {
    setTime(date);
  };

  const hideDatePicker = () => {
    setShow(false);
  };

  const handleInput = (event) => {
    console.log(event.target);
    setTask(event.target.value);
  };

  return (
    <VStack space={10} mx={5} my={5} p={5} borderRadius="md" bg={"white"}>
      <FormControl isRequired>
        <FormControl.Label>Task name?</FormControl.Label>
        <Input
          value={task}
          onChange={handleInput}
          p={2}
          placeholder="Workout"
        />
        <FormControl.ErrorMessage>What time?</FormControl.ErrorMessage>
      </FormControl>
      <FormControl isRequired>
        <FormControl.Label>What time?</FormControl.Label>
        <Button onPress={showDate}>{time.toLocaleString()}</Button>
      </FormControl>
      <Button
        onPress={() => {
          console.log(task, time);
        }}
      >
        Create
      </Button>
      <DateTimePickerModal
        isVisible={show}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </VStack>
  );
}

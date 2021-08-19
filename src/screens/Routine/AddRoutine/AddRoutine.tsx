import React, { useState } from "react";
import { VStack, Center, FormControl, Input, Button } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePicker from "@react-native-community/datetimepicker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import uuid from "react-native-uuid";

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
    console.log(event.nativeEvent.text);
    setTask(event.target.value);
  };

  const submitRoutine = async () => {
    const taskEntry = { name: task, alarmTime: time, daysStreak: 0 };
    try {
      const jsonEntry = JSON.stringify(taskEntry);
      await AsyncStorage.setItem("@task", jsonEntry);
    } catch (e) {
      console.log("error");
    }
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
        <Button onPress={showDate}>
          {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </Button>
      </FormControl>
      <Button
        onPress={() => {
          submitRoutine();
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

import 'react-native-gesture-handler';
import * as React from 'react';
import { NativeBaseProvider } from 'native-base';
import BottomNavigator from './src/navigations/BottomNavigator';



export default function App() {
  return (
    <NativeBaseProvider>
      <BottomNavigator />
    </NativeBaseProvider>
  );
}

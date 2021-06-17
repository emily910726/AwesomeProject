import React from 'react';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screen/MainScreen';
import BarcodeScannerScreen from './screen/BarcodeScannerScreen';
import BookOrderScreen from './screen/BookOrderScreen';
import Toast from 'react-native-toast-message';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="BarcodeScanner" component={BarcodeScannerScreen} />
          <Stack.Screen name="Order" component={BookOrderScreen} />
        </Stack.Navigator>
      </NavigationContainer>
       <Toast ref={(ref) => Toast.setRef(ref)} />
       </>
  );
}
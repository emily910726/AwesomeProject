import React from 'react';
// import "react-native-gesture-handler";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screen/MainScreen';
// import BookDetailScreen from './screen/BookDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen name="Main" component={MainScreen} />
      //     <Stack.Screen name="Details" component={BookDetailScreen} />
      //   </Stack.Navigator>
      // </NavigationContainer>
      <MainScreen />
  );
}
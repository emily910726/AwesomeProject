import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainScreen from './screen/MainScreen';
import BookDetailScreen from './screen/BookDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    // <SafeAreaProvider>
      <NavigationContainer>
        {/* <View style={styles.container}> */}
        <Stack.Navigator>
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Details" component={BookDetailScreen} />
        </Stack.Navigator>
        {/* <MainScreen /> */}
        {/* </View> */}
      </NavigationContainer>
    // </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

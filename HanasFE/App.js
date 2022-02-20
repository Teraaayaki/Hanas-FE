import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, Button, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/* START FOR THE IMPORT FOR ALL THE SCREENS*/
import Dashboard from '@components/dashboard';
import Profile from '@components/profile';
import LogIn from '@components/login';
import Settings from '@components/settings';
/* END FOR THE IMPORT FOR ALL THE SCREENS*/

const Stack = createStackNavigator();

function HanasStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard}/>
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <HanasStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    padding: 5,
    width: 150,
    height: 50,
    alignItems: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    borderRadius: 50/2,
  },
  goBack: {
    marginTop: 15,
    padding: 5,
    width: 150,
    height: 50,
    alignItems: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    borderRadius: 50/2,
  },
  buttonText: {
    fontSize: 16,
  }
});
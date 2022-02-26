import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, Button, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/* START FOR THE IMPORT FOR ALL THE SCREENS*/
import Landing from '@screens/landing';
import Dashboard from '@screens/dashboard';
import Profile from '@screens/profile';
import LogIn from '@screens/login';
import Settings from '@screens/settings';
/* END FOR THE IMPORT FOR ALL THE SCREENS*/

const Stack = createStackNavigator();

function HanasStack() {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Landing" component={Landing}/>
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
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

/* START FOR THE IMPORT FOR ALL THE SCREENS*/
import Landing from "@screens/landing";
import Dashboard from "@screens/dashboard";
import Profile from "@screens/profile";
import Login from "@screens/login";
import Settings from "@screens/settings";
/* END FOR THE IMPORT FOR ALL THE SCREENS*/

const Stack = createStackNavigator();

export default HanasStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Landing"
    >
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

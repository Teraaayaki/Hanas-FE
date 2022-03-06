import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

/* START FOR THE IMPORT FOR ALL THE SCREENS*/
import Landing from "@screens/Landing";
import Dashboard from "@screens/Dashboard";
import Profile from "@screens/Profile";
import Login from "@screens/Login";
import Settings from "@screens/Settings";
import RegisterClientWorker from "@screens/register/RegisterClientWorker";
import RegisterNumber from "@screens/register/RegisterNumber";
import RegisterDetails from "@screens/register/RegisterDetails";
import SetLocation from "@screens/SetLocation";
import GetVerified from "@screens/GetVerified";
/* END FOR THE IMPORT FOR ALL THE SCREENS*/

import Tabs from "@components/Navigation/index";

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
      <Stack.Screen name="Dashboard" component={Tabs} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />

      <Stack.Screen
        name="RegisterClientWorker"
        component={RegisterClientWorker}
      />
      <Stack.Screen name="RegisterNumber" component={RegisterNumber} />
      <Stack.Screen name="RegisterDetails" component={RegisterDetails} />
      <Stack.Screen name="SetLocation" component={SetLocation} />
      <Stack.Screen name="GetVerified" component={GetVerified} />
    </Stack.Navigator>
  );
};

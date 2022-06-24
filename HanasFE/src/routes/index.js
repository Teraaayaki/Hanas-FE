import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
/* START FOR THE IMPORT FOR ALL THE SCREENS*/
import Landing from "@screens/Landing";
import Login from "@screens/Login";
import RegisterClientWorker from "@screens/register/RegisterClientWorker";
import RegisterNumber from "@screens/register/RegisterNumber";
import RegisterDetailsPageOne from "@screens/register/RegisterDetailsPageOne";
import RegisterDetailsPageTwo from "@screens/register/RegisterDetailsPageTwo";
import RegisterOTP from "@screens/register/RegisterOTP";
import SetLocation from "@screens/SetLocation";
import GetVerified from "@screens/GetVerified";
import EditAccount from "@screens/EditAccount";
import EditPassword from "@screens/EditPassword";
import Chatroom from "@screens/messages/Chatroom";
import ProfileView from "@screens/profile/ProfileView";
import AddService from "@screens/services/AddService";
import EditService from "@screens/services/EditService";

/* END FOR THE IMPORT FOR ALL THE SCREENS*/

import ClientTabs from "@routes/BottomTabNavigator/client";
import WorkerTabs from "@routes/BottomTabNavigator/worker";
import GuestTabs from "@routes/BottomTabNavigator/guest";

const Stack = createStackNavigator();

export default HanasStack = () => {
  const { success, isWorker } = useSelector((state) => state.userLogin);

  useEffect(() => {
    console.log("Stack Navigation Rerendered");
  }, [success, isWorker]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Landing"
    >
      {!success ? (
        <Stack.Group>
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="RegisterClientWorker"
            component={RegisterClientWorker}
          />
          <Stack.Screen name="RegisterNumber" component={RegisterNumber} />
          <Stack.Screen
            name="RegisterDetailsPageOne"
            component={RegisterDetailsPageOne}
          />
          <Stack.Screen
            name="RegisterDetailsPageTwo"
            component={RegisterDetailsPageTwo}
          />
          <Stack.Screen name="RegisterOTP" component={RegisterOTP} />
          <Stack.Screen name="SetLocation" component={SetLocation} />
          <Stack.Screen name="ProfileView" component={ProfileView} />
        </Stack.Group>
      ) : isWorker ? (
        <Stack.Group>
          <Stack.Screen name="Dashboard" component={WorkerTabs} />
          <Stack.Screen name="GetVerified" component={GetVerified} />
          <Stack.Screen name="EditAccount" component={EditAccount} />
          <Stack.Screen name="EditPassword" component={EditPassword} />
          <Stack.Screen name="Chatroom" component={Chatroom} />
          <Stack.Screen name="AddService" component={AddService} />
          <Stack.Screen name="EditService" component={EditService} />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name="Dashboard" component={ClientTabs} />
          <Stack.Screen name="EditAccount" component={EditAccount} />
          <Stack.Screen name="EditPassword" component={EditPassword} />
          <Stack.Screen name="Chatroom" component={Chatroom} />
        </Stack.Group>
      )}
      <Stack.Screen name="GuestDashboard" component={GuestTabs} />
    </Stack.Navigator>
  );
};

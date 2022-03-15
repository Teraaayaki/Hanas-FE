import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useAuthRoute from "@hooks/useAuthRoute";
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
import RegisterOTP from "@screens/register/RegisterOTP";
import SetLocation from "@screens/SetLocation";
import GetVerified from "@screens/GetVerified";
import EditAccount from "@screens/EditAccount";
import EditPassword from "@screens/EditPassword";
import Transactions from "@screens/Transactions";
import Reviews from "@screens/Reviews";
import BrowseServices from "@screens/BrowseServices";
import ServicesNearYou from "@screens/ServicesNearYou";
/* END FOR THE IMPORT FOR ALL THE SCREENS*/

import Tabs from "@routes/BottomTabNavigator";

const Stack = createStackNavigator();

export default HanasStack = () => {
  const [authorized, setAuthorized] = useState(false);
  const user = useSelector((state) => state.userLogin);

  useEffect(() => {
    setAuthorized(useAuthRoute());
  }, [user]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Landing"
    >
      {!authorized ? (
        <>
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="RegisterClientWorker"
            component={RegisterClientWorker}
          />
          <Stack.Screen name="RegisterNumber" component={RegisterNumber} />
          <Stack.Screen name="RegisterDetails" component={RegisterDetails} />
          <Stack.Screen name="RegisterOTP" component={RegisterOTP} />
          <Stack.Screen name="SetLocation" component={SetLocation} />
          <Stack.Screen name="GetVerified" component={GetVerified} />
        </>
      ) : (
        <>
          <Stack.Screen name="Dashboard" component={Tabs} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="EditAccount" component={EditAccount} />
          <Stack.Screen name="EditPassword" component={EditPassword} />
          <Stack.Screen name="Transactions" component={Transactions} />
          <Stack.Screen name="Reviews" component={Reviews} />
          <Stack.Screen name="BrowseServices" component={BrowseServices} />
          <Stack.Screen name="ServicesNearYou" component={ServicesNearYou} />
        </>
      )}
    </Stack.Navigator>
  );
};

import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
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
import TransactionHistory from "@screens/transaction/TransactionHistory";
import Reviews from "@screens/Reviews";
import BrowseServices from "@screens/BrowseServices";
// myServices Routes
import MyServices from "@screens/services/MyServices";
import AddEditService from "@screens/services/AddEditService";
import ServicesNearYou from "@screens/ServicesNearYou";
/* END FOR THE IMPORT FOR ALL THE SCREENS*/
import FullScreenImage from "@screens/FullScreenImage";

import Tabs from "@routes/BottomTabNavigator";

const Stack = createStackNavigator();

export default HanasStack = () => {
  const { success } = useSelector((state) => state.userLogin);

  useEffect(() => {
    console.log("Stack Navigation Rerendered");
  }, [success]);

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
          <Stack.Screen name="RegisterDetails" component={RegisterDetails} />
          <Stack.Screen name="RegisterOTP" component={RegisterOTP} />
          <Stack.Screen name="SetLocation" component={SetLocation} />
          <Stack.Screen name="GetVerified" component={GetVerified} />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name="Dashboard" component={Tabs} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="EditAccount" component={EditAccount} />
          <Stack.Screen name="EditPassword" component={EditPassword} />
          <Stack.Screen name="TransactionHistory" component={TransactionHistory} />
          <Stack.Screen name="Reviews" component={Reviews} />
          <Stack.Screen name="BrowseServices" component={BrowseServices} />
          <Stack.Screen name="ServicesNearYou" component={ServicesNearYou} />
          <Stack.Screen name="MyServices" component={MyServices} />
          <Stack.Screen name="AddEditService" component={AddEditService} />
          <Stack.Screen name="FullScreenImage" component={FullScreenImage} />
          <Stack.Screen name="SetLocation" component={SetLocation} /> 
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

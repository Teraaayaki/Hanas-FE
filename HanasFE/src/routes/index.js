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
import RegisterDetailsPageOne from "@screens/register/RegisterDetailsPageOne";
import RegisterDetailsPageTwo from "@screens/register/RegisterDetailsPageTwo";
import RegisterOTP from "@screens/register/RegisterOTP";
import SetLocation from "@screens/SetLocation";
import GetVerified from "@screens/GetVerified";
import EditAccount from "@screens/EditAccount";
import EditPassword from "@screens/EditPassword";
import TransactionHistory from "@screens/transaction/TransactionHistory";
import TransactionReport from "@screens/transaction/TransactionReport";
import BookingSummary from "@screens/transaction/BookingSummary";
import Reviews from "@screens/Reviews";
import BrowseServices from "@screens/BrowseServices";
import MyServices from "@screens/services/MyServices";
import AddEditService from "@screens/services/AddEditService";
import ServicesNearYou from "@screens/ServicesNearYou";
import Messages from "@screens/messages/MessagesLobby";
import Chatroom from "@screens/messages/Chatroom";
import Schedule from "@screens/Schedule";
/* END FOR THE IMPORT FOR ALL THE SCREENS*/

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
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name="GetVerified" component={GetVerified} />
          <Stack.Screen name="Dashboard" component={Tabs} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="EditAccount" component={EditAccount} />
          <Stack.Screen name="EditPassword" component={EditPassword} />
          <Stack.Screen
            name="TransactionHistory"
            component={TransactionHistory}
          />
          <Stack.Screen
            name="TransactionReport"
            component={TransactionReport}
          />
          <Stack.Screen name="BookingSummary" component={BookingSummary} />
          <Stack.Screen name="Reviews" component={Reviews} />
          <Stack.Screen name="BrowseServices" component={BrowseServices} />
          <Stack.Screen name="ServicesNearYou" component={ServicesNearYou} />
          <Stack.Screen name="MyServices" component={MyServices} />
          <Stack.Screen name="AddEditService" component={AddEditService} />
          <Stack.Screen name="SetLocation" component={SetLocation} />
          <Stack.Screen name="Messages" component={Messages} />
          <Stack.Screen name="Chatroom" component={Chatroom} />
          <Stack.Screen name="Schedule" component={Schedule} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

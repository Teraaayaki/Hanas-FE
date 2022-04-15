import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { colors } from "@constants";
import WorkerDashboard from "@screens/dashboard/WorkerDashboard";
import MyServices from "@screens/services/MyServices";
import AddService from "@screens/services/AddService";
import Profile from "@screens/profile/ProfileWorker";
import TransactionHistory from "@screens/transaction/TransactionHistory";
import TransactionReport from "@screens/transaction/TransactionReport";
import Reviews from "@screens/Reviews";
import Messages from "@screens/messages/MessagesLobby";
import Notification from "@screens/Notification";
import WorkerSchedule from "@screens/schedules/WorkerSchedule";
import WorkerBookingRequests from "@screens/bookingRequests/WorkerBookingRequests";
import Achievements from "@screens/Achievements";
import EditService from "@screens/services/EditService";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: "8%",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={WorkerDashboard}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={require("@icons/Home.png")}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? colors.secondary : colors.primary,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={require("@icons/Notification.png")}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? colors.secondary : colors.primary,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={WorkerSchedule}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={require("@icons/Calendar.png")}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? colors.secondary : colors.primary,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={require("@icons/SecuredLetter.png")}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? colors.secondary : colors.primary,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={require("@icons/MaleUser.png")}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? colors.secondary : colors.primary,
                }}
              />
            );
          },
        }}
      />

      {/*ari i add ang mga screens nga mag require ani nga navigator */}

      <Tab.Screen
        name="WorkerBookingRequests"
        component={WorkerBookingRequests}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="MyServices"
        component={MyServices}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="TransactionHistory"
        component={TransactionHistory}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="TransactionReport"
        component={TransactionReport}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="Reviews"
        component={Reviews}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="AddService"
        component={AddService}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="EditService"
        component={EditService}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="Achievements"
        component={Achievements}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

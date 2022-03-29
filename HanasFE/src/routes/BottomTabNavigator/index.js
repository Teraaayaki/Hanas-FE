import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { colors } from "@constants";
import Dashboard from "@screens/Dashboard";
import BrowseServices from "@screens/BrowseServices";
import Profile from "@screens/Profile";
import TransactionHistory from "@screens/transaction/TransactionHistory";
import TransactionReport from "@screens/transaction/TransactionReport";
import Reviews from "@screens/Reviews";
import MessagesLobby from "@screens/messages/MessagesLobby";
import Notification from "@screens/Notification";
import BookingSummary from "@screens/transaction/BookingSummary";

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
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused, tintColor }) => {
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
          tabBarIcon: ({ focused, tintColor }) => {
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
        component={Dashboard}
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
        component={MessagesLobby}
        options={{
          tabBarIcon: ({ focused, tintColor }) => {
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
          tabBarIcon: ({ focused, tintColor }) => {
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
        name="BrowseServices"
        component={BrowseServices}
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
        name="BookingSummary"
        component={BookingSummary}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

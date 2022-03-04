import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { colors } from "@constants";
import Dashboard from "@screens/Dashboard";

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
        component={Dashboard}
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
        component={Dashboard}
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
        component={Dashboard}
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
    </Tab.Navigator>
  );
};

export default Tabs;

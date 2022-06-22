import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { colors } from "@constants";
import GuestDashboard from "@screens/guest/Dashboard";
import GuestBrowseServices from "@screens/guest/BrowseServices";
import GuestServicesNearYou from "@screens/guest/ServicesNearYou";
import GuestSearch from "@screens/guest/Search";
import GuestProfile from "@screens/guest/Profile";

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
        component={GuestDashboard}
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
        component={GuestProfile}
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
        component={GuestProfile}
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
        component={GuestProfile}
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
        name="ProfileClient"
        component={GuestProfile}
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
        name="ServicesNearYou"
        component={GuestProfile}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />

      <Tab.Screen
        name="BrowseServices"
        component={GuestBrowseServices}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />

      <Tab.Screen
        name="Search"
        component={GuestSearch}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { colors } from "@constants";
import ClientDashboard from "@screens/dashboard/ClientDashboard";
import BrowseServices from "@screens/BrowseServices";
import SetLocation from "@screens/SetLocation";
import ProfileClient from "@screens/profile/ProfileClient";
import TransactionHistory from "@screens/transaction/TransactionHistory";
import TransactionReport from "@screens/transaction/TransactionReport";
import Reviews from "@screens/Reviews";
import Messages from "@screens/messages/MessagesLobby";
import Notification from "@screens/Notification";
import BookingSummary from "@screens/transaction/BookingSummary";
import ClientSchedule from "@screens/schedules/ClientSchedule";
import ClientBookingRequests from "@screens/bookingRequests/ClientBookingRequests";
import ServicesNearYou from "@screens/ServicesNearYou";
import BookSkilledWorker from "@screens/skilledWorkerBooking/BookSkilledWorker";
import BookSkilledWorkerMultipleDays from "@screens/skilledWorkerBooking/BookSkilledWorkerMultipleDays";
import ProfileView from "@screens/profile/ProfileView";
import Favorites from "@screens/Favorites";
import Search from "@screens/Search";
import Feedback from "@screens/Feedback";
import Reports from "@screens/Reports";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        backBehavior: "history",
        tabBarShowLabel: false,
        tabBarStyle: {
          height: "8%",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={ClientDashboard}
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
        component={ClientSchedule}
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
        name="ProfileClient"
        component={ProfileClient}
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
        name="ClientBookingRequests"
        component={ClientBookingRequests}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="ServicesNearYou"
        component={ServicesNearYou}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="SetLocation"
        component={SetLocation}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
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
      <Tab.Screen
        name="BookSkilledWorker"
        component={BookSkilledWorker}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="BookSkilledWorkerMultipleDays"
        component={BookSkilledWorkerMultipleDays}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="ProfileView"
        component={ProfileView}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="Feedback"
        component={Feedback}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="Reports"
        component={Reports}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

import React, { useState } from "react";
import { View, Text, Flatlist } from "react-native";
import { LogBox } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Header from "@components/Header";
import ClientScheduleFlatlist from "@components/flatlist/scheduleFlatlists/ClientScheduleFlatlist";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import { colors, fontSize } from "@constants";
import styles from "./style";

LogBox.ignoreLogs(["VirtualizedLists should never be nested inside"]); //ignore ni niya nga message

const ClientSchedule = ({ navigation }) => {
  let BRcount = 3;

  const DATA = [
    {
      id: "1",
      date: "date1",
      serviceType: "Electrical",
      workerName: "Soy Lebumfacil",
      address: "Bogo City, Cebu",
      timeStart: "11:00 AM",
      timeEnd: "10:00 PM",
      bookStatus: "Accepted",
    },
    {
      id: "2",
      date: "date1",
      serviceType: "Mechanical",
      workerName: "James Karl Sia",
      address: "Talamban, Cebu",
      timeStart: "10:00 AM",
      timeEnd: "2:00 PM",
      bookStatus: "Cancelled",
    },
    {
      id: "3",
      date: "date2",
      serviceType: "Electrical",
      workerName: "Mary Therese Sun Alegre",
      address: "Lapu-lapu City, Cebu",
      timeStart: "10:00 AM",
      timeEnd: "1:00 PM",
      bookStatus: "Accepted",
    },
    {
      id: "4",
      date: "date3",
    },
    {
      id: "5",
      date: "date4",
      serviceType: "Electrical",
      workerName: "Soy Lebumfacil",
      address: "Bogo City, Cebu",
      timeStart: "5:00 PM",
      timeEnd: "8:00 PM",
      bookStatus: "Ongoing",
    },
    {
      id: "6",
      date: "date4",
      serviceType: "Mechanical",
      workerName: "Hosea Barriga",
      address: "Danao City, Cebu",
      timeStart: "12:00 AM",
      timeEnd: "3:00 PM",
      bookStatus: "Cancelled",
    },
    {
      id: "7",
      date: "date5",
      serviceType: "Mechanical",
      workerName: "Hosea Barriga",
      address: "Danao City, Cebu",
      timeStart: "12:00 AM",
      timeEnd: "3:00 PM",
      bookStatus: "Finished",
    },
    {
      id: "8",
      date: "date6",
    },
  ];

  return (
    <ParallaxScrollView
      backgroundColor="#FF6D8F"
      contentBackgroundColor={colors.background}
      contentContainerStyle={{ height: "100%" }}
      parallaxHeaderHeight={80}
      renderForeground={() => <Header title={"Schedule"} />}
      stickyHeaderHeight={70}
      renderStickyHeader={() => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "#FF6D8F",
            height: "100%",
          }}
        >
          <Text
            style={{
              color: colors.black,
              alignSelf: "center",
              fontSize: fontSize.h1,
              marginTop: 30,
            }}
          >
            Booking Requests ({BRcount})
          </Text>
        </View>
      )}
    >
      <View style={[styles.body]}>
        <View style={[styles.mx3, styles.flex1]}>
          <ClientScheduleFlatlist navigation={navigation} DATA={DATA} />
          <View
            style={[styles.flexRow, styles.py3, styles.px2, styles.absolute]}
          >
            <View style={[styles.flex1]} />
            <TouchableOpacity
              onPress={() => navigation.navigate("ClientBookingRequests")}
            >
              <Text
                style={[
                  styles.flex1,
                  styles.textRight,
                  styles.textSecondary,
                  styles.h3,
                  styles.bold,
                  styles.underline,
                  styles.bgBG,
                  styles.px3,
                ]}
              >
                Booking Requests ({BRcount})
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ParallaxScrollView>
  );
};

export default ClientSchedule;

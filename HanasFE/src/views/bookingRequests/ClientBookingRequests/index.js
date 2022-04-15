import React from "react";
import { View } from "react-native";

import styles from "./style";
import Header from "@components/Header";
import ClientBookingRequestsFlatlist from "@components/flatlist/bookingRequestsFlatlists/ClientBookingRequestsFlatlist";

const ClientBookingRequests = ({ navigation }) => {
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
      bookStatus: "Pending",
    },
    {
      id: "2",
      date: "date1",
      serviceType: "Mechanical",
      workerName: "James Karl Sia",
      address: "Talamban, Cebu",
      timeStart: "10:00 AM",
      timeEnd: "2:00 PM",
      bookStatus: "Pending",
    },
    {
      id: "3",
      date: "date2",
      serviceType: "Electrical",
      workerName: "Mary Therese Sun Alegre",
      address: "Lapu-lapu City, Cebu",
      timeStart: "10:00 AM",
      timeEnd: "1:00 PM",
      bookStatus: "Declined",
    },
    {
      id: "4",
      date: "date3",
      serviceType: "Electrical",
      workerName: "Soy Lebumfacil",
      address: "Bogo City, Cebu",
      timeStart: "5:00 PM",
      timeEnd: "8:00 PM",
      bookStatus: "Pending",
    },
    {
      id: "5",
      date: "date3",
      serviceType: "Mechanical",
      workerName: "Hosea Barriga",
      address: "Danao City, Cebu",
      timeStart: "12:00 AM",
      timeEnd: "3:00 PM",
      bookStatus: "Declined",
    },
    {
      id: "6",
      date: "date4",
      serviceType: "Mechanical",
      workerName: "Hosea Barriga",
      address: "Danao City, Cebu",
      timeStart: "12:00 AM",
      timeEnd: "3:00 PM",
      bookStatus: "Declined",
    },
  ];

  return (
    <View style={[styles.body]}>
      <Header title={"Booking Requests(" + BRcount + ")"} />
      <View style={[styles.mx3, styles.flex1]}>
        <ClientBookingRequestsFlatlist navigation={navigation} DATA={DATA} />
      </View>
    </View>
  );
};

export default ClientBookingRequests;

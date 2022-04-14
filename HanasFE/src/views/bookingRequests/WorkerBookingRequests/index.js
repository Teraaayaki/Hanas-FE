import React from "react";
import { View } from "react-native";
import styles from "./style";
import Header from "@components/Header";
import WorkerBookingRequestsFlatlist from "@components/flatlist/bookingRequestsFlatlists/WorkerBookingRequestsFlatlist";

const WorkerBookingRequests = ({ navigation }) => {
  let BRcount = 3;

  const DATA = [
    {
      id: "1",
      date: "date1",
      serviceType: "Electrical",
      clientName: "Soy Lebumfacil",
      address: "Bogo City, Cebu",
      timeStart: "11:00 AM",
      timeEnd: "10:00 PM",
      bookStatus: "pending",
    },
    {
      id: "2",
      date: "date1",
      serviceType: "Mechanical",
      clientName: "James Karl Sia",
      address: "Talamban, Cebu",
      timeStart: "10:00 AM",
      timeEnd: "2:00 PM",
      bookStatus: "pending",
    },
    {
      id: "3",
      date: "date2",
      serviceType: "Electrical",
      clientName: "Mary Therese Sun Alegre",
      address: "Lapu-lapu City, Cebu",
      timeStart: "10:00 AM",
      timeEnd: "1:00 PM",
      bookStatus: "declined",
    },
    {
      id: "4",
      date: "date3",
      serviceType: "Electrical",
      clientName: "Soy Lebumfacil",
      address: "Bogo City, Cebu",
      timeStart: "5:00 PM",
      timeEnd: "8:00 PM",
      bookStatus: "pending",
    },
    {
      id: "5",
      date: "date3",
      serviceType: "Mechanical",
      clientName: "Hosea Barriga",
      address: "Danao City, Cebu",
      timeStart: "12:00 AM",
      timeEnd: "3:00 PM",
      bookStatus: "declined",
    },
    {
      id: "6",
      date: "date4",
      serviceType: "Mechanical",
      clientName: "Hosea Barriga",
      address: "Danao City, Cebu",
      timeStart: "12:00 AM",
      timeEnd: "3:00 PM",
      bookStatus: "declined",
    },
  ];

  return (
    <View style={[styles.body]}>
      <Header title={"Booking Requests(" + BRcount + ")"} />
      <View style={[styles.mx3, styles.flex1]}>
        <WorkerBookingRequestsFlatlist DATA={DATA} />
      </View>
    </View>
  );
};

export default WorkerBookingRequests;

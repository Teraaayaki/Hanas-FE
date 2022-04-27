import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

import styles from "./style";
import Header from "@components/Header";
import ClientBookingRequestsFlatlist from "@components/flatlist/bookingRequestsFlatlists/ClientBookingRequestsFlatlist";

const ClientBookingRequests = ({ navigation }) => {
  const { bookingData } = useSelector((state) => state.clientBooking);
  const [filteredBookingData, setFilteredBookingData] = useState([]);

  useEffect(() => {
    let filteredArrayData = [];
    bookingData.map((bookingDataItem) => {
      if (
        bookingDataItem.book_status === "Pending" ||
        bookingDataItem.book_status === "Declined"
      ) {
        filteredArrayData.push(bookingDataItem);
      }
    });
    setFilteredBookingData([...filteredBookingData, ...filteredArrayData]);
  }, []);

  return (
    <View style={[styles.body]}>
      {console.log(filteredBookingData)}
      <Header
        title={
          "Booking Requests(" +
          bookingData.filter(
            (bookingData) => bookingData.book_status === "Pending"
          ).length +
          ")"
        }
      />
      <View style={[styles.mx3, styles.flex1]}>
        <ClientBookingRequestsFlatlist
          navigation={navigation}
          DATA={filteredBookingData}
        />
      </View>
    </View>
  );
};

export default ClientBookingRequests;

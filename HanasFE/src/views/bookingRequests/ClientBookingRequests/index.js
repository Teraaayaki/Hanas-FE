import React, { useState, useEffect, useContext } from "react";
import { View, ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import styles from "./style";
import { colors } from "@constants";
import Header from "@components/Header";
import ClientBookingRequestsFlatlist from "@components/flatlist/bookingRequestsFlatlists/ClientBookingRequestsFlatlist";
import { SocketContext } from "../../../context/socketContext";
import { getBooking } from "@redux/actions/clientBookingActions";

const filterBookingData = (bookingDataArray) => {
  let filteredArrayData = [];
  bookingDataArray.map((bookingDataItem) => {
    if (
      bookingDataItem.book_status === "Pending" ||
      bookingDataItem.book_status === "Declined"
    ) {
      filteredArrayData.push(bookingDataItem);
    }
  });
  return filteredArrayData;
};

const ClientBookingRequests = ({ navigation }) => {
  const { loading, bookingData } = useSelector((state) => state.clientBooking);
  const { user } = useSelector((state) => state.userDetails);
  const [filteredBookingData, setFilteredBookingData] = useState([]);
  const { socket } = useContext(SocketContext);
  const [updateBookingData, setUpdateBookingData] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.current.on("clientBookingUpdate", ({ newData }) => {
      if (user.id === newData) {
        setUpdateBookingData(true);
      }
    });
  });

  useEffect(() => {
    if (updateBookingData) {
      dispatch(getBooking());
      setUpdateBookingData(false);
    }
  }, [updateBookingData]);

  useEffect(() => {
    let filteredArrayData = filterBookingData(bookingData);
    if (
      JSON.stringify(filteredBookingData) !== JSON.stringify(filteredArrayData)
    ) {
      setFilteredBookingData([...filteredArrayData]);
    }
  }, [bookingData]);

  return (
    <View style={[styles.body]}>
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
        {loading ? (
          <ActivityIndicator size="large" color={colors.secondary} />
        ) : (
          <ClientBookingRequestsFlatlist
            navigation={navigation}
            DATA={filteredBookingData}
          />
        )}
      </View>
    </View>
  );
};

export default ClientBookingRequests;

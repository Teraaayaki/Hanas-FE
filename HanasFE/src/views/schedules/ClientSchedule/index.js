import React, { useEffect, useState, useContext } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";

import Header from "@components/Header";
import ClientScheduleFlatlist from "@components/flatlist/scheduleFlatlists/ClientScheduleFlatlist";
import styles from "./style";
import { colors } from "@constants";
import { SocketContext } from "../../../context/socketContext";
import { getBooking } from "@redux/actions/clientBookingActions";

const filterBookingData = (bookingDataArray) => {
  let filteredArrayData = [];
  bookingDataArray.map((bookingDataItem) => {
    if (
      bookingDataItem.book_status === "Accepted" ||
      bookingDataItem.book_status === "Ongoing" ||
      bookingDataItem.book_status === "Finished"
    ) {
      filteredArrayData.push(bookingDataItem);
    }
  });
  return filteredArrayData;
};

const ClientSchedule = ({ navigation }) => {
  const { bookingData, loading } = useSelector((state) => state.clientBooking);
  const { user } = useSelector((state) => state.userDetails);
  const { socket } = useContext(SocketContext);
  const dispatch = useDispatch();

  const [updateBookingData, setUpdateBookingData] = useState(false);
  const [filteredBookingData, setFilteredBookingData] = useState([]);

  useEffect(() => {
    let filteredArrayData = filterBookingData(bookingData);
    if (
      JSON.stringify(filteredBookingData) !== JSON.stringify(filteredArrayData)
    ) {
      setFilteredBookingData([...filteredArrayData]);
    }
  }, [bookingData]);

  useEffect(() => {
    socket.current.on("clientBookingUpdate", ({ newData }) => {
      if (user.id === newData) {
        console.log("Booking Changed");
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

  return (
    <FlatList
      ListHeaderComponent={<Header title={"Schedule"} />}
      ListFooterComponent={
        <View style={[styles.body]}>
          <View style={[styles.mx3, styles.flex1]}>
            {loading ? (
              <ActivityIndicator size="large" color={colors.secondary} />
            ) : (
              <ClientScheduleFlatlist
                navigation={navigation}
                DATA={filteredBookingData}
              />
            )}
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
                  {"Booking Requests(" +
                    bookingData.filter(
                      (bookingData) => bookingData.book_status === "Pending"
                    ).length +
                    ")"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      }
    />
  );
};

export default ClientSchedule;

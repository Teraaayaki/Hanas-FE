import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./style";
import Header from "@components/Header";
import ReceiptAndSummary from "@components/ReceiptAndSummary";
import { showToast, ToastComponent } from "@helpers/toast";
import { colors } from "@constants";
import { resetLoading } from "@redux/actions/clientBookingActions";

const bookingDataInitialValues = {
  total_hours: 0,
  conv_fee: 0,
  total_cost: 0,
  booked_dateTimeStart: "",
  booked_dateTimeEnd: "",
  workerServiceData: [
    {
      hourly_rate: 0,
      serviceNameData: [
        {
          service_type: "",
        },
      ],
    },
  ],
  workerData: [
    {
      first_name: "",
      family_name: "",
      address: "",
      createdAt: "",
    },
  ],
};

const BookingSummary = ({ route }) => {
  const { booking_id } = route.params;
  const { bookingData, success } = useSelector((state) => state.clientBooking);
  const [bookingDATA, setBookingData] = useState(bookingDataInitialValues);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("trigger");
    let bookDetails = bookingData.find((booking) => booking_id === booking._id);
    setBookingData({ ...bookDetails });
    setLoading(false);
  }, [booking_id]);

  useEffect(() => {
    if (success) {
      showToast(
        "success",
        "Succefully Booked Worker",
        "Please review the booking information",
        () => dispatch(resetLoading())
      );
    }
  }, [success]);

  return (
    <>
      {loading ? (
        <ActivityIndicator size="large" color={colors.secondary} />
      ) : (
        <View style={styles.container}>
          {console.log("viewData", bookingDATA)}
          <Header title="Booking Summary" />
          <ScrollView>
            <ReceiptAndSummary
              summaryTitle={"Booking"}
              payment_method={"CASH"}
              date_paid={"N/A"}
              rate={bookingDATA.workerServiceData[0].hourly_rate}
              hours_rendered={bookingDATA.total_hours}
              convenience_fee={bookingDATA.conv_fee}
              discount={"N/A"}
              total={bookingDATA.total_cost}
              service_type={`${bookingDATA.workerServiceData[0].serviceNameData[0].service_type} Services`}
              name={`${bookingDATA.workerData[0].first_name} ${bookingDATA.workerData[0].family_name}`}
              address={bookingDATA.workerData[0].address}
              booked_date={bookingDATA.workerData[0].createdAt}
              time_start={bookingDATA.booked_dateTimeStart}
              time_end={bookingDATA.booked_dateTimeEnd}
            />
          </ScrollView>
        </View>
      )}
      <ToastComponent />
    </>
  );
};

export default BookingSummary;

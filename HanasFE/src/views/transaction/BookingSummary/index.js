import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./style";
import Header from "@components/Header";
import ReceiptAndSummary from "@components/ReceiptAndSummary";
import { showToast, ToastComponent } from "@helpers/toast";
import { resetLoading } from "@redux/actions/clientBookingActions";

const BookingSummary = ({ route }) => {
  const { booking_data } = route.params;
  const { success } = useSelector((state) => state.clientBooking);
  const dispatch = useDispatch();

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
      <View style={styles.container}>
        {console.log("viewData", booking_data)}
        <Header title="Booking Summary" />
        <ScrollView>
          <ReceiptAndSummary
            summaryTitle={"Booking"}
            payment_method={"CASH"}
            date_paid={"N/A"}
            rate={booking_data.workerServiceData[0].hourly_rate}
            hours_rendered={booking_data.total_hours}
            convenience_fee={booking_data.conv_fee}
            discount={"N/A"}
            total={booking_data.total_cost}
            service_type={`${booking_data.workerServiceData[0].serviceNameData[0].service_type} Services`}
            name={`${booking_data.workerData[0].first_name} ${booking_data.workerData[0].family_name}`}
            address={booking_data.workerData[0].address}
            booked_date={booking_data.workerData[0].createdAt}
            time_start={booking_data.booked_dateTimeStart}
            time_end={booking_data.booked_dateTimeEnd}
          />
        </ScrollView>
      </View>

      <ToastComponent />
    </>
  );
};

export default BookingSummary;

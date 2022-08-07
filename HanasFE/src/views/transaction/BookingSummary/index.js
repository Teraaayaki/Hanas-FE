import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./style";
import Header from "@components/Header";
import ReceiptAndSummary from "@components/ReceiptAndSummary";
import { showToast, ToastComponent } from "@helpers/toast";
import { resetLoading } from "@redux/actions/clientBookingActions";
import dayjs from "dayjs";

const BookingSummary = ({ route }) => {
  const { booking_data } = route.params;
  const { success } = useSelector((state) => state.clientBooking);
  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      showToast(
        "success",
        "Successfully Booked Worker",
        "Please review the booking information",
        () => dispatch(resetLoading()),
      );
    }
  }, [success]);

  return (
    <>
      <View style={styles.container}>
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
            status={booking_data.book_status}
            total={booking_data.total_cost}
            service_type={`${booking_data.workerServiceData[0].serviceNameData[0].service_type} Services`}
            name={`${booking_data.workerData[0].first_name} ${booking_data.workerData[0].family_name}`}
            address={booking_data.workerData[0].address}
            book_type={booking_data.book_type}
            booked_date={dayjs(booking_data.booked_dateTimeStart).format(
              "MMMM D, YYYY (dddd)",
            )}
            booked_end={dayjs(booking_data.booked_dateTimeEnd).format(
              "MMMM D, YYYY (dddd)",
            )}
            time_start={dayjs(booking_data.booked_dateTimeStart).format("h:mm A")}
            time_end={dayjs(booking_data.booked_dateTimeEnd).format("h:mm A")}
          />
        </ScrollView>
        <ToastComponent />
      </View>
    </>
  );
};

export default BookingSummary;

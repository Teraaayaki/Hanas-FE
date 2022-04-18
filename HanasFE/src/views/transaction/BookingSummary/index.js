import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import styles from "./style";
import Header from "@components/Header";
import ReceiptAndSummary from "@components/ReceiptAndSummary";
import { showToast, ToastComponent } from "@helpers/toast";

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

  useEffect(() => {
    let bookDetails = bookingData.find((booking) => booking_id === booking._id);
    setBookingData({ ...bookDetails });
  }, []);

  useEffect(() => {
    if (success) {
      showToast(
        "success",
        "Succefully Booked Worker",
        "Please review the booking information"
      );
    }
  }, [success]);

  return (
    <>
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
        <ToastComponent />
      </View>
    </>
  );
};

export default BookingSummary;

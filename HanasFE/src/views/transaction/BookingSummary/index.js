import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./style";
import Header from "@components/Header";
import ReceiptAndSummary from "@components/ReceiptAndSummary";
import { showToast, ToastComponent } from "@helpers/toast";
import { resetLoading } from "@redux/actions/clientBookingActions";

// const bookingDataInitialValues = {
//   total_hours: 0,
//   conv_fee: 0,
//   total_cost: 0,
//   booked_dateTimeStart: "",
//   booked_dateTimeEnd: "",
//   workerServiceData: [
//     {
//       hourly_rate: 0,
//       serviceNameData: [
//         {
//           service_type: "",
//         },
//       ],
//     },
//   ],
//   workerData: [
//     {
//       first_name: "",
//       family_name: "",
//       address: "",
//       createdAt: "",
//     },
//   ],
// };

const BookingSummary = ({ route }) => {
  const { booking_id } = route.params;
  const { bookingData, success } = useSelector((state) => state.clientBooking);
  // const [bookingDATA, setBookingData] = useState(bookingDataInitialValues);
  const dispatch = useDispatch();
  let bookDetails = bookingData.find((booking) => booking_id === booking._id);

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
        {console.log("viewData", bookDetails)}
        <Header title="Booking Summary" />
        <ScrollView>
          <ReceiptAndSummary
            summaryTitle={"Booking"}
            payment_method={"CASH"}
            date_paid={"N/A"}
            rate={bookDetails.workerServiceData[0].hourly_rate}
            hours_rendered={bookDetails.total_hours}
            convenience_fee={bookDetails.conv_fee}
            discount={"N/A"}
            total={bookDetails.total_cost}
            service_type={`${bookDetails.workerServiceData[0].serviceNameData[0].service_type} Services`}
            name={`${bookDetails.workerData[0].first_name} ${bookDetails.workerData[0].family_name}`}
            address={bookDetails.workerData[0].address}
            booked_date={bookDetails.workerData[0].createdAt}
            time_start={bookDetails.booked_dateTimeStart}
            time_end={bookDetails.booked_dateTimeEnd}
          />
        </ScrollView>
      </View>

      <ToastComponent />
    </>
  );
};

export default BookingSummary;

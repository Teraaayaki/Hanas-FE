import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";
import styles from "./style";
import Header from "@components/Header";
import ReceiptAndSummary from "@components/ReceiptAndSummary";
import Button from "@components/Button";
import moment from "moment";
import { showToast, ToastComponent } from "@helpers/toast";
import {
  resetDownloadSuccess,
  downloadSuccess,
} from "@redux/actions/transactionActions";

const TransactionReport = ({ navigation, route }) => {
  const { item } = route.params;
  const dispatch = useDispatch();
  const { successMessage, success } = useSelector(
    (state) => state.transactions
  );

  const html = `
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
      </head>
      <style>
        .centeredHeader{
          font-size: 50px; 
          font-family: Helvetica Neue; 
          font-weight: normal; 
          text-align: center;
        }
        .centeredSubHeader{
          
        }
      </style>
      <body>
        <h1 class="centeredHeader">
          Transaction Report
        </h1>
        <h3 style="text-align: center;">Transaction ID: ${item._id}</h3>
        <br>
          <h1>Transaction Summary</h1>
          <table style="font-size: 18px; min-width: 100%" border="2" cellpadding="10">
            <tbody>
              <tr>
                <td>&nbsp;Rate Per Hour</td>
                <td>&nbsp;PHP ${item.service_availed.hourly_rate}</td>
              </tr>
              <tr>
                <td>&nbsp;Total Hours Rendered</td>
                <td>&nbsp;${item.total_hours}</td>
              </tr>
              <tr>
                <td>&nbsp;Convenience Fee</td>
                <td>&nbsp;PHP ${item.conv_fee}</td>
              </tr>
              <tr>
                <td><strong>&nbsp;Total Amount</strong></td>
                <td><strong>&nbsp;PHP ${item.total_cost}</strong></td>
              </tr>
            </tbody>
          </table>
        <br>

        <h1>Service Details</h1>
        <table style="font-size: 18px; min-width: 100%" border="2" cellpadding="10">
          <tbody>
            <tr>
              <td>&nbsp;Service Status</td>
              <td>&nbsp;${item.book_status}</td>
            </tr>
            <tr>
              <td>&nbsp;Booking Type</td>
              <td>&nbsp;${item.book_type} Day</td>
            </tr>
            <tr>
              <td>&nbsp;Service Type</td>
              <td>&nbsp;${
                item.service_availed.service.service_type
              } Services</td>
            </tr>
            <tr>
              <td>&nbsp;Skilled Worker Name</td>
              <td>&nbsp;${`${item.worker.first_name} ${item.worker.family_name} ${item.worker.suffix}`}</td>
            </tr>
            ${
              item.book_type == "Multiple"
                ? `
              <tr>
                <td>&nbsp;Booking Start Date</td>
                <td>&nbsp;${moment(item.booked_dateTimeStart).format("LL")}</td>
              </tr>
              <tr>
                <td>&nbsp;Booking End Date</td>
                <td>&nbsp;${moment(item.booked_dateTimeEnd).format("LL")}</td>
              </tr>
              `
                : `
              <tr>
                <td>&nbsp;Booking Date</td>
                <td>&nbsp;${moment(item.booked_dateTimeStart).format("LL")}</td>
              </tr>
              <tr>
                <td>&nbsp;Booking Start Time</td>
                <td>&nbsp;${moment(item.booked_dateTimeStart).format("LT")}</td>
              </tr>
              <tr>
                <td>&nbsp;Booking End Date</td>
                <td>&nbsp;${moment(item.booked_dateTimeEnd).format("LT")}</td>
              </tr>
             `
            }
            
          </tbody>
        </table>

      <br>

      <h3></h3>

      </body>
    </html>
`;

  const print = async () => {
    await Print.printAsync({
      html,
      base64: false,
    });
  };

  const printToFile = async () => {
    const { uri } = await Print.printToFileAsync({
      html,
    });
    console.log("File has been saved to:", uri);
    const downloaded = await shareAsync(uri, {
      UTI: ".pdf",
      mimeType: "application/pdf",
    });

    if (downloaded) {
      dispatch(downloadSuccess());
    }
  };

  useEffect(() => {
    if (success) {
      showToast("success", "PDF Downloaded", successMessage, () =>
        dispatch(resetDownloadSuccess())
      );
    }
  }, [success]);

  return (
    <View style={styles.container}>
      <Header title="Transaction Report" />
      <ScrollView>
        <ReceiptAndSummary
          summaryTitle={"Transaction"}
          payment_method={"CASH"}
          date_paid={moment(item.service_availed.service.updatedAt).format(
            "LL"
          )}
          status={item.book_status}
          book_type={item.book_type}
          rate={item.service_availed.hourly_rate}
          hours_rendered={item.total_hours}
          convenience_fee={item.conv_fee}
          total={item.total_cost}
          service_type={item.service_availed.service.service_type}
          name={`${item.worker.first_name} ${item.worker.family_name} ${item.worker.suffix}`}
          address={item.worker.address}
          booked_date={moment(item.booked_dateTimeStart).format("LL")}
          booked_end={moment(item.booked_dateTimeEnd).format("LL")}
          time_start={moment(item.booked_dateTimeStart).format("LT")}
          time_end={moment(item.booked_dateTimeEnd).format("LT")}
        />
        <View style={{ marginHorizontal: "15%", marginBottom: "20%" }}>
          <Button title={"DOWNLOAD"} onPress={printToFile} />
        </View>
      </ScrollView>
      <ToastComponent />
    </View>
  );
};

export default TransactionReport;

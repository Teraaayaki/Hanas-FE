import { View, Text, ScrollView } from "react-native";
import React from "react";
import styles from "./style";
import Header from "@components/Header";
import ReceiptAndSummary from "@components/ReceiptAndSummary";
import Button from "@components/Button";

import {margin, padding, fontSize, fontWeight} from "@constants";

const TransactionReport = ({}) => {
  return (
    <View style={styles.container}>
      <Header title="Transaction Report" />
        <ScrollView >
            <ReceiptAndSummary summaryTitle={"Transaction"} payment_method={"CASH"} date_paid={"09/25/2021"} rate={100} hours_rendered={2} convenience_fee={15} discount={"N/A"} total={215} service_type={"Electrical Services"} name={
                "James Karl Sia"} address={"Tungkil, Minglanilla, Cebu"} booked_date={"September 25, 2021"} time_start={"10:00 AM"} time_end={"12:00 PM"}
                />
            <View style={{ marginHorizontal: "15%", marginBottom: "20%"}}>
                <Button title={"DOWNLOAD"}/>
            </View>
        </ScrollView>
    </View>
  );
};

export default TransactionReport;

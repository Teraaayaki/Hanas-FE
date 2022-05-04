import { View, Text, ScrolLView } from "react-native";
import React from "react";
import styles from "./style";
import { colors } from "@constants";

import { margin, padding, fontSize, fontWeight } from "@constants";

const ReceiptAndSummary = ({
  summaryTitle,
  payment_method,
  date_paid,
  rate,
  hours_rendered,
  convenience_fee,
  status,
  total,
  service_type,
  name,
  address,
  booked_date,
  booked_end,
  book_type,
  time_start,
  time_end,
}) => {
  return (
    <View style={styles.receiptContainer}>
      <Text style={styles.receiptTitle}>{summaryTitle} Summary</Text>
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          <View style={styles.flexContainers}>
            <Text style={styles.headings}>Payment Method :</Text>
            <Text style={styles.values}>{payment_method}</Text>
            <Text style={styles.headings}>Date Paid : </Text>
            <Text style={styles.values}>{date_paid}</Text>
          </View>
          <View style={styles.hr}></View>
          <View style={styles.flexContainerInside}>
            <Text style={styles.headings}>Description</Text>
            <Text style={styles.headings}>Amount</Text>
          </View>
          <View style={styles.flexContainerInside}>
            <Text style={styles.blackHeadings}>Rate Per Hour</Text>
            <Text style={styles.blackHeadings}>Php {rate}.00</Text>
          </View>
          <View style={styles.flexContainerInside}>
            <Text style={styles.blackHeadings}>Total Hours Rendered</Text>
            <Text style={styles.blackHeadings}>{hours_rendered} hours</Text>
          </View>
          <View style={styles.flexContainerInside}>
            <Text style={styles.blackHeadings}>Convenience Fee</Text>
            <Text style={styles.blackHeadings}>Php {convenience_fee}.00</Text>
          </View>
          <View style={styles.hr}></View>
          <View style={styles.flexContainerInside}>
            <Text style={styles.boldHeadings}>Total Amount</Text>
            <Text style={styles.boldHeadings}>PHP {total}.00</Text>
          </View>
        </View>

        <Text style={styles.serviceHeader}>Service Details</Text>
        <View style={styles.serviceContainer}>
          <View style={styles.valuesContainer}>
            <Text style={styles.boldHeadings}>Service Status</Text>
            <Text style={styles.h3}>{status}</Text>
          </View>
          <View style={styles.valuesContainer}>
            <Text style={styles.boldHeadings}>Book Type</Text>
            <Text style={styles.h3}>{book_type}</Text>
          </View>
        </View>
        <View style={styles.serviceContainer}>
          <View style={styles.valuesContainer}>
            <Text style={styles.smallHeadings}>Service Type</Text>
            <Text style={styles.valueForSmallHeadings}>{service_type}</Text>
          </View>
          <View style={styles.valuesContainer}>
            <Text style={styles.smallHeadings}>Skilled Worker Name</Text>
            <Text style={styles.valueForSmallHeadings}>{name}</Text>
          </View>
        </View>
        <View style={styles.serviceContainer}>
          <View style={styles.addressContainer}>
            <Text style={styles.smallHeadings}>Address</Text>
            <Text style={styles.valueForSmallHeadings} numberOflines={1}>
              {address}
            </Text>
          </View>
        </View>
        {book_type === "Single" ? (
          <>
            <View style={styles.serviceContainer}>
              <View style={styles.valuesContainer}>
                <Text style={styles.smallHeadings}>Booked Start Date</Text>
                <Text style={styles.valueForSmallHeadings} numberOfLines={2}>
                  {booked_date}
                </Text>
              </View>
            </View>
            <View style={styles.serviceContainer}>
              <View style={styles.valuesContainer}>
                <Text style={styles.smallHeadings}>Time Start</Text>
                <Text style={styles.valueForSmallHeadings}>{time_start}</Text>
              </View>
              <View style={styles.valuesContainer}>
                <Text style={styles.smallHeadings}>Time End</Text>
                <Text style={styles.valueForSmallHeadings}>{time_end}</Text>
              </View>
            </View>
          </>
        ) : (
          <>
            <View style={styles.serviceContainer}>
              <View style={styles.valuesContainer}>
                <Text style={styles.smallHeadings}>Booked Start Date</Text>
                <Text style={styles.valueForSmallHeadings} numberOfLines={2}>
                  {booked_date}
                </Text>
              </View>
              <View style={styles.valuesContainer}>
                <Text style={styles.smallHeadings}>Booked End Date</Text>
                <Text style={styles.valueForSmallHeadings} numberOfLines={2}>
                  {booked_end}
                </Text>
              </View>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default ReceiptAndSummary;

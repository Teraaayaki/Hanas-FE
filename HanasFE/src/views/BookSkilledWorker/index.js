import React from "react";
import { View, Text, ScrollView } from "react-native";

import Header from "@components/Header";
import IconField from "@components/form/IconField";
import Button from "@components/Button";
import { colors } from "@constants";
import styles from "./style";

const BookSkilledWorker = ({ navigation }) => {
  const DATA = {
    id: "1",
    date: "date1",
    serviceType: "Electrical",
    clientName: "Soy Lebumfacil",
    address: "Bogo City, Cebu",
    timeStart: "11:00 AM",
    timeEnd: "10:00 PM",
    bookStatus: "pending",
  };

  const renderHeader = () => {
    return (
      <View style={[styles.borderBottom, styles.borderMuted25, styles.px2]}>
        <Text
          style={[styles.h2, styles.px5, styles.bold, styles.pt3, styles.pb4]}
        >
          Request Informaton
        </Text>
      </View>
    );
  };

  const renderServiceInfoBox = () => {
    return (
      <View
        style={[
          styles.flex1,
          styles.px5,
          styles.pb5,
          styles.pt3,
          styles.borderBottom,
          styles.borderMuted25,
        ]}
      >
        <View style={[styles.flex1, styles.flexRow, styles.mb5]}>
          <View style={[styles.flex1]}>
            <Text style={[styles.bold]}>Type of Service:</Text>
          </View>
          <View style={[styles.flex1]}>
            <Text style={[styles.textRight]}>Electrical Service</Text>
          </View>
        </View>
        <View style={[styles.flex1, styles.flexRow, styles.mb3]}>
          <View style={[styles.flex1]}>
            <Text style={[styles.p]}>Skilled Worker Name</Text>
          </View>
          <View style={[styles.flex1]}>
            <Text style={[styles.p, styles.textRight]}>
              Mary Therese Sun S. Alegre
            </Text>
          </View>
        </View>
        <View style={[styles.flex1, styles.flexRow, styles.mb3]}>
          <View style={[styles.flex1]}>
            <Text style={[styles.p]}>Address</Text>
          </View>
          <View style={[styles.flex1]}>
            <Text style={[styles.p, styles.textRight]}>Minglanilla, Cebu</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderPersonalInfoBox = () => {
    return (
      <View
        style={[
          styles.flex1,
          styles.px5,
          styles.pb5,
          styles.pt3,
          styles.borderBottom,
          styles.borderMuted25,
        ]}
      >
        <View style={[styles.flex1, styles.flexRow, styles.mb5]}>
          <View style={[styles.flex1]}>
            <Text style={[styles.bold]}>Personal Information:</Text>
          </View>
        </View>
        <View style={[styles.flex1, styles.flexRow, styles.mb3]}>
          <View style={[styles.flex1]}>
            <Text style={[styles.p]}>Name</Text>
          </View>
          <View style={[styles.flex1]}>
            <Text style={[styles.p, styles.textRight]}>Hosea M. Barriga</Text>
          </View>
        </View>
        <View style={[styles.flex1, styles.flexRow, styles.mb3]}>
          <View style={[styles.flex1]}>
            <Text style={[styles.p]}>Address</Text>
          </View>
          <View style={[styles.flex1]}>
            <Text style={[styles.p, styles.textRight]}>Danao, Cebu</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderHourlyRateInfoBox = () => {
    return (
      <View style={[styles.flex1, styles.px5, styles.pb5, styles.pt3]}>
        <View
          style={[
            styles.flex1,
            styles.flexRow,
            styles.justifyContentSpaceBetween,
            styles.alignCenter,
          ]}
        >
          <Text style={[styles.bold, styles.h3]}>Hourly Rate:</Text>
          <Text style={[styles.h3, styles.textRight, styles.bold]}>
            PHP 200.00
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={[styles.body]}>
      <Header title={"Book Skilled Worker"} />
      <ScrollView style={[styles.h100, styles.w100]}>
        <View style={[styles.m3, styles.pt3, styles.flex1]}>
          <View
            style={[
              styles.flex1,
              styles.bgWhite,
              styles.rounded,
              styles.border,
              styles.borderMuted25,
            ]}
          >
            {renderHeader()}
            <View style={[styles.px5]}>
              {renderServiceInfoBox()}
              {renderPersonalInfoBox()}
              {renderHourlyRateInfoBox()}
            </View>
          </View>
        </View>
        <View
          style={[
            styles.bgLightGrey,
            styles.m3,
            styles.p3,
            styles.flex1,
            styles.rounded,
            styles.border,
            styles.borderMuted25,
          ]}
        >
          <Text style={[styles.h3, styles.bold, styles.mb4]}>
            When do you need the Service?
          </Text>
          <IconField
            iconName="calendar"
            iconType="font-awesome"
            iconColor={colors.secondary}
            iconSize={24}
            placeholder="Set date and time"
          />
        </View>
        <View style={[styles.py3, styles.px5, styles.m5]}>
          <View style={[styles.px5, styles.mx5]}>
            <Button title="Submit Request" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default BookSkilledWorker;

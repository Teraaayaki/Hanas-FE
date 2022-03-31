import React, { useState } from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import Header from "@components/Header";
import ScheduleFlatlist from "@components/flatlist/ScheduleFlatlist";
import { TouchableOpacity } from "react-native-gesture-handler";

const Schedule = ({ navigation }) => {
  let BRcount = 4;
  return (
    <View style={[styles.body]}>
      <Header title={"Schedule"} />
      <View style={[styles.mx3, styles.flex1]}>
        <ScheduleFlatlist />
        <View style={[styles.flexRow, styles.py3, styles.px2, styles.absolute]}>
          <View style={[styles.flex1]} />
          <TouchableOpacity>
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
              Booking Requests ({BRcount})
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Schedule;

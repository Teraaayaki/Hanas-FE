import React, { useState } from "react";
import { View } from "react-native";

import styles from "./styles";
import Header from "@components/Header";
import ScheduleFlatlist from "@components/flatlist/ScheduleFlatlist";
import { colors } from "@constants";

const Schedule = ({ navigation }) => {
  return (
    <View style={[styles.body]}>
      <Header title={"Schedule"} />
      <View style={[styles.mx3, styles.mt2, styles.flex1]}>
        <ScheduleFlatlist />
      </View>
    </View>
  );
};

export default Schedule;

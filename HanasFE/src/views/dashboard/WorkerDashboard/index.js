import React, { useEffect } from "react";
import { View, TouchableOpacity } from "react-native";

import styles from "./style";
import Header from "@components/Header";
import SkilledWorkerDashboardFlatlist from "@components/flatlist/dashboardFlatlists/SkilledWorkerDashboardFlatlist";

const WorkerDashboard = ({ navigation }) => {
  return (
    <View style={[styles.body]}>
      <TouchableOpacity onPressOut={() => setIsWorker(false)}>
        <Header title={"Dashboard"} />
      </TouchableOpacity>
      <View style={[styles.flex1, styles.w100, styles.px3]}>
        <SkilledWorkerDashboardFlatlist />
      </View>
    </View>
  );
};

export default WorkerDashboard;

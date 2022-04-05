import React, { useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import styles from "./style";
import Header from "@components/Header";
import SkilledWorkerDashboardFlatlist from "@components/flatlist/dashboardFlatlists/SkilledWorkerDashboardFlatlist";
import { getUserDetails } from "@redux/actions/userDetailActions";

const WorkerDashboard = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("UserDeatils fetch");
    dispatch(getUserDetails());
  }, []);

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

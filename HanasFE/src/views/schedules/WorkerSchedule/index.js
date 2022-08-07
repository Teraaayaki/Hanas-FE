import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, Flatlist } from "react-native";
import { LogBox } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Header from "@components/Header";
import WorkerScheduleFlatlist from "@components/flatlist/scheduleFlatlists/WorkerScheduleFlatlist";
import NoDataImage from "@components/NoDataImage";
import styles from "./style";

import { getSchedules } from "../../../redux/actions/workerScheduleActions";
import { getBookingRequests } from "../../../redux/actions/workerBookingActions";

LogBox.ignoreLogs(["VirtualizedLists should never be nested inside"]); //ignore ni niya nga message

const WorkerSchedule = ({ navigation }) => {
  const dispatch = useDispatch();

  const { acceptedRequests } = useSelector((state) => state.workerSchedules);
  const { count } = useSelector((state) => state.workerBookingRequests);

  useEffect(() => {
    dispatch(getSchedules());
    dispatch(getBookingRequests());
  }, []);

  if (acceptedRequests.length > 0) {
    return (
      <View style={[styles.body]}>
        <Header title={"Schedule"} />
        <View style={[styles.mx3, styles.flex1]}>
          <WorkerScheduleFlatlist DATA={acceptedRequests} />
          <View style={[styles.flexRow, styles.py3, styles.px2, styles.absolute]}>
            <View style={[styles.flex1]} />
            <TouchableOpacity
              onPress={() => navigation.navigate("WorkerBookingRequests")}
            >
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
                Booking Requests ({count})
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  return (
    <>
      <Header title={"Schedule"} />
      <View
        style={[styles.flexRow, styles.py3, styles.px2, styles.absolute, styles.mt15]}
      >
        <View style={[styles.flex1]} />
        <TouchableOpacity onPress={() => navigation.navigate("WorkerBookingRequests")}>
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
            Booking Requests ({count})
          </Text>
        </TouchableOpacity>
      </View>
      <NoDataImage refresh={true} onPress={() => dispatch(getSchedules())} />
    </>
  );
};

export default WorkerSchedule;

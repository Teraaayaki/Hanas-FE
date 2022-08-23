import React, { useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text } from "react-native";
import { LogBox } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Header from "@components/Header";
import WorkerScheduleFlatlist from "@components/flatlist/scheduleFlatlists/WorkerScheduleFlatlist";
import NoDataImage from "@components/NoDataImage";
import Loading from "@components/Loading";
import { loadingStyle } from "@constants";
import styles from "./style";

import { SocketContext } from "../../../context/socketContext";
import { getSchedules } from "../../../redux/actions/workerScheduleActions";
import { getBookingRequests } from "../../../redux/actions/workerBookingActions";

const WorkerSchedule = ({ navigation }) => {
  const { socket } = useContext(SocketContext);
  const dispatch = useDispatch();

  const { acceptedRequests, fetching } = useSelector(
    (state) => state.workerSchedules
  );
  const { count } = useSelector((state) => state.workerBookingRequests);
  const { user } = useSelector((state) => state.userDetails);

  useEffect(() => {
    dispatch(getSchedules());
    dispatch(getBookingRequests());
  }, []);

  useEffect(() => {
    socket.current.on("newBooking", (data) => {
      if (user.id === data.worker) {
        dispatch(getBookingRequests());
      }
    });

    socket.current.on("bookingUpdate", (data) => {
      if (
        user.id === data.worker &&
        (data.book_status === "Accepted" || data.book_status === "Finished")
      ) {
        dispatch(getSchedules());
      }
    });
  }, []);

  if (fetching) {
    return (
      <View style={[styles.body]}>
        <Header title={"Schedule"} />
        <View style={loadingStyle.position}>
          <Loading title="Fetching Schedules..." />
        </View>
      </View>
    );
  }

  if (acceptedRequests.length > 0) {
    return (
      <View style={[styles.body]}>
        <Header title={"Schedule"} />
        <View style={[styles.mx3, styles.flex1]}>
          <WorkerScheduleFlatlist DATA={acceptedRequests} />
          <View
            style={[styles.flexRow, styles.py3, styles.px2, styles.absolute]}
          >
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
                  styles.py3,
                  styles.px3,
                  styles.rounded,
                  styles.borderMuted20,
                  styles.borderSlim,
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
        style={[
          styles.flexRow,
          styles.py3,
          styles.px2,
          styles.absolute,
          styles.mt15,
        ]}
      >
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
      <NoDataImage refresh={true} onPress={() => dispatch(getSchedules())} />
    </>
  );
};

export default WorkerSchedule;

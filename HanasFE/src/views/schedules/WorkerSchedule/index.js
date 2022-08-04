import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, Flatlist } from "react-native";
import { LogBox } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Header from "@components/Header";
import WorkerScheduleFlatlist from "@components/flatlist/scheduleFlatlists/WorkerScheduleFlatlist";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import { colors, fontSize } from "@constants";
import styles from "./style";

import { getSchedules } from "../../../redux/actions/workerScheduleActions";

LogBox.ignoreLogs(["VirtualizedLists should never be nested inside"]); //ignore ni niya nga message

const WorkerSchedule = ({ navigation }) => {
  const dispatch = useDispatch();

  const { count } = useSelector((state) => state.workerBookingRequests);
  const { acceptedRequests } = useSelector((state) => state.workerSchedules);

  useEffect(() => {
    dispatch(getSchedules());
  }, []);

  return (
    <ParallaxScrollView
      backgroundColor="#FF6D8F"
      contentBackgroundColor={colors.background}
      contentContainerStyle={{ height: "100%" }}
      parallaxHeaderHeight={80}
      renderForeground={() => <Header title={"Schedule"} />}
      stickyHeaderHeight={70}
      renderStickyHeader={() => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "#FF6D8F",
            height: "100%",
          }}
        >
          <Text
            style={{
              color: colors.black,
              alignSelf: "center",
              fontSize: fontSize.h1,
              marginTop: 30,
            }}
          >
            Booking Requests ({count})
          </Text>
        </View>
      )}
    >
      <View style={[styles.body]}>
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
                  styles.px3,
                ]}
              >
                Booking Requests ({count})
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ParallaxScrollView>
  );
};

export default WorkerSchedule;

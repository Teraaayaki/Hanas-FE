import React, { useEffect, useState } from "react";
import { FlatList, View, Text, TouchableOpacity, Button } from "react-native";
import { Icon } from "react-native-elements";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { useDispatch, useSelector } from "react-redux";

import { removeSchedule, resetError } from "@redux/actions/scheduleActions";
import { ToastComponent, showToast } from "@helpers/toast";
import {
  PinkSidedCardHeader,
  PinkSidedCardItem,
} from "@components/card/PinkSidedCardList";
import styles from "./style";
import { colors } from "@constants";
import { padding } from "@constants";

dayjs.extend(utc);

const ClientScheduleFlatlist = ({ navigation, DATA }) => {
  let date = new Date(1990, 1, 20);

  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.schedule);

  const handleRemove = (id) => {
    const Data = {
      _id: id,
    };
    console.log("Clicked Remove");
    dispatch(removeSchedule(Data));
  };

  const renderTopButton = ({ item }) => {
    const renderIcon = ({ item }) => {
      if (item.book_status == "Finished") {
        return (
          <Icon name="checkmark-circle-outline" type="ionicon" size={18} />
        );
      }
      if (item.book_status == "Cancelled") {
        return <Icon name="x-circle" type="feather" size={18} />;
      }
      return <Icon name="calendar-clock" type="material-community" size={18} />;
    };
    const topBorderStyle = ({ item }) => {
      switch (item.book_status) {
        case "Finished":
        case "Ongoing":
          return styles.borderSuccess;
        case "Accepted":
          return styles.borderPrimary;
        case "Cancelled":
          return styles.borderMuted50;
        default:
          return styles.borderMuted50;
      }
    };
    return (
      <View
        style={[
          styles.w100,
          styles.border2,
          topBorderStyle({ item }),
          styles.bgLightGrey,
          styles.flexRow,
          styles.justifyContentCenter,
          styles.alignCenter,
          styles.py5,
          styles.rounded5,
        ]}
      >
        {renderIcon({ item })}
        <Text style={[styles.h5, styles.textBlack]}>
          {" "}
          {item.book_status === "Finished" ? "Completed" : item.book_status}
        </Text>
      </View>
    );
  };

  const renderBottomButton = ({ item }) => {
    const message = ({ item }) => {
      if (item.book_status == "Finished" || item.book_status == "Cancelled") {
        return (
          <Text style={[styles.h5]} onPress={() => handleRemove(item._id)}>
            Remove
          </Text>
        );
      }
      // return <Text style={[styles.h5]}>Cancel</Text>;
    };

    const feedback = ({ item }) => {
      if (item.isFeedbacked == true) {
        return (
          <Text
            style={[styles.h5, styles.textWhite]}
            onPress={() =>
              showToast(
                "error",
                "Feedback already made",
                "You already added a feedback on this booking",
                () => dispatch(resetError())
              )
            }
          >
            Feedback Done
          </Text>
        );
      } else {
        return (
          <Text
            style={[styles.h5, styles.textWhite]}
            onPress={() =>
              navigation.navigate("Feedback", {
                workerData: item.workerData[0],
                serviceData: item.workerServiceData[0],
                booking_id: item._id,
              })
            }
          >
            Feedback
          </Text>
        );
      }
      // return <Text style={[styles.h5]}>Cancel</Text>;
    };

    if (item.book_status == "Finished") {
      //Missing Condition: This button must only appear when Current Date is more than 3 days away from Booked Date & Time Start
      // item.bookStatus == "Finished" || item.bookStatus == "Cancelled" || (item.bookStatus == "Accepted" && currentDate > BookedDate + 3Days)
      return (
        <View>
          <TouchableOpacity>
            <View
              style={[
                styles.w100,
                styles.border,
                styles.borderMuted50,
                styles.bgLightGrey,
                styles.flexRow,
                styles.justifyContentCenter,
                styles.alignCenter,
                styles.py5,
                styles.rounded5,
                styles.mt5,
              ]}
            >
              {message({ item })}
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={[
                styles.w100,
                styles.border,
                styles.borderMuted50,
                styles.borderInfo,
                styles.bgFeedback,
                styles.flexRow,
                styles.justifyContentCenter,
                styles.alignCenter,
                styles.py5,
                styles.rounded5,
                { marginTop: 15 },
              ]}
            >
              {feedback({ item })}
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  };

  const renderCard = ({ item }) => {
    const scheduleIconColorStyle = ({ item }) => {
      if (item.book_status == "Finished" || item.book_status == "Cancelled") {
        return colors.muted75;
      }
      return colors.secondary;
    };
    if (item.book_status != "Declined") {
      return (
        <View
          style={[styles.flex1, styles.flexRow, styles.alignCenter, styles.py3]}
        >
          <View style={[styles.flex4, styles.pl3]}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ProfileView", {
                  worker_id: item.workerData[0]._id,
                  service_id: item.workerServiceData[0]._id,
                  serviceName:
                    item.workerServiceData[0].serviceNameData[0].service_type,
                })
              }
            >
              <Text
                style={[
                  styles.mx1,
                  styles.h3,
                  styles.textInfo,
                  styles.bold,
                  styles.underline,
                  styles.mb2,
                ]}
              >
                {`${item.workerData[0].first_name} ${item.workerData[0].family_name}`}
              </Text>
            </TouchableOpacity>
            <Text style={[styles.flex1, styles.mx1, styles.p, styles.my1]}>
              {item.workerServiceData[0].serviceNameData[0].service_type}{" "}
              Service
            </Text>
            <Text style={[styles.flex1, styles.mx1, styles.h4, styles.bold]}>
              {item.book_type} Day Booking
            </Text>
            <View
              style={[
                styles.flex1,
                styles.flexRow,
                styles.mt3,
                styles.alignCenter,
              ]}
            >
              <Icon
                name="calendar-clock"
                type="material-community"
                color={scheduleIconColorStyle({ item })}
              />
              {item.book_type === "Single" ? (
                <Text
                  style={[
                    styles.mx1,
                    styles.bold,
                    styles.p,
                    styles.textMuted75,
                    styles.controlledWidth,
                  ]}
                >
                  {dayjs(item.booked_dateTimeStart).format("MMM D, YYYY")}
                  {"\n"}
                  {dayjs(item.booked_dateTimeStart).format("h:mm A")} -{" "}
                  {dayjs(item.booked_dateTimeEnd).format("h:mm A")}
                </Text>
              ) : (
                <Text
                  style={[
                    styles.mx1,
                    styles.bold,
                    styles.p,
                    styles.textMuted75,
                  ]}
                >
                  {dayjs(item.booked_dateTimeStart).format("MMM D, YYYY")} -
                  {dayjs(item.booked_dateTimeEnd).format("MMM D, YYYY")}
                </Text>
              )}
            </View>
          </View>
          <View
            style={[
              styles.flex2,
              styles.h100,
              styles.justifyContentSpaceEvenly,
              styles.pr3,
              styles.pl2,
            ]}
          >
            {renderTopButton({ item })}
            {renderBottomButton({ item })}
          </View>
        </View>
      );
    }
  };

  const renderTitle = ({ item }) => {
    if (
      dayjs(item.booked_dateTimeStart).format("MDYY") !==
      dayjs(date).format("MDYY")
    ) {
      date = new Date(item.booked_dateTimeStart);
      return (
        <View style={[styles.flex1, styles.mt2]}>
          <PinkSidedCardHeader
            title={dayjs(item.booked_dateTimeStart).format("MMM D, YYYY")}
          />
        </View>
      );
    }
  };

  const renderItem = ({ item }) => {
    const renderPinkSidedCard = ({ item }) => {
      if (item.workerServiceData[0].serviceNameData[0].service_type) {
        switch (item.book_status) {
          case "Finished":
            return (
              <PinkSidedCardItem
                content={renderCard({ item })}
                disabled
                success
              />
            );
          case "Cancelled":
            return (
              <PinkSidedCardItem content={renderCard({ item })} disabled />
            );
          case "Ongoing":
            return <PinkSidedCardItem content={renderCard({ item })} success />;
          default:
            return <PinkSidedCardItem content={renderCard({ item })} />;
        }
      }
      return (
        <PinkSidedCardItem
          disabled
          content={
            <Text style={[styles.textCenter, styles.h2, styles.textMuted75]}>
              NONE
            </Text>
          }
        />
      );
    };
    return (
      <View>
        {renderTitle({ item })}
        {renderPinkSidedCard({ item })}
      </View>
    );
  };

  useEffect(() => {
    date = new Date(1990, 0, 21);
  }, [DATA]);

  return (
    <>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        contentContainerStyle={{ paddingBottom: padding.p5 }}
      />
      <ToastComponent />
    </>
  );
};

export default ClientScheduleFlatlist;

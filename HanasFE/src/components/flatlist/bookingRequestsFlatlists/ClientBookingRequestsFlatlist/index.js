import React, { useState, useEffect } from "react";
import { FlatList, View, Text } from "react-native";
import { Icon } from "react-native-elements";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { useDispatch } from "react-redux";
import {
  removeCancelledBookSchedule,
  cancelBookingSchedule,
} from "@redux/actions/scheduleActions";

import {
  PinkSidedCardHeader,
  PinkSidedCardItem,
} from "@components/card/PinkSidedCardList";
import ContainedIcon from "@components/icons/ContainedIcon";
import styles from "./style";
import { colors } from "@constants";
import { padding } from "@constants";
import { TouchableOpacity } from "react-native-gesture-handler";

dayjs.extend(utc);

const ClientBookingRequestsFlatlist = ({ navigation, DATA }) => {
  let date = new Date(1990, 0, 21);

  const dispatch = useDispatch();

  const handleRemoveCancelled = (id) => {
    const Data = {
      _id: id,
    };

    dispatch(removeCancelledBookSchedule(Data));
  };

  const cancelBooking = (id) => {
    const Data = {
      _id: id,
    };

    dispatch(cancelBookingSchedule(Data));
  };

  const renderContentv2 = ({ item }) => {
    const scheduleIconColorStyle = ({ item }) => {
      // console.log("ITEM", item._id);
      if (item.book_status == "Declined") {
        return colors.muted75;
      }
      return colors.secondary;
    };
    if (item.book_status == "Pending" || item.book_status == "Declined") {
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
            <Text
              style={[
                styles.flex1,
                styles.mx1,
                styles.p,
                styles.my1,
                styles.bold,
              ]}
            >
              {item.workerServiceData[0].serviceNameData[0].service_type}{" "}
              Service
            </Text>
            <Text style={[styles.flex1, styles.mx1, styles.p]}>
              {item.workerData[0].address}
            </Text>
            <Text
              style={[
                styles.flex1,
                styles.mx1,
                styles.p,
                styles.my1,
                styles.bold,
              ]}
            >
              {item.book_type} Day
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
                  ]}
                >
                  {dayjs(item.booked_dateTimeStart).format("MMM D, YYYY")} -{" "}
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
          <View style={[styles.mx5, styles.h100, styles.justifyContentCenter]}>
            {item.book_status == "Pending" ? (
              <ContainedIcon
                xMark
                danger
                pressable
                onPress={() => cancelBooking(item._id)}
              />
            ) : (
              <ContainedIcon
                xMark
                disabled
                pressable
                onPress={() => handleRemoveCancelled(item._id)}
              />
            )}
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

  const renderCard = ({ item }) => {
    if (item.book_status == "Pending") {
      return <PinkSidedCardItem content={renderContentv2({ item })} />;
    } else if (item.book_status == "Declined") {
      return <PinkSidedCardItem disabled content={renderContentv2({ item })} />;
    }
    return (
      <PinkSidedCardItem
        disabled
        content={
          <Text style={[styles.px4, styles.textJustify]}>
            <Text style={[styles.bold]}>Error:</Text> This Card is accessing
            Data that is not a Booking Request.
          </Text>
        }
      />
    );
  };

  const renderItem = ({ item }) => {
    return (
      <>
        {renderTitle({ item })}
        {renderCard({ item })}
      </>
    );
  };

  useEffect(() => {
    date = new Date(1990, 0, 21);
  }, [DATA]);

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
      contentContainerStyle={{ paddingBottom: padding.p5 }}
    />
  );
};

export default ClientBookingRequestsFlatlist;

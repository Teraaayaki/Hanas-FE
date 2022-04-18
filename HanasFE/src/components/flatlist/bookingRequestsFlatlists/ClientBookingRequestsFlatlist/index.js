import React, { useState } from "react";
import { FlatList, View, Text } from "react-native";
import { Icon } from "react-native-elements";

import {
  PinkSidedCardHeader,
  PinkSidedCardItem,
} from "@components/card/PinkSidedCardList";
import ContainedIcon from "@components/icons/ContainedIcon";
import styles from "./style";
import { colors } from "@constants";
import { padding } from "@constants";
import { TouchableOpacity } from "react-native-gesture-handler";

const ClientBookingRequestsFlatlist = ({ navigation, DATA }) => {
  let date = "_";

  const renderContentv2 = ({ item }) => {
    const scheduleIconColorStyle = ({ item }) => {
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
              onPress={() => navigation.navigate("ProfileView")}
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
                {item.workerName}
              </Text>
            </TouchableOpacity>
            <Text style={[styles.flex1, styles.mx1, styles.p, styles.my1]}>
              {item.serviceType} Service
            </Text>
            <Text style={[styles.flex1, styles.mx1, styles.p]}>
              {item.address}
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
              <Text
                style={[styles.mx1, styles.bold, styles.p, styles.textMuted75]}
              >
                {item.timeStart} - {item.timeEnd}
              </Text>
            </View>
          </View>
          <View style={[styles.mx5, styles.h100, styles.justifyContentCenter]}>
            {item.book_status == "Pending" ? (
              <ContainedIcon xMark danger pressable onPress={() => {}} />
            ) : (
              <ContainedIcon xMark disabled pressable onPress={() => {}} />
            )}
          </View>
        </View>
      );
    }
  };

  const renderTitle = ({ item }) => {
    if (item.date != date) {
      date = item.date;
      return (
        <View style={[styles.flex1, styles.mt2]}>
          <PinkSidedCardHeader title={item.date} />
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
      <View>
        {renderTitle({ item })}
        {renderCard({ item })}
      </View>
    );
  };

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingBottom: padding.p5 }}
    />
  );
};

export default ClientBookingRequestsFlatlist;

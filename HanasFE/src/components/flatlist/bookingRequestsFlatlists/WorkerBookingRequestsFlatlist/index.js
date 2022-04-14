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

const WorkerBookingRequestsFlatlist = ({ navigation, DATA }) => {
  let date = "_";

  const renderCard = ({ item }) => {
    return (
      <View
        style={[styles.flex1, styles.flexRow, styles.alignCenter, styles.py3]}
      >
        <View style={[styles.flex1, styles.pl3]}>
          <View style={[styles.flex1, styles.flexRow, styles.mb2]}>
            <Text style={[styles.flex1, styles.mx1, styles.h3, styles.bold]}>
              Type of Service:
            </Text>
            <Text style={[styles.flex1, styles.mx1, styles.h3]}>
              {item.serviceType}
            </Text>
          </View>
          <View style={[styles.flex1, styles.flexRow, styles.my1]}>
            <Text style={[styles.flex1, styles.mx1, styles.bold, styles.p]}>
              Client Name
            </Text>
            <Text style={[styles.flex1, styles.mx1, styles.p]}>
              {item.clientName}
            </Text>
          </View>
          <View style={[styles.flex1, styles.flexRow, styles.my1]}>
            <Text style={[styles.flex1, styles.mx1, styles.bold, styles.p]}>
              Address
            </Text>
            <Text style={[styles.flex1, styles.mx1, styles.p]}>
              {item.address}
            </Text>
          </View>
          <View
            style={[
              styles.flex1,
              styles.flexRow,
              styles.mt2,
              styles.alignCenter,
            ]}
          >
            <Icon
              name="calendar-clock"
              type="material-community"
              color={
                item.bookStatus == "pending" ? colors.secondary : colors.muted75
              }
            />
            <Text
              style={[styles.mx1, styles.bold, styles.p, styles.textMuted75]}
            >
              {item.timeStart} - {item.timeEnd}
            </Text>
          </View>
        </View>
        {item.bookStatus == "pending" ? (
          <View
            style={[styles.mx5, styles.h100, styles.justifyContentSpaceBetween]}
          >
            <ContainedIcon check success pressable onPress={() => {}} />
            <ContainedIcon xMark danger pressable onPress={() => {}} />
          </View>
        ) : (
          <View style={[styles.mx5, styles.h100, styles.justifyContentCenter]}>
            <ContainedIcon xMark disabled pressable onPress={() => {}} />
          </View>
        )}
      </View>
    );
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

  const renderItem = ({ item }) => {
    return (
      <View>
        {renderTitle({ item })}
        {item.bookStatus == "Pending" ? (
          <PinkSidedCardItem content={renderCard({ item })} />
        ) : (
          <PinkSidedCardItem disabled content={renderCard({ item })} />
        )}
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

export default WorkerBookingRequestsFlatlist;

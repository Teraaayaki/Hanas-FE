import React, { useState } from "react";
import { FlatList, View, Text } from "react-native";
import { Icon } from "react-native-elements";

import {
  PinkSidedCardHeader,
  PinkSidedCardItem,
} from "@components/card/PinkSidedCardList";
import ContainedIcon from "@components/icons/ContainedIcon";
import styles from "./styles";
import { colors } from "@constants";

const ScheduleFlatlist = ({ navigation }) => {
  let date = "_";

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      date: "date1",
      serviceType: "Electrical",
      clientName: "Soy Lebumfacil",
      address: "Bogo City, Cebu",
      timeStart: "11:00 AM",
      timeEnd: "10:00 PM",
      done: false,
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      date: "date1",
      serviceType: "Mechanical",
      clientName: "James Karl Sia",
      address: "Talamban, Cebu",
      timeStart: "10:00 AM",
      timeEnd: "2:00 PM",
      done: false,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      date: "date2",
      serviceType: "Electrical",
      clientName: "Mary Therese Sun Alegre",
      address: "Lapu-lapu City, Cebu",
      timeStart: "10:00 AM",
      timeEnd: "1:00 PM",
      done: false,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d78",
      date: "date3",
      serviceType: "Electrical",
      clientName: "Soy Lebumfacil",
      address: "Bogo City, Cebu",
      timeStart: "5:00 PM",
      timeEnd: "8:00 PM",
      done: true,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d79",
      date: "date3",
      serviceType: "Mechanical",
      clientName: "Hosea Barriga",
      address: "Danao City, Cebu",
      timeStart: "12:00 AM",
      timeEnd: "3:00 PM",
      done: true,
    },
  ];

  const renderCard = ({ item }) => {
    return (
      <View style={[styles.flex1, styles.flexRow, styles.alignCenter]}>
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
              color={colors.secondary}
            />
            <Text
              style={[styles.mx1, styles.bold, styles.p, styles.textMuted75]}
            >
              {item.timeStart} - {item.timeEnd}
            </Text>
          </View>
        </View>
        <View style={[styles.mx5]}>
          {item.done ? (
            <ContainedIcon check disabled />
          ) : (
            <ContainedIcon check success pressable />
          )}
        </View>
      </View>
    );
  };

  const renderTitle = ({ item }) => {
    if (item.date != date) {
      date = item.date;
      return (
        <View style={[styles.flex1, styles.mt5]}>
          <PinkSidedCardHeader title={item.date} />
        </View>
      );
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View>
        {renderTitle({ item })}
        <PinkSidedCardItem content={renderCard({ item })} />
      </View>
    );
  };

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ScheduleFlatlist;

import React, { useState } from "react";
import {
  View,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import { colors, fontWeight, fontSize, margin } from "@constants";
import styles from "./style";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "You sent a booking request to James",
    sub_title: "",
    time_elapsed: "3 mins",
    action: "View Booking Request",
    date: "10 - 30 - 21 | 08:00:12",
    setNew: "true",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Therese Sun sent you a message",
    sub_title: "",
    time_elapsed: "25 days",
    action: "View Message",
    date: "10 - 05 - 21 | 08:00:12",
    setNew: "true",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "",
    sub_title: "Your booking request has been accepted",
    time_elapsed: "26 days",
    action: "View Booking Request",
    date: "10 - 05 - 21 | 08:00:12",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d71",
    title: "",
    sub_title: "Your payment has been received",
    time_elapsed: "1 mnth",
    action: "View Transactions",
    date: "9 - 27 - 21 | 08:00:12",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "",
    sub_title: "Your booking request has been accepted",
    time_elapsed: "1 mnth",
    action: "View Schedule",
    date: "9 - 30 - 21 | 08:00:12",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    title: "",
    sub_title: "Soy Renzo sent you a message",
    time_elapsed: "1 mnth",
    action: "View Message",
    date: "9 - 30 - 21 | 08:00:12",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor, notif }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View style={styles.container}>
      <View style={styles.viewContainerFlex}>
        {item.title != "" ? (
          <Text style={styles.title}>{item.title}</Text>
        ) : (
          <Text style={styles.sub_title}>{item.sub_title}</Text>
        )}
        <Text style={styles.time_elapsed}>{item.time_elapsed} ago</Text>
      </View>

      <View style={styles.viewButtonContainerFlex}>
        <TouchableOpacity>
          <Text style={styles.boldText}>{item.action}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.new_notif} notif={item.setNew}></Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.dateText}>{item.date}</Text>
    </View>
  </TouchableOpacity>
);

const NotificationFlatlist = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor =
      item.id === selectedId ? colors.borderGrey : colors.background;
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => navigation.navigate("BrowseServices")}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      extraData={selectedId}
      contentContainerStyle={{
        flexGrow: 1,
      }}
    />
  );
};

export default NotificationFlatlist;

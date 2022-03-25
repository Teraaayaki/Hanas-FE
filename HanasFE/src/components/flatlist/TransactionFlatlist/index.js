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
    title: "First Item",
    name: "James Sia",
    amount: "300.00",
    date: "09 - 20 - 21 | 08:00:12",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    name: "Therese Sun",
    amount: "1000.00",
    date: "09 - 21 - 21 | 08:00:12",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    name: "Renzo Pradilla",
    amount: "600.00",
    date: "09 - 23 - 21 | 08:00:12",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d71",
    title: "Third Item",
    name: "Soy Lebumfacil",
    amount: "500.00",
    date: "09 - 26 - 21 | 08:00:12",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "Third Item",
    name: "Hosea Barriga",
    amount: "100.00",
    date: "09 - 27 - 21 | 08:00:12",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    title: "Third Item",
    name: "Hosea Barriga",
    amount: "100.00",
    date: "09 - 30 - 21 | 08:00:12",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View style={styles.container}>
      <Text style={styles.name}>Payment Sent to {item.name}</Text>
      <View style={styles.viewButtonContainerFlex}>
        <Text style={styles.boldText}>Php {item.amount}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.viewText} onPress={onPress}>View</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.dateText}>{item.date}</Text>
    </View>
  </TouchableOpacity>
);

const TransactionFlatlist = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor =
      item.id === selectedId ? colors.borderGrey : colors.background;
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => navigation.navigate("TransactionReport")}
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

export default TransactionFlatlist;

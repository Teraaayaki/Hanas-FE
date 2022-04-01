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
import CircularImage from "@components/CircularImage";
import styles from "./style";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "James",
    message: "Thank you! That was very helpful!",
    image: require("@images/profile3.png"),
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    name: "Will Kenny",
    message: "I know... I'm trying to get the funds",
    image: require("@images/profile1.png"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    name: "Beth Williams",
    message:
      "I'm looking for tips around capturing the milky way. I have a 6D with a 24-100mm...",
    image: require("@images/profile4.png"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d71",
    name: "Rev Shawn",
    message: "Wanted to ask if you're available for a portrait shoot next week",
    image: require("@images/profile5.png"),
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View style={styles.containerRow}>
      <CircularImage imageSource={item.image} />
      <View style={styles.container}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.viewButtonContainerFlex}>
          <Text style={styles.messageText}>{item.message}</Text>
        </View>
        <Text style={styles.dateText}>{item.date}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const MessagesFlatlist = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor =
      item.id === selectedId ? colors.borderGrey : colors.background;
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() =>
          navigation.navigate("Chatroom", {
            inboundName: item.name,
            outboundName: "Username",
            inboundAvatarImageSource: item.image,
            outboundAvatarImageSource: "",
          })
        }
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

export default MessagesFlatlist;

import React, { useState } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";

import { colors, fontWeight, fontSize, margin } from "@constants";
import CardContainer from "@components/CardContainer";
import styles from "./style";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "Hosea Barriga",
    profession: "Electrical Services",
    rating: "4.5",
    jobs: "1000",
    image: require("@images/profile1.png"),
    rate: "100",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1",
    name: "Soy Lebumfacil",
    profession: "Electrical Services",
    rating: "4.0",
    jobs: "699",
    image: require("@images/profile2.png"),
    rate: "99",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2",
    name: "Soy Lebumfacil",
    profession: "Electrical Services",
    rating: "4.0",
    jobs: "699",
    image: require("@images/profile2.png"),
    rate: "99",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor, notif }) => (
    <CardContainer
            name={item.name}
            profession={item.profession}
            rating={item.rating}
            jobs={item.jobs}
            image={item.image}
            rate={item.rate}
            onPress={onPress}
          />
);

const CardContainerFlatlist = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);
  
  const renderItem = ({ item }) => {
    const backgroundColor =
      item.id === selectedId ? colors.borderGrey : colors.background;
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => navigation.navigate("Profile")}
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

export default CardContainerFlatlist;

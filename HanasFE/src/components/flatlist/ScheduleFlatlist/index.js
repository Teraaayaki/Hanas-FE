import React, { useState } from "react";
import { FlatList, View } from "react-native";

import {
  PinkSidedCardHeader,
  PinkSidedCardItem,
} from "@components/card/PinkSidedCardList";
import styles from "./styles";
import { colors } from "@constants";

const ScheduleFlatlist = ({ navigation }) => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
      date: "date1",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
      date: "date1",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
      date: "date2",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d78",
      title: "Fourth Item",
      date: "date3",
    },
  ];

  const renderItem = ({ item }) => {
    return <PinkSidedCardHeader title={"Hello"} />;
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

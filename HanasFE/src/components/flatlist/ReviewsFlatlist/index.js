import React, { useState } from "react";
import {
  View,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image
} from "react-native";

import { colors, fontWeight, fontSize, margin } from "@constants";
import CircularImage from "@components/CircularImage";
import Carousel from "@components/Carousel";
import styles from "./style";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    name: "John Doe",
    review: "He did a good job",
    image: require("@images/profile1.png"),
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    name: "Therese Sun",
    review: "I was very satisfied with his work.",
    image: require("@images/profile1.png"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    name: "Renzo Pradilla",
    review: "He was able to fix my sink.",
    image: require("@images/profile1.png"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d71",
    title: "Third Item",
    name: "Soy Lebumfacil",
    review: "He works so fast and efficient.",
    image: require("@images/profile1.png"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "Third Item",
    name: "Hosea Barriga",
    review: "I would like to book this freelancer again.",
    image: require("@images/profile1.png"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    title: "Third Item",
    name: "Wonderful, Amazing, Wow!!!",
    review: "Wonderful, Amazing, Wow!!!",
    image: require("@images/profile1.png"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d75",
    title: "Third Item",
    name: "Wonderful, Amazing, Wow!!!",
    review: "You can really trust this person when it comes to Electrical Services ",
    image: require("@images/profile1.png"),
  },
];

const Item = ({ item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity style={[styles.item, backgroundColor]}>
    <View style={{flex: 1, flexDirection: "row"}}>
        <CircularImage imageSource={item.image} style={{borderRadius: 50,}}/>
        <View style={styles.container}>
            <Text style={styles.name}>{`${item.name}`}</Text>
            <View style={styles.viewButtonContainerFlex}>
                <Text style={styles.reviewText}>{item.review}</Text>
                <Text style={styles.viewText}><Image source={require("@images/star.png")} style={{height: 13, width: 13}}/> 4.5/5</Text>
            </View>
            <Text style={styles.dateText}>{item.date}</Text>
        </View>
    </View>
  </TouchableOpacity>
);

const ReviewsFlatlist = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor =
      item.id === selectedId ? colors.borderGrey : colors.background;
    const color = item.id === selectedId ? "white" : "black";

    return (
        <Item
            item={item}
            image={item.image}
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

export default ReviewsFlatlist;

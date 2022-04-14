import React, { useState } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

import CircularImage from "@components/CircularImage";
import styles from "./style";

const WorkerProfileReviewsFlatlist = ({ data, navigation, serviceName }) => {
  const renderItem = ({ item }) => {
    let items = { ...item, serviceName };
    return <Item item={items} />;
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
      contentContainerStyle={{
        flexGrow: 1,
      }}
    />
  );
};

const Item = ({ item }) => (
  <TouchableOpacity style={[styles.item]}>
    <View style={{ flex: 1, flexDirection: "row" }}>
      <CircularImage style={{ borderRadius: 50 }} />
      <View style={styles.container}>
        <Text
          style={styles.name}
          numberOfLines={1}
        >{`${item.nameData[0].name}`}</Text>
        <View style={styles.hallowContainer}>
          <Text style={styles.serviceName}>{item.serviceName} Services</Text>
        </View>
        <View style={styles.viewButtonContainerFlex}>
          <Text style={styles.reviewText}>{item.comment}</Text>
          <View style={{ flexDirection: "row" }}>
            <Icon
              color="#FFD706"
              size={22}
              name="star"
              style={{ marginTop: "-15%" }}
            />
            <Text style={styles.viewText}> {item.rate}/5</Text>
          </View>
        </View>
        <Text style={styles.dateText}>{item.created_at}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default WorkerProfileReviewsFlatlist;

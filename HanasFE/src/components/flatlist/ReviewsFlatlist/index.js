import React, { useState } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

import CircularImage from "@components/CircularImage";
import styles from "./style";

const ReviewsFlatlist = ({ data, navigation }) => {
  const renderItem = ({ item }) => {
    return <Item item={item} image={item.profile_pic} rate={item.rate} />;
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
      <CircularImage
        imageSource={{ uri: item.clientNameData[0].profile_pic }}
        style={{ borderRadius: 50 }}
      />
      <View style={styles.container}>
        <Text style={styles.name} numberOfLines={1}>
          {`${item.clientNameData[0].name}`}
        </Text>
        <View style={styles.hallowContainer}>
          <Text style={styles.serviceName}>
            {item.myServicesData[0].serviceNameData[0].service_type} Services
          </Text>
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
        <Text style={styles.dateText}>{item.date}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default ReviewsFlatlist;

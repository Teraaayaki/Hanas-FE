import React, { useState } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

import { colors } from "@constants";
import CircularImage from "@components/CircularImage";
import styles from "./style";

const ReviewsFlatlist = ({ data, navigation }) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ data }) => {
    return <Item item={data} image={data.profile_pic} rate={data.myServicesData[0].feedbacksData[0].rate} />;
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => data._id}
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
        >{`${item.name}`}</Text>
        <View style={styles.hallowContainer}>
          <Text style={styles.serviceName}>
            {item.serviceName} Services
          </Text>
        </View>
        <View style={styles.viewButtonContainerFlex}>
          <Text style={styles.reviewText}>{item.myServicesData[0].feedbacksData[0].comment}</Text>
          <View style={{ flexDirection: "row" }}>
            <Icon
              color="#FFD706"
              size={22}
              name="star"
              style={{ marginTop: "-15%" }}
            />
            <Text style={styles.viewText}> {item.myServicesData[0].feedbacksData[0].rate}/5</Text>
          </View>
        </View>
        <Text style={styles.dateText}>{item.myServicesData[0].serviceNameData[0].feedbacksData[0].created_at}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default ReviewsFlatlist;

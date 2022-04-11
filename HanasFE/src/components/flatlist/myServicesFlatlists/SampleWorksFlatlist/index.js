import React from "react";
import { View, FlatList, TouchableOpacity, Image, Text } from "react-native";

import styles from "../style";

const SampleWorksFlatlist = ({ DATA, onPressImage }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={onPressImage}>
        <View
          style={[
            styles.bgWhite,
            styles.rounded,
            styles.p3,
            styles.m3,
            styles.sampleWorksImage,
          ]}
        >
          <Text>{item.ID}</Text>
          {/* <Image style={[styles.sampleWorksImage]} source={item.image} /> */}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={[
        styles.temp6,
        styles.sampleWorksHeight,
        styles.p3,
        styles.w100,
        styles.my3,
      ]}
    >
      <FlatList
        horizontal={true}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.ID}
        contentContainerStyle={[styles.px5]}
      />
    </View>
  );
};

export default SampleWorksFlatlist;

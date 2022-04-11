import React from "react";
import { View, FlatList, TouchableOpacity, Image, Text } from "react-native";

import styles from "../style";

const SampleWorksFlatlist = ({ DATA, onPressImage }) => {
  const renderItem = ({ item }) => {
    return (
      <View
        style={[
          styles.bgWhite,
          styles.rounded,
          styles.mx3,
          styles.sampleWorksImage,
        ]}
      >
        <Image
          style={[styles.w100, styles.h100, styles.rounded]}
          source={item.image}
        />
      </View>
    );
  };

  return (
    <View
      style={[styles.temp1, styles.my5, styles.w100, styles.sampleWorksHeight]}
    >
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={[styles.px5, styles.w100, styles.temp6]}
        horizontal
        showsHorizontalScrollIndicator={true}
      />
    </View>
  );
};

export default SampleWorksFlatlist;

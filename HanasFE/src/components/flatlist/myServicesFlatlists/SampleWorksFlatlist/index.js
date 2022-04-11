import React from "react";
import { View, FlatList, TouchableOpacity, Image, Text } from "react-native";

import styles from "../style";

const SampleWorksFlatlist = ({ DATA, onPressImage }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={[styles.horizontalItemMargin]}
        onPressImage={onPressImage}
      >
        <View
          style={[
            styles.bgWhite,
            styles.rounded,
            styles.h100,
            styles.sampleWorksIMGWidth,
            styles.border,
            styles.borderMuted20,
          ]}
        >
          <Image
            style={[styles.w100, styles.h100, styles.rounded]}
            source={item.image}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.mt4, styles.w100]}>
      <Text
        style={[
          styles.h3,
          styles.textMuted50,
          styles.bold,
          styles.mx4,
          styles.mb3,
        ]}
      >
        Sample Works
      </Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[styles.px2, styles.HorizontalFlatlistHeight]}
      />
    </View>
  );
};

export default SampleWorksFlatlist;

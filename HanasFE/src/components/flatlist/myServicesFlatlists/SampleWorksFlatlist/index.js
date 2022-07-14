import React from "react";
import { View, FlatList, TouchableOpacity, Image, Text } from "react-native";
import { Icon } from "react-native-elements";

import { colors } from "@constants";
import styles from "../style";

const SampleWorksFlatlist = ({
  navigation,
  DATA,
  service_id,
  onPressImage,
}) => {
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
            source={{
              uri: item,
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const renderFlatlist = () => {
    return (
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[styles.px2, styles.HorizontalFlatlistHeight]}
      />
    );
  };

  const renderEmptyList = () => {
    return (
      <View
        style={[
          styles.w100,
          styles.px2,
          styles.HorizontalFlatlistHeight,
          styles.alignCenter,
        ]}
      >
        <TouchableOpacity
          style={[styles.horizontalItemMargin]}
          onPressOut={() =>
            navigation.navigate("EditService", {
              service_id: service_id,
            })
          }
        >
          <View
            style={[
              styles.bgWhite,
              styles.rounded,
              styles.h100,
              styles.sampleWorksIMGWidth,
              styles.border,
              styles.borderMuted20,
              styles.p4,
            ]}
          >
            <View
              style={[
                styles.EmptyImageCardInside,
                styles.rounded,
                styles.h100,
                styles.w100,
                styles.justifyContentCenter,
                styles.alignCenter,
              ]}
            >
              <Icon
                name="file-image"
                type="material-community"
                color={colors.white}
                size={80}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={[styles.mt4, styles.w100]}>
      <Text
        style={[
          styles.h2,
          styles.textDark,
          styles.bold,
          styles.mx4,
          styles.mb3,
        ]}
      >
        Sample Works
      </Text>
      {DATA.length > 0 ? renderFlatlist() : renderEmptyList(navigation)}
    </View>
  );
};

export default SampleWorksFlatlist;

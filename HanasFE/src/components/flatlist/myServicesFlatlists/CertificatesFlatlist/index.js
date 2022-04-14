import React from "react";
import { View, FlatList, TouchableOpacity, Image, Text } from "react-native";

import styles from "../style";

const CertificatesFlatlist = ({ DATA, onPressImage }) => {
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
            styles.certificatesIMGWidth,
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
        Certificates
      </Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[styles.px2, styles.HorizontalFlatlistHeight]}
      />
    </View>
  );
};

export default CertificatesFlatlist;

import React from "react";
import { View, FlatList, TouchableOpacity, Image, Text } from "react-native";
import { Icon } from "react-native-elements";

import { colors } from "@constants";
import styles from "../style";

const CertificatesFlatlist = ({ navigation, DATA, onPressImage }) => {
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

  const renderFlatlist = ({ DATA }) => {
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

  const renderEmptyList = ({ navigation }) => {
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
          onPressImage={() =>
            navigation.navigate("EditService", {
              service_id: DATA.my_service,
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
          styles.h3,
          styles.textMuted50,
          styles.bold,
          styles.mx4,
          styles.mb3,
        ]}
      >
        Certificates
      </Text>
      {DATA.length > 0 ? renderFlatlist(DATA) : renderEmptyList(navigation)}
    </View>
  );
};

export default CertificatesFlatlist;

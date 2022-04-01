import React from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";

import { colors } from "@constants";
import styles from "./style";
// @props text
// text(string)
// made by soy
const Loading = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("@images/hanasLogoSquared.png")}
        />
      </View>
      <View style={styles.loadingContainer}>
        <ActivityIndicator
          style={styles.loading}
          size="large"
          color={colors.secondary}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </View>
    </View>
  );
};

export default Loading;

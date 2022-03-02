import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default ({ title }) => {
  return (
    <View style={styles.labelContainer}>
      <Text style={styles.label}>{title}</Text>
    </View>
  );
};

import { TouchableOpacity, LinearGradient, Text } from "react-native";
import React from "react";
import { colors } from "@config";
import styles from "./styles";

export default ({ handleNavigate, title }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate({ handleNavigate })}>
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={styles.linearGradient}
      >
        <Text style={colors.hanasLightText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

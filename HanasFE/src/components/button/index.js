import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@config";
import styles from "./styles";

export default ({ title }) => {
  return (
    <TouchableOpacity>
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={styles.linearGradient}
      >
        <Text style={colors.hanasLightText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@constants";
import styles from "./styles";

// @Props
// OnPress (Callback) - handle onPress prop
// Title (String) - display text
export default ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={styles.linearGradient}
      >
        <Text style={{ color: colors.white }}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

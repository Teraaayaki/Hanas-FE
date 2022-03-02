import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@constants";
import styles from "./styles";

// Note:
// To implement a dynamically sized button,
// enclose this button in a dynamically sized <View>

export default ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={styles.linearGradient}
      >
        <Text style={styles.white}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

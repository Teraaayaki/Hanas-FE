import React from "react";
import { ActivityIndicator, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@constants";
import styles from "./style";

// Note:
// To implement a dynamically sized button,
// enclose this button in a dynamically sized <View>

// @Props
// OnPress (Callback) - handle onPress prop
// Title (String) - display text
export default ({ onPress, title, loading = false }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

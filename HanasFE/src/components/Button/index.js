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
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={styles.linearGradient}
      >
        {loading ? (
          <ActivityIndicator size="large" color={colors.white} />
        ) : (
          <Text style={styles.white}>{title}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

import { Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";

// @Props title, onPress
// title (string)
// onPress (callback funtion)

// @Notes
// Padding of this buttons are p6 ("6%")
// Having this padding gives it more surface area to press on.
const TextLinkPink = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.press} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TextLinkPink;

import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.color, styles.p]}>{text}</Text>
    </TouchableOpacity>
  );
};

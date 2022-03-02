import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default ({ text, onPress }) => {
  return (
    <TouchableOpacity>
      <Text style={[styles.secondary, styles.f13]} onPress={onPress}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

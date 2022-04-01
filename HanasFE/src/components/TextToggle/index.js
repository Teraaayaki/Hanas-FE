import { Text } from "react-native";
import React from "react";
import styles from "./styles";

const TextToggle = ({ title, active, onPress }) => {
  if (active) {
    return (
      <Text
        style={[styles.bgPrimary, styles.px3, styles.py1, styles.rounded]}
        onPress={onPress}
      >
        {title}
      </Text>
    );
  }
  return (
    <Text
      style={[styles.bgWhite, styles.px3, styles.py1, styles.rounded]}
      onPress={onPress}
    >
      {title}
    </Text>
  );
};

export default TextToggle;

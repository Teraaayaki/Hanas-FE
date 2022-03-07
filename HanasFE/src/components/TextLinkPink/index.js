import { Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";

const TextLinkPink = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TextLinkPink;

import { TouchableOpacity, Text } from "react-native";
import React from "react";
import { colors } from "@constants";
import { Icon } from "react-native-elements";
import styles from "./style";

// @Props title,iconName,onPress
// title (string)
// iconName (string)
// onPress (callbackfunction)
const ButtonWhite = ({ title, iconName, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon type="material" name={iconName} color={colors.secondary} />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonWhite;

import React from "react";
import { TextInput } from "react-native";
import styles from "./styles";

export default ({ value, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      autoComplete={"email"}
      autoCapitalize={"none"}
      keyboardType={"email-address"}
      textContentType={"emailAddress"}
      placeholder={"0947xxxxxxx / johndoe@gmail.com"}
      placeholderTextColor={"#AAA"}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

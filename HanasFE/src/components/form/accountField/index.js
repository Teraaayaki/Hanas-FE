import React from "react";
import { TextInput } from "react-native";
import styles from "./styles";

export default () => {
  return (
    <TextInput
      style={styles.input}
      autoComplete={"email"}
      keyboardType={"email-address"}
      textContentType={"emailAddress"}
      placeholder={"0947xxxxxxx / johndoe@gmail.com"}
      placeholderTextColor={"#AAA"}
    />
  );
};

import React from "react";
import { TextInput } from "react-native";
import styles from "./styles";

export default ({ value, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      secureTextEntry={true}
      autoComplete={"password"}
      autoCapitalize={"none"}
      placeholder={"••••••••"}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

import React from "react";
import { TextInput } from "react-native";
import styles from "./styles";

export default () => {
  return (
    <TextInput
      style={styles.input}
      secureTextEntry={true}
      autoComplete={"password"}
      placeholder={"••••••••"}
    />
  );
};

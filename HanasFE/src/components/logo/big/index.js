import React from "react";
import { Image } from "react-native";
import styles from "./styles";

export default () => {
  return (
    <Image
      style={styles.logo}
      source={require("@images/hanasLogoSquared.png")}
    />
  );
};

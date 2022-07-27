import React from "react";
import { Image, TouchableOpacity, Text } from "react-native";
import styles from "./style";

const CircularImage = ({
  imageSource = require("@images/hanasLogoSquared.png"),
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={imageSource} style={styles.dimension} />
    </TouchableOpacity>
  );
};

export default CircularImage;

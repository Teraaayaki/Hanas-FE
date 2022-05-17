import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import { colors, fontSize } from "@constants";

const CircularImage = ({
  imageSource = require("@images/default.png"),
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={imageSource} style={styles.dimension} />
    </TouchableOpacity>
  );
};

export default CircularImage;

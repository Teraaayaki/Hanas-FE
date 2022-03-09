import React from 'react';
import { View, Text, Image} from "react-native";
import styles from "./style";
import { colors, fontSize } from "@constants";


const CircularImage = ({ imageSource }) => {
  return (
    <Image source={imageSource} style={styles.dimension}></Image>
  );
};

export default CircularImage;

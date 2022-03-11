import React from 'react';
import { View, Text, Image, Touchable} from "react-native";
import styles from "./style";
import { colors, fontSize } from "@constants";
import { TouchableOpacity } from 'react-native-gesture-handler';


const CircularImage = ({ imageSource, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={imageSource} style={styles.dimension}></Image>
    </TouchableOpacity>
  );
};

export default CircularImage;

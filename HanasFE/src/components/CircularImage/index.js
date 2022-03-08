import React from 'react';
import { View, Text, Image} from "react-native";
import styles from "./style";
import { colors, fontSize } from "@constants";


const CircularImage = ({ imageSource }) => {
  return (
    <View style={styles.container}>
        <Image source={imageSource} style={styles.dimension}></Image>
    </View>
  );
};

export default CircularImage;

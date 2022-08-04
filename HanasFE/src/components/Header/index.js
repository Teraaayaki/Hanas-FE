import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./style";
import { colors } from "@constants";
import { Icon } from "react-native-elements";
import style from "./style";
const Header = ({ title, showButton = false, onPress }) => {
  return (
    <LinearGradient
      style={styles.header}
      colors={[colors.primary, colors.secondary]}
    >
      <View style={styles.sideView}>
        {showButton && (
          <TouchableOpacity onPress={onPress}>
            <Icon
              type="material"
              containerStyle={styles.backIcon}
              name="arrow-back"
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.headerText}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={styles.sideView}></View>
    </LinearGradient>
  );
};

export default Header;

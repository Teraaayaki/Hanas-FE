import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style";
import { colors } from "@constants";

const Header = ({ title }) => {
  return (
    <LinearGradient
      style={styles.header}
      colors={[colors.primary, colors.secondary]}
    >
      <View style={styles.headerText}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </LinearGradient>
  );
};

export default Header;

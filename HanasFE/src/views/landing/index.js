import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import { colors } from "@config";
import styles from "./style";

const Landing = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageContainer}
        source={require("@images/hanasLogoSquared.png")}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <LinearGradient
          colors={[colors.primary, colors.secondary]}
          style={styles.linearGradient}
        >
          <Text style={styles.hanasLightText}>REGISTER</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
        <LinearGradient
          colors={[colors.primary, colors.secondary]}
          style={styles.linearGradient}
        >
          <Text style={styles.hanasLightText}>LOGIN</Text>
        </LinearGradient>
      </TouchableOpacity>
      <Text
        style={[styles.hanasDarkText, { marginTop: 15, fontWeight: "bold" }]}
        onPress={() => navigation.navigate("Dashboard")}
      >
        Skip for now
      </Text>
    </View>
  );
};

export default Landing;

import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import color from "../../config/colors";
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
          colors={[color.primary, color.secondary]}
          style={styles.linearGradient}
        >
          <Text style={styles.hanasLightText}>REGISTER</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
        <LinearGradient
          colors={[color.primary, color.secondary]}
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

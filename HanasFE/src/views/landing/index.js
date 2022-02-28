import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import Button from "@components/button";
import { colors } from "@config";
import styles from "./style";

const Landing = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageContainer}
        source={require("@images/hanasLogoSquared.png")}
      />
      <Button handleNavigate="Profile" title="REGISTER" />
      <Button handleNavigate="Login" title="LOGIN" />
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

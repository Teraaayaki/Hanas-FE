import React from "react";
import { Image, Text, View } from "react-native";

import Button from "@components/button";
import styles from "./style";
import { colors } from "@config";

const Landing = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageContainer}
        source={require("@images/hanasLogoSquared.png")}
      />
      <Button onPress={() => navigation.navigate("Profile")} title="REGISTER" />
      <Button onPress={() => navigation.navigate("Login")} title="LOGIN" />
      <Text
        style={[colors.hanasDarkText, { marginTop: 15, fontWeight: "bold" }]}
        onPress={() => navigation.navigate("Dashboard")}
      >
        Skip for now
      </Text>
    </View>
  );
};

export default Landing;

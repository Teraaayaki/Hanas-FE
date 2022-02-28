import React from "react";
import { Image, Text, View } from "react-native";

import Button from "@components/button";
import styles from "./style";

const Landing = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageContainer}
        source={require("@images/hanasLogoSquared.png")}
      />
      <Button title="REGISTER" />
      <Button title="LOGIN" />
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

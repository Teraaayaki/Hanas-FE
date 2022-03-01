import React from "react";
import { Image, Text, View } from "react-native";

import Button from "@components/Button";
import styles from "./style";

const Landing = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageContainer}
        source={require("@images/hanasLogoSquared.png")}
      />
      <Button
        onPress={() => navigation.navigate("RegisterClientWorker")}
        title="REGISTER"
      />
      <Button onPress={() => navigation.navigate("Login")} title="LOGIN" />
      <Text
        style={styles.text}
        onPress={() => navigation.navigate("Dashboard")}
      >
        Skip for now
      </Text>
    </View>
  );
};

export default Landing;

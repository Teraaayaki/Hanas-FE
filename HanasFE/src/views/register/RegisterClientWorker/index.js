import React from "react";
import { Image, Text, View } from "react-native";

import Button from "@components/Button";
import TextLink from "@components/TextLink";
import styles from "@screens/Landing/style";

const Landing = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageContainer}
        source={require("@images/hanasLogoSquared.png")}
      />
      <Text style={styles.text}>ARE YOU A?</Text>
      <Button
        onPress={() => navigation.navigate("RegisterNumber")}
        title="CLIENT"
      />
      <Button
        onPress={() => navigation.navigate("RegisterNumber")}
        title="SKILLED WORKER"
      />
      <TextLink
        title="Already have an account?"
        linkTitle="Login Here"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

export default Landing;

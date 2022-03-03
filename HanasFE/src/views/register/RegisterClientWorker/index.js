import React from "react";
import { Image, Text, View } from "react-native";
import Button from "@components/Button";
import TextLink from "@components/TextLink";
import { SafeAreaView } from "react-navigation";

import styles from "./style";


const Landing = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo}
            source={require("@images/hanasLogoSquared.png")}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.text}>ARE YOU A?</Text>
          <View style={styles.pinkButtonContainer}>
            <Button
              onPress={() => navigation.navigate("RegisterNumber")}
              title="CLIENT"
            />
          </View>
          <View style={styles.pinkButtonContainer}>
            <Button
              onPress={() => navigation.navigate("RegisterNumber")}
              title="SKILLED WORKER"
            />
          </View>
            
          
          
          <Text
            title="Already have an account?"
            linkTitle="Login Here"
            onPress={() => navigation.navigate("Login")}
          />
          <View style={styles.textContainer}>
            <TextLink style={styles.text} onPress={() => navigation.navigate("Landing")}>Cancel</TextLink>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Landing;

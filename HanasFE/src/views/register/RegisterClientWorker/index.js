import React from "react";
import { Image, Text, View, SafeAreaView } from "react-native";
import { useDispatch } from "react-redux";

import Button from "@components/Button";
import TextLink from "@components/TextLink";
import styles from "./style";
import { worker } from "@redux/actions/registerActions";

const Landing = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleSubmit = (isUserWorker) => {
    dispatch(worker(isUserWorker, navigation));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("@images/hanasLogoSquared.png")}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.text}>ARE YOU A?</Text>
          <View style={styles.pinkButtonContainer}>
            <Button onPress={() => handleSubmit(false)} title="CLIENT" />
          </View>
          <View style={styles.pinkButtonContainer}>
            <Button onPress={() => handleSubmit(true)} title="SKILLED WORKER" />
          </View>

          <TextLink
            title="Already have an account?"
            linkTitle="Login Here"
            onPress={() => navigation.navigate("Login")}
          />
          <View style={styles.textContainer}>
            <Text
              style={styles.text}
              onPress={() => navigation.navigate("Landing")}
            >
              Cancel
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Landing;

import * as React from "react";
import { Text, View, SafeAreaView, TextInput } from "react-native";
import Button from "@components/Button";
import TextLink from "@components/TextLink";

import styles from "./style";

export default function RegisterNumber({ navigation }) {
  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.title}>Register</Text>
      <View style={styles.h1Container}>
        <Text style={styles.h1}>Enter mobile number to create account</Text>
      </View>
      <View style={styles.h3Container}>
        <Text style={styles.h3}>We will send you a One Time Pin (OTP)</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputBox}>
          <View style={styles.iconContainer}></View>
          <TextInput style={styles.textInput} />
        </View>
        <Button title="SEND" onPress={() => navigation.navigate("Login")} />
        <TextLink
          title="Already have an account?"
          linkTitle="Login here"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </SafeAreaView>
  );
}

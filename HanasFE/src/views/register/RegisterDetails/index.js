import * as React from "react";
import { Text, View, SafeAreaView, TextInput } from "react-native";
import { Icon } from "react-native-elements";
import Button from "@components/Button";
import TextLink from "@components/TextLink";

import styles from "./style";

export default function RegisterNumber({ navigation }) {
  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.title}>Register Details</Text>
      <View style={styles.formContainer}>
        <View style={styles.inputBox}>
          <View style={styles.iconContainer}>
            <Icon
              name="mobile-alt"
              type="font-awesome-5"
              style={styles.icon}
              size={25}
            />
          </View>
          <TextInput
            style={styles.textInput}
            keyboardType={"number-pad"}
            placeholder={"0947xxxxxxx"}
            placeholderTextColor={"#AAA"}
          />
        </View>
        <Button
          title="SEND"
          onPress={() => navigation.navigate("RegisterNumber")}
        />
        <TextLink
          title="Already have an account?"
          linkTitle="Login here"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </SafeAreaView>
  );
}

import * as React from "react";
import { Text, View, SafeAreaView } from "react-native";
import Button from "@components/Button";
import TextLink from "@components/TextLink";
import IconField from "@components/form/IconField";

import styles from "./style";

export default function RegisterOTP({ navigation }) {
  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.title}>One Time Pin (OTP)</Text>
      <View style={styles.h1Container}>
        <Text style={styles.h1}>Enter mobile number to create account</Text>
      </View>
      <View style={styles.h3Container}>
        <Text style={styles.h3}>We will send you a One Time Pin (OTP)</Text>
      </View>
      <View style={styles.formContainer}>
        <IconField
          iconName="mobile-alt"
          iconType="font-awesome-5"
          iconSize={25}
          keyboardType={"number-pad"}
          placeholder={"0947xxxxxxx"}
        />
        <View style={{ height: 30 }}></View>
        <Button
          title="SEND"
          onPress={() => navigation.navigate("RegisterDetails")}
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

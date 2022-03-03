import * as React from "react";
import { Text, View, KeyboardAvoidingView } from "react-native";
import Button from "@components/button";
import BigLogo from "@components/logo/big";
import AccountField from "@components/form/accountField";
import PasswordField from "@components/form/passwordField";
import Label from "@components/form/label";
import TouchableText from "@components/touchableText";

import styles from "./style";
import { SafeAreaView } from "react-navigation";
import styles from "./style";

export default function Login({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView style={styles.body}>
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <BigLogo />
          </View>
          <View style={styles.formContainer}>
            <Label title="Mobile Number / Email" />
            <AccountField />

            <Label title="Password" />
            <PasswordField />
            <View style={styles.buttonContainer}>
              <Button
                onPress={() => navigation.navigate("Dashboard")}
                title="LOGIN"
              />
            </View>

            <View style={[styles.rowContainer, styles.pt3]}>
              <Text style={[styles.dark, styles.f13, styles.pr2]}>
                Don't have an account?
              </Text>
              <TouchableText
                text="Register here"
                onPress={() => navigation.navigate("Landing")}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

import * as React from "react";
import { Text, View, KeyboardAvoidingView } from "react-native";
import Button from "@components/Button";
import BigLogo from "@components/logo/Big";
import AccountField from "@components/form/AccountField";
import PasswordField from "@components/form/PasswordField";
import Label from "@components/form/Label";
import TouchableText from "@components/text/touchable/Secondary";

import styles from "./style";
import { SafeAreaView } from "react-navigation";

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
              <Text style={[styles.dark, styles.p, styles.pr2]}>
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

import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View, SafeAreaView, TextInput } from "react-native";

import styles from "@screens/Profile/style";

class Settings extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.body}>
        <Text style={styles.title}>Register</Text>
        <View style={styles.h1Container}>
          <Text style={styles.h1}>Enter mobile number to create account</Text>
        </View>
        <View style={styles.h3Container}>
          <Text style={styles.h3}>
            We will send you a One Time Password (OTP)
          </Text>
        </View>
        <View>
          <TextInput />
          <Button />
          <TextLink />
        </View>
      </SafeAreaView>
    );
  }
}

export default Settings;

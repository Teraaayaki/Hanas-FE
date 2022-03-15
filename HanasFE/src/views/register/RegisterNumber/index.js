import React from "react";
import { Text, View, SafeAreaView, TextInput } from "react-native";
import { Icon } from "react-native-elements";
import Button from "@components/Button";
import TextLink from "@components/TextLink";
import styles from "./style";

const RegisterNumber = ({ navigation }) => {
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
          <View style={styles.iconContainer}>
            <Icon name="mobile-alt" type="font-awesome-5" iconSize={25} />
          </View>
          <TextInput
            style={styles.textInput}
            keyboardType={"number-pad"}
            placeholder={"0947xxxxxxx"}
            placeholderTextColor={"#AAA"}
          />
        </View>

        <View style={{ height: 30 }}></View>
        <Button
          title="SEND"
          onPress={() => navigation.navigate("RegisterOTP")}
        />
        <View style={{ height: 30 }}>
          {show ? (
            <Text style={styles.text}>
              Mobile no. length should be 10 numbers
            </Text>
          ) : null}
        </View>
        <Button title="SEND" onPress={() => navigation.navigate(`${route}`)} />
        <TextLink
          title="Already have an account?"
          linkTitle="Login here"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </SafeAreaView>
  );
};

export default RegisterNumber;

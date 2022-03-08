import React, { useState, useRef } from "react";
import { Text, TextInput, View, SafeAreaView } from "react-native";
import Button from "@components/Button";
import TextLink from "@components/TextLink";

import styles from "./style";

export default function RegisterOTP({ navigation }) {
  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);

  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");

  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.title}>Verify Number</Text>
      <View style={styles.formContainer}>
        <View style={styles.pinGroupContainer}>
          <View style={styles.pinContainer}>
            <TextInput
              ref={pin1Ref}
              style={styles.pin}
              keyboardType={"number-pad"}
              placeholder={"X"}
              placeholderTextColor={"#AAA"}
              maxLength={1}
              onChange={(pin1) => {
                setPin1(pin1);
                if (pin1 !== "") {
                  pin2Ref.current.focus();
                } else if (pin1 == null) {
                  pin1Ref.current.focus();
                }
              }}
            />
          </View>
          <View style={styles.pinContainer}>
            <TextInput
              ref={pin2Ref}
              style={styles.pin}
              keyboardType={"number-pad"}
              placeholder={"X"}
              placeholderTextColor={"#AAA"}
              maxLength={1}
              onChange={(pin2) => {
                setPin2(pin2);
                if (pin2 !== "") {
                  pin3Ref.current.focus();
                }
              }}
            />
          </View>
          <View style={styles.pinContainer}>
            <TextInput
              ref={pin3Ref}
              style={styles.pin}
              keyboardType={"number-pad"}
              placeholder={"X"}
              placeholderTextColor={"#AAA"}
              maxLength={1}
              onChange={(pin3) => {
                setPin3(pin3);
                if (pin3 !== "") {
                  pin4Ref.current.focus();
                }
              }}
            />
          </View>
          <View style={styles.pinContainer}>
            <TextInput
              ref={pin4Ref}
              style={styles.pin}
              keyboardType={"number-pad"}
              placeholder={"X"}
              placeholderTextColor={"#AAA"}
              maxLength={1}
              onChange={(pin4) => {
                setPin4(pin4);
              }}
            />
          </View>
        </View>
        <TextLink
          title="Didn't receive the code?"
          linkTitle="Resend"
          onPress={() => navigation.navigate("Login")}
        />
        <View style={{ height: 80 }}></View>
        <Button
          title="SEND"
          onPress={() => navigation.navigate("RegisterDetails")}
        />
        <Text style={styles.errorMessage}>Enter mobile number again</Text>
      </View>
    </SafeAreaView>
  );
}

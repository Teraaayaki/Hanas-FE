import React, { useState } from "react";
import { Text, View, SafeAreaView } from "react-native";

import Button from "@components/Button";
import TextLink from "@components/TextLink";
import IconField from "@components/form/IconField";
import styles from "./style";

export default function RegisterNumber({ navigation }) {
  const [number, setNumber] = useState("");
  const [route, setRoute] = useState("RegisterNumber");
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    if (e.length === 10) {
      setShow(false);
      setRoute("RegisterOTP");
    } else {
      setShow(true);
    }
    setNumber(e);
  };

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
        <IconField
          iconName="mobile-alt"
          iconType="font-awesome-5"
          iconSize={25}
          keyboardType={"number-pad"}
          placeholder={"+947xxxxxxx"}
          value={number}
          onChangeText={handleChange}
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
}

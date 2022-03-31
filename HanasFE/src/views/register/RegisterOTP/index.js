import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Button from "@components/Button";
import TextLink from "@components/TextLink";
import Loading from "@components/Loading";
import styles from "./style";

export default function RegisterOTP({ navigation }) {
  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");
  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);
  const dispatch = useDispatch();

  const { loading, success, number } = useSelector(
    (state) => state.userRegister
  );

  const showToast = () => {
    Toast.show({
      type: "error",
      text1: "Login Error",
      text2: error,
      position: "bottom",
      onHide: () => dispatch(resetError()),
    });
  };

  const handleSubmit = () => {
    console.log(`${pin1}${pin2}${pin3}${pin4}`);
    // dispatch(verifyNumber(9055, number, navigation));
  };

  useEffect(() => {}, [success]);

  return (
    <SafeAreaView style={styles.body}>
      {loading ? (
        <Loading title="Verifying Number..." />
      ) : (
        <>
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
                  value={pin1}
                  onChangeText={(pin1) => {
                    setPin1(pin1);
                    if (pin1 !== "") {
                      pin2Ref.current.focus();
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
                  value={pin2}
                  onKeyPress={({ nativeEvent }) => {
                    if (nativeEvent.key === "Backspace") {
                      if (pin2 == "") {
                        // pin1Ref.current.clear();
                        pin1Ref.current.focus();
                      }
                    }
                  }}
                  onChangeText={(pin2) => {
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
                  value={pin3}
                  maxLength={1}
                  onKeyPress={({ nativeEvent }) => {
                    if (nativeEvent.key === "Backspace") {
                      if (pin3 == "") {
                        // pin2Ref.current.clear();
                        pin2Ref.current.focus();
                      }
                    }
                  }}
                  onChangeText={(pin3) => {
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
                  value={pin4}
                  onKeyPress={({ nativeEvent }) => {
                    if (nativeEvent.key === "Backspace") {
                      if (pin4 == "") {
                        // pin3Ref.current.clear();
                        pin3Ref.current.focus();
                      }
                    }
                  }}
                  onChangeText={(pin4) => {
                    setPin4(pin4);
                  }}
                />
              </View>
            </View>

            <TextLink title="Didn't receive the code?" linkTitle="Resend" />

            <View style={{ height: 80 }}></View>
            <Button title="SEND" onPress={handleSubmit} />
            <TouchableOpacity
              onPress={() => navigation.navigate("RegisterNumber")}
            >
              <Text style={styles.linkText}>Enter mobile number again</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

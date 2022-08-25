import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import axios from "@axios";
import { getItem } from "@helpers/asyncStorage";
import Button from "@components/Button";
import TextLinkTimer from "@components/TextLinkTimer";
import styles from "./style";
import { showToast, ToastComponent } from "@helpers/toast";

export default function OtpVerification({ navigation, route }) {
  const { email } = route.params;
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [key, setKey] = useState(0);

  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");
  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);

  const successToast = () =>
    showToast(
      "success",
      `Sent a verification code to ${email}`,
      "Please check your inbox"
    );

  const handleSubmit = () => {
    if (loading) {
      return;
    }

    //prettier-ignore
    if ((pin1 === "") || (pin2 === "") || (pin3 === "") || (pin4 === "")) {
      setErrorMessage(true);
      return
    }

    // console.log(`${pin1}${pin2}${pin3}${pin4}`);
    const otp = parseInt(`${pin1}${pin2}${pin3}${pin4}`);
    setErrorMessage(false);

    setLoading(true);
    axios
      .post("/api/auth/forgot-pass-otp", { otp, email })
      .then(() => {
        setLoading(false);
        navigation.navigate("ChangePassword", { email });
      })
      .catch((err) => {
        setLoading(false);
        showToast("error", err.response?.data?.error || "Error", err.message);
      });
  };

  const handleResendCode = useCallback(() => {
    setKey(key === 0 ? key + 1 : key - 1);

    axios
      .post("/api/auth/forgot-pass-email", { email, resend: true })
      .then(() => {
        successToast();
      })
      .catch((err) => {
        showToast("error", err.response?.data?.error || "Error", err.message);
      });
  }, [key, setKey]);

  useEffect(() => {
    pin1Ref.current.focus();
    successToast();
  }, []);

  return (
    <SafeAreaView style={styles.body}>
      <>
        <Text style={styles.title}>Verify Email (One-Time Pin)</Text>
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
          <TextLinkTimer
            title="Didn't receive the code?"
            linkTitle="Resend Code"
            keyValue={key}
            onPress={handleResendCode}
          />

          <View style={styles.errContainer}>
            {errorMessage && (
              <Text style={styles.errMessage}>Please input your OTP</Text>
            )}
          </View>
          <Button title="SEND" loading={loading} onPress={handleSubmit} />
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterNumber")}
          >
            <Text style={styles.linkText}>Enter email again</Text>
          </TouchableOpacity>
        </View>
      </>

      <ToastComponent />
    </SafeAreaView>
  );
}

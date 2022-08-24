import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import axios from "@axios";
import { getItem } from "@helpers/asyncStorage";
import Button from "@components/Button";
import TextLink from "@components/TextLinkTimer";
import styles from "./style";
import { resetError, verifyNumber } from "@redux/actions/registerActions";
import { showToast, ToastComponent } from "@helpers/toast";

export default function RegisterOTP({ navigation }) {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(false);
  const { loading, number, error } = useSelector((state) => state.userRegister);
  const [key, setKey] = useState(0);

  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");
  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);

  //prettier-ignore
  const handleSubmit = () => {
    if(loading){
      return
    }

    // console.log(`${pin1}${pin2}${pin3}${pin4}`);
    if ((pin1 === "") || (pin2 === "") || (pin3 === "") || (pin4 === "")) {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);
      dispatch(
        verifyNumber(`${pin1}${pin2}${pin3}${pin4}`, number, navigation)
      );
    }
  };

  const handleResendCode = useCallback(() => {
    let token = getItem("token").then((token) => token);
    setKey(key === 0 ? key + 1 : key - 1);
    axios
      .post(
        "api/auth/resend-code",
        { number },
        { headers: { authorization: `Bearer ${token}` } }
      )
      .then(
        (response) =>
          response.data?.success &&
          showToast(
            "success",
            `Resent a verification code to 0${number}`,
            "Please check your phone again"
          )
      )
      .catch((err) =>
        showToast("error", err, "Please try again", () =>
          dispatch(resetError())
        )
      );
  }, [key, setKey]);

  useEffect(() => {
    pin1Ref.current.focus();
    dispatch(resetError());
    showToast(
      "success",
      `Sent a verification code to 0${number}`,
      "Please check your phone"
    );
  }, []);

  useEffect(() => {
    if (typeof error !== "undefined") {
      pin4Ref.current.focus();
      showToast("error", error, "Please try again", () =>
        dispatch(resetError())
      );
    }
  }, [error]);

  return (
    <SafeAreaView style={styles.body}>
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
          <TextLink
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
            <Text style={styles.linkText}>Enter mobile number again</Text>
          </TouchableOpacity>
        </View>
      </>

      <ToastComponent />
    </SafeAreaView>
  );
}

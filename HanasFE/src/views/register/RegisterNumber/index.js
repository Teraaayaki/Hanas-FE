import React, { useEffect } from "react";
import { ActivityIndicator, Text, View, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";

import { registerNumber } from "@redux/actions/registerActions";
import Button from "@components/Button";
import TextLink from "@components/TextLink";
import IconField from "@components/form/IconField";
import styles from "./style";
import { resetError } from "@redux/actions/registerActions";
import { showToast, ToastComponent } from "@helpers/toast";
import { colors } from "@constants";

const numberSchema = yup.object().shape({
  number: yup
    .string()
    .matches(/^(9)[0-9]+$/, "Please input a valid number +63 (PH) ")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits")
    .required("Please input your number."),
});

export default function RegisterNumber({ navigation }) {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.userRegister);

  const handleSubmit = ({ number }) => {
    if (typeof error === "undefined") {
      dispatch(registerNumber(number, navigation));
    }
  };

  useEffect(() => {
    console.log("Register Number Error is: ", error);
    if (typeof error !== "undefined") {
      showToast("error", "Invalid Number", error, () => dispatch(resetError()));
    }
  }, [error]);

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
        <Formik
          validationSchema={numberSchema}
          initialValues={{ number: "" }}
          onSubmit={(value) => handleSubmit(value)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <IconField
                iconName="mobile-alt"
                iconType="font-awesome-5"
                iconSize={25}
                keyboardType={"number-pad"}
                placeholder={"947xxxxxxx"}
                value={values.number}
                onChangeText={handleChange("number")}
                onBlur={handleBlur("number")}
                error={errors.number && touched.number ? true : null}
                mobileNum={true}
              />
              <View style={styles.errorContainer}>
                {errors.number && touched.number && (
                  <Text style={styles.text}>{errors.number}</Text>
                )}
              </View>
              <Button title="SEND" onPress={handleSubmit} />
            </>
          )}
        </Formik>

        {loading && (
          <View style={styles.spinner}>
            <ActivityIndicator size="large" color={colors.secondary} />
          </View>
        )}
        <TextLink
          title="Already have an account?"
          linkTitle="Login here"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
      <ToastComponent />
    </SafeAreaView>
  );
}

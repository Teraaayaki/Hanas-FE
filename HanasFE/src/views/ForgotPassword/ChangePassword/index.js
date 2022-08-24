import { View, Text, ScrollView, KeyboardAvoidingView } from "react-native";
import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";

import styles from "./style";
import IconField from "@components/form/IconField";
import Button from "@components/Button";
import { showToast, ToastComponent } from "@helpers/toast";

const password_details = {
  new_pass: "",
  confirm_pass: "",
};

const PasswordSchema = yup.object().shape({
  new_pass: yup
    .string()
    .required("Please enter your new password")
    .matches(
      /^.*(?=.{8,})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, and one number"
    ),
  confirm_pass: yup
    .string()
    .required("Confirm your new password")
    .matches(
      /^.*(?=.{8,})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, and one number"
    ),
});

const EditPassword = ({ navigation, route }) => {
  const { email } = route.params;
  const handleSubmit = (values) => {
    console.log("submitted!");
  };

  useEffect(() => {
    if (false) {
      showToast(
        "success",
        "Successfully Changed Password",
        "You will receive an email for the confirmation",
        () => dispatch(resetSuccess())
      );
    }
  }, []);

  return (
    <View
      style={[styles.body, styles.alignCenter, styles.justifyContentCenter]}
    >
      <KeyboardAvoidingView style={[styles.w66]}>
        <Formik
          initialValues={password_details}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={PasswordSchema}
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
              <ScrollView>
                <Text
                  style={[
                    styles.textCenter,
                    styles.h1,
                    styles.bold,
                    styles.mb5,
                    styles.pb5,
                  ]}
                >
                  Change Password for {email}
                </Text>
                <View style={[styles.my5, styles.py5]}>
                  <Text style={[styles.bold, styles.mt4, styles.mb3]}>
                    New Password
                  </Text>
                  <IconField
                    iconName="lock"
                    iconType="material-community-icons"
                    iconSize={25}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoComplete={"password"}
                    placeholder={"••••••••"}
                    value={values.new_pass}
                    error={errors.new_pass && touched.new_pass ? true : null}
                    onBlur={handleBlur("new_pass")}
                    onChangeText={handleChange("new_pass")}
                  />
                  {errors.new_pass && touched.new_pass && (
                    <Text style={styles.error}>{errors.new_pass}</Text>
                  )}
                  <Text style={[styles.bold, styles.mt4, styles.mb3]}>
                    Confirm New Password
                  </Text>
                  <IconField
                    iconName="lock"
                    iconType="material-community-icons"
                    iconSize={25}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoComplete={"password"}
                    placeholder={"••••••••"}
                    value={values.confirm_pass}
                    error={
                      errors.confirm_pass && touched.confirm_pass ? true : null
                    }
                    onBlur={handleBlur("confirm_pass")}
                    onChangeText={handleChange("confirm_pass")}
                  />
                  {errors.confirm_pass && touched.confirm_pass && (
                    <Text style={styles.error}>{errors.confirm_pass}</Text>
                  )}
                </View>
                <View style={[styles.mt5, styles.pt5]}>
                  <Button title="Confirm" onPress={handleSubmit} />
                </View>
              </ScrollView>
            </>
          )}
        </Formik>
      </KeyboardAvoidingView>
      <ToastComponent />
    </View>
  );
};

export default EditPassword;

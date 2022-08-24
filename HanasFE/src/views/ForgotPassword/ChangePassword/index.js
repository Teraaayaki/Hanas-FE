import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";

import styles from "./style";
import IconField from "@components/form/IconField";
import Button from "@components/Button";
import { showToast, ToastComponent } from "@helpers/toast";
import useAlertBackHandler from "@hooks/useAlertBackHandler";
import axios from "@helpers/axios";
import { getItem } from "@helpers/asyncStorage";

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
    .required("Please retype your password.")
    .oneOf([yup.ref("new_pass")], "Your passwords do not match."),
});

const ChangePassword = ({ navigation, route }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [prevPage, setPrevPage] = useAlertBackHandler(
    undefined,
    "You have not changed your password. You will lose your changes. Are you sure you want to continue?"
  );
  const { email } = route.params;

  const handleSubmit = ({ new_pass, confirm_pass }) => {
    if (loading) {
      return;
    }

    setLoading(true);

    axios
      .patch("/api/auth/forgot-pass-change", { email, new_pass, confirm_pass })
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setTimeout(() => {
          navigation.navigate("Login");
        }, 3000);
      })
      .catch((err) => {
        setLoading(false);
        setSuccess(false);
        showToast("error", err.response?.data?.error || "Error", err.message);
      });
  };

  useEffect(() => {
    setPrevPage("EmailForm");
  }, []);

  if (success)
    return (
      <View
        style={[styles.body, styles.alignCenter, styles.justifyContentCenter]}
      >
        <View>
          <Image
            style={styles.logo}
            source={require("@images/hanasLogoSquared.png")}
          />
        </View>

        <Text
          style={[
            styles.textCenter,
            styles.h1,
            styles.bold,
            styles.mb5,
            styles.pb5,
          ]}
        >
          Succesfully Changed Password for {email}
        </Text>
        <Text style={[styles.textCenter, styles.h2, styles.mb5, styles.pb5]}>
          You will be automatically redirected.{"\n"}Just sit back and Relax
        </Text>
      </View>
    );

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
                  <Button
                    title="Confirm"
                    loading={loading}
                    onPress={handleSubmit}
                  />
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

export default ChangePassword;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  Text,
  Image,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import Button from "@components/Button";
import TextLink from "@components/TextLink";
import { userLogin } from "@redux/actions/authActions";
import styles from "./style";
import { SafeAreaView } from "react-navigation";
import { showToast, ToastComponent } from "@helpers/toast";

const initialValues = {
  email: "",
  password: "",
};

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter your email")
    .email("Invalid Email"),
  password: yup.string().required("Please enter your password"),
  // .matches(
  //   /^.*(?=.{8,})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
  //   "Password must contain at least 8 characters, one uppercase, and one number"
  // ),
});

export default function Login({ navigation }) {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.userLogin);

  const handleSubmit = ({ email, password }) => {
    dispatch(userLogin(navigation, email, password));
    if (error) {
      showToast("error", "Login Error", error, () =>
        dispatch(userLogin(navigation))
      );
    }
  };

  useEffect(() => {
    if (typeof error !== "undefined") {
      showToast("error", "Login Error", error, () =>
        dispatch(userLogin(navigation))
      );
    }
  }, [error]);

  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView style={styles.body}>
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("@images/hanasLogoSquared.png")}
            />
          </View>
          <View style={styles.formContainer}>
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => handleSubmit(values)}
              validationSchema={LoginSchema}
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
                  <View style={styles.labelContainer}>
                    <Text style={styles.label}>Email</Text>
                  </View>
                  <TextInput
                    style={styles.input}
                    autoComplete={"email"}
                    autoCapitalize="none"
                    keyboardType={"email-address"}
                    textContentType={"emailAddress"}
                    placeholder={"johndoe@gmail.com"}
                    placeholderTextColor={"#AAA"}
                    value={values.email}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                  />
                  {errors.email && touched.email && (
                    <Text style={styles.text}>{errors.email}</Text>
                  )}
                  <View style={styles.labelContainer}>
                    <Text style={styles.label}>Password</Text>
                  </View>
                  <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoComplete={"password"}
                    placeholder={"••••••••"}
                    value={values.password}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                  />
                  {errors.password && touched.password && (
                    <Text style={styles.text}>{errors.password}</Text>
                  )}
                  <View style={styles.buttonContainer}>
                    <Button
                      onPress={handleSubmit}
                      loading={loading}
                      title="LOGIN"
                    />
                  </View>
                </>
              )}
            </Formik>

            <TextLink
              title="Don't have an account?"
              linkTitle="Register here"
              onPress={() => navigation.navigate("RegisterClientWorker")}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
      <ToastComponent />
    </SafeAreaView>
  );
}

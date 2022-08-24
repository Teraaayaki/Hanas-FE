import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View, SafeAreaView } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import Button from "@components/Button";
import TextLink from "@components/TextLink";
import IconField from "@components/form/IconField";
import styles from "./style";
import { showToast, ToastComponent } from "@helpers/toast";

const emailSchema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter your email")
    .email("Invalid Email"),
});

export default function RegisterNumber({ navigation }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = ({ email }) => {
    console.log("Submit Email!", email);
    navigation.navigate("OtpVerification", { email });
  };

  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.title}>Forgot Password</Text>
      <View style={styles.h1Container}>
        <Text style={styles.h1}>Please enter your email</Text>
      </View>
      <View style={styles.h3Container}>
        <Text style={styles.h3}>We will send you a One Time Pin (OTP)</Text>
      </View>
      <View style={styles.formContainer}>
        <Formik
          validationSchema={emailSchema}
          initialValues={{ email: "" }}
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
                iconName="envelope"
                iconType="font-awesome-5"
                iconSize={25}
                placeholder={"juandelacruz@jpg.com"}
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                error={errors.email && touched.email ? true : null}
              />
              <View style={styles.errorContainer}>
                {errors.email && touched.email && (
                  <Text style={styles.text}>{errors.email}</Text>
                )}
              </View>
              <Button title="SEND" loading={loading} onPress={handleSubmit} />
            </>
          )}
        </Formik>

        <TextLink
          title="Go Back to Login"
          linkTitle="Click here"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
      <ToastComponent />
    </SafeAreaView>
  );
}

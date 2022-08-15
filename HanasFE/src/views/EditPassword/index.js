import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";

import { getItem } from "@helpers/asyncStorage";
import styles from "./style";
import IconField from "@components/form/IconField";
import Button from "@components/Button";
import {
  editPassword,
  resetSuccess,
  resetError,
} from "@redux/actions/editPasswordActions";
import { showToast, ToastComponent } from "@helpers/toast";
import { colors } from "@constants";
import useAlertBackHandler from "@hooks/useAlertBackHandler";

const password_details = {
  old_pass: "",
  new_pass: "",
  confirm_pass: "",
};

const PasswordSchema = yup.object().shape({
  old_pass: yup
    .string()
    .required("Please enter your current password")
    .matches(
      /^.*(?=.{8,})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, and one number",
    ),
  new_pass: yup
    .string()
    .required("Please enter your new password")
    .matches(
      /^.*(?=.{8,})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, and one number",
    ),
  confirm_pass: yup
    .string()
    .required("Confirm your new password")
    .matches(
      /^.*(?=.{8,})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, and one number",
    ),
});

const EditPassword = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [isWorker, setIsWorker] = useState(false);
  const { user } = useSelector((state) => state.userDetails);
  const [prevPage, setPrevPage] = useAlertBackHandler();
  const { success, error, loading } = useSelector((state) => state.editPassword);

  const handleSubmit = (values) => {
    const Data = {
      values,
      _id: user.id,
      email: user.email,
    };

    dispatch(editPassword(Data));
  };

  useEffect(async () => {
    const isWorkerToken = JSON.parse(await getItem("is_worker"));
    setIsWorker(isWorkerToken);

    if (isWorkerToken) {
      setPrevPage("Profile");
    } else {
      setPrevPage("ProfileClient");
    }
  }, []);

  useEffect(() => {
    console.log("SUCCESS", success);

    if (success) {
      showToast(
        "success",
        "Successfully Changed Password",
        "You will receive an email for the confirmation",
        () => dispatch(resetSuccess()),
      );
      if (!isWorker) {
        setTimeout(() => {
          navigation.navigate(prevPage);
        }, 5000);
      } else if (isWorker) {
        setTimeout(() => {
          navigation.navigate(prevPage);
        }, 5000);
      }
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      showToast("error", "Something went wrong", error, () => dispatch(resetError()));
    }
  }, [error]);

  return (
    <View style={[styles.body, styles.alignCenter, styles.justifyContentCenter]}>
      <KeyboardAvoidingView style={[styles.w66]}>
        <Formik
          initialValues={password_details}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={PasswordSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
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
                  Edit Password
                </Text>
                <View style={[styles.my5, styles.py5]}>
                  <Text style={[styles.bold, styles.mb3]}>Old Password</Text>
                  <IconField
                    iconName="lock"
                    iconType="material-community-icons"
                    iconSize={25}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoComplete={"password"}
                    placeholder={"••••••••"}
                    value={values.old_pass}
                    error={errors.old_pass && touched.old_pass ? true : null}
                    onBlur={handleBlur("old_pass")}
                    onChangeText={handleChange("old_pass")}
                  />
                  {errors.old_pass && touched.old_pass && (
                    <Text style={styles.error}>{errors.old_pass}</Text>
                  )}
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
                    error={errors.confirm_pass && touched.confirm_pass ? true : null}
                    onBlur={handleBlur("confirm_pass")}
                    onChangeText={handleChange("confirm_pass")}
                  />
                  {errors.confirm_pass && touched.confirm_pass && (
                    <Text style={styles.error}>{errors.confirm_pass}</Text>
                  )}
                </View>
                {loading && (
                  <View style={styles.spinner}>
                    <ActivityIndicator size="large" color={colors.secondary} />
                  </View>
                )}
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

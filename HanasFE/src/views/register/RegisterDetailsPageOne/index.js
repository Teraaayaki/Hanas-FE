import React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import Button from "@components/Button";
import IconField from "@components/form/IconField";
import styles from "./style";

const details = {
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  password: "",
  suffix: "",
};

const RegisterSchema = yup.object().shape({
  firstName: yup.string().required("Please enter your first name"),
  middleName: yup.string().required("Required"),
  lastName: yup.string().required("Please enter your last name"),
  suffix: yup.string(),
  email: yup
    .string()
    .required("Please enter your email")
    .email("Invalid Email"),
  password: yup
    .string()
    .required("Please enter your password")
    .matches(
      /^.*(?=.{8,})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, and one number"
    ),
});

export default function RegisterDetailsPageOne({ navigation }) {
  const handleSubmit = (values) => {
    console.log(values);
    navigation.navigate("RegisterDetailsPageTwo");
  };

  return (
    <SafeAreaView style={styles.body}>
      <Formik
        initialValues={details}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={RegisterSchema}
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
            <View style={styles.titleContainer}>
              <Text style={styles.title}>User Details</Text>
            </View>
            <ScrollView
              style={styles.formContainer}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Email</Text>
              </View>
              <IconField
                iconName="mail"
                iconType="ionicons"
                iconSize={25}
                keyboardType={"default"}
                placeholder={"sample@email.com"}
                autoCapitalize="none"
                value={values.email}
                error={errors.email && touched.email ? true : null}
                onBlur={handleBlur("email")}
                onChangeText={handleChange("email")}
              />
              {errors.email && touched.email && (
                <Text style={styles.error}>{errors.email}</Text>
              )}
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Password</Text>
              </View>
              <IconField
                iconName="lock"
                iconType="material-community-icons"
                iconSize={25}
                keyboardType={"default"}
                placeholder={"************"}
                autoCapitalize="none"
                secureTextEntry={true}
                value={values.password}
                onBlur={handleBlur("password")}
                error={errors.password && touched.password ? true : null}
                onChangeText={handleChange("password")}
              />
              {errors.password && touched.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}
              <View style={styles.labelContainer}>
                <Text style={styles.label}>First Name</Text>
              </View>
              <IconField
                iconName="person-outline"
                iconType="ionicons"
                iconSize={25}
                keyboardType={"default"}
                placeholder={"John"}
                value={values.firstName}
                onBlur={handleBlur("firstName")}
                error={errors.firstName && touched.firstName ? true : null}
                onChangeText={handleChange("firstName")}
              />
              {errors.firstName && touched.firstName && (
                <Text style={styles.error}>{errors.firstName}</Text>
              )}
              <View style={styles.inputRow}>
                <View style={styles.rowContainer}>
                  <View style={styles.rowLabelContainer}>
                    <Text style={styles.label}>Middle Name</Text>
                  </View>
                  <IconField
                    iconName="person"
                    iconType="ionicons"
                    iconSize={25}
                    keyboardType={"default"}
                    placeholder={"Lumberg"}
                    value={values.middleName}
                    onBlur={handleBlur("middleName")}
                    error={
                      errors.middleName && touched.middleName ? true : null
                    }
                    onChangeText={handleChange("middleName")}
                  />
                  {errors.middleName && touched.middleName && (
                    <Text style={styles.error}>{errors.middleName}</Text>
                  )}
                </View>

                <View style={styles.rowContainer2}>
                  <View style={styles.rowLabelContainer}>
                    <Text style={styles.label}>Suffix</Text>
                  </View>
                  <IconField
                    iconName="people-outline"
                    iconType="ionicons"
                    iconSize={25}
                    keyboardType={"default"}
                    placeholder={"Jr. , III"}
                    value={values.suffix}
                    onBlur={handleBlur("suffix")}
                    error={errors.suffix && touched.suffix ? true : null}
                    onChangeText={handleChange("suffix")}
                  />
                </View>
              </View>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Last Name</Text>
              </View>
              <IconField
                iconName="person-outline"
                iconType="ionicons"
                iconSize={25}
                keyboardType={"default"}
                placeholder={"Doe"}
                value={values.lastName}
                onBlur={handleBlur("lastName")}
                error={errors.lastName && touched.lastName ? true : null}
                onChangeText={handleChange("lastName")}
              />
              {errors.lastName && touched.lastName && (
                <Text style={styles.error}>{errors.lastName}</Text>
              )}
              <View style={styles.buttonContainer}>
                <Button title="NEXT" onPress={handleSubmit} />
              </View>
            </ScrollView>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
}

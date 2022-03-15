import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, KeyboardAvoidingView, Text } from "react-native";
import Button from "@components/Button";
import BigLogo from "@components/logo/Big";
import AccountField from "@components/form/AccountField";
import PasswordField from "@components/form/PasswordField";
import Label from "@components/form/Label";
import TextLink from "@components/TextLink";
import { userLogin } from "@redux/actions/authActions";
import styles from "./style";
import { SafeAreaView } from "react-navigation";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { success, error } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (success) {
      navigation.navigate("Dashboard");
    }
  }, [success, error]);

  const handleSubmit = () => {
    dispatch(userLogin(email, password));
  };

  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView style={styles.body}>
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <BigLogo />
          </View>
          <View style={styles.formContainer}>
            <Label title="Mobile Number / Email" />
            <AccountField value={email} onChangeText={(e) => setEmail(e)} />

            <Label title="Password" />
            <PasswordField
              value={password}
              onChangeText={(e) => setPassword(e)}
            />
            {error && <Text style={styles.text}>{error}</Text>}
            <View style={styles.buttonContainer}>
              <Button onPress={handleSubmit} title="LOGIN" />
            </View>

            <TextLink
              title="Don't have an account?"
              linkTitle="Register here"
              onPress={() => navigation.navigate("RegisterClientWorker")}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

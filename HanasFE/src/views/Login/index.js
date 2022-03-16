import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  Text,
  Image,
} from "react-native";
import Button from "@components/Button";
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
            <Image
              style={styles.logo}
              source={require("@images/hanasLogoSquared.png")}
            />
          </View>
          <View style={styles.formContainer}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Mobile Number / Email</Text>
            </View>
            <TextInput
              style={styles.input}
              autoComplete={"email"}
              autoCapitalize="none"
              keyboardType={"email-address"}
              textContentType={"emailAddress"}
              placeholder={"0947xxxxxxx / johndoe@gmail.com"}
              placeholderTextColor={"#AAA"}
              value={email}
              onChangeText={(e) => setEmail(e)}
            />

            <View style={styles.labelContainer}>
              <Text style={styles.label}>Password</Text>
            </View>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              autoCapitalize="none"
              autoComplete={"password"}
              placeholder={"••••••••"}
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

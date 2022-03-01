import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput, Text, Image, View, TouchableOpacity } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Button from "@components/button";
import TextLink from "@components/textlink";
import styles from "./style";
import { SafeAreaView } from "react-navigation";

export default function Login({ navigation }) {
  return (
    <SafeAreaView style={styles.body}>
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
            keyboardType={"email-address"}
            textContentType={"emailAddress"}
            placeholder={"0947xxxxxxx / johndoe@gmail.com"}
            placeholderTextColor={"#AAA"}
          />
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Password</Text>
          </View>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            autoComplete={"password"}
            placeholder={"••••••••"}
          />
          <Button
            onPress={() => navigation.navigate("Landing")}
            title="LOGIN"
          />

          <TextLink
            title="Don't have an account?"
            linkTitle="Click Here"
            onPress={() => navigation.navigate("RegisterClientWorker")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

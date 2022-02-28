import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput, Text, Image, View, TouchableOpacity } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Button from "@components/button";

import styles from "./style";
import { SafeAreaView } from "react-navigation";

export default function LogIn(props) {
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

          {/* <View style={styles.width100}> */}
          {/* <TouchableOpacity
              onPress={() => props.navigation.navigate("Dashboard")}
            >
              <LinearGradient
                colors={["#e69fb4", "#ff5e84"]}
                style={styles.hanasPinkButton}
              >
                <Text style={[styles.white, styles.f13]}>LOGIN</Text>
              </LinearGradient>
            </TouchableOpacity> */}
          <Button title="LOGIN" />
          {/* </View> */}

          <View style={[styles.rowContainer, styles.pt3]}>
            <Text style={[styles.secondary, styles.f13, styles.pr2]}>
              Don't have an account?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Register")}
            >
              <Text style={[styles.pink, styles.f13]}>Register here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

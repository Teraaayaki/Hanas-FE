import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  TextInput,
  Text,
  Image,
  Button,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import styles from "../login/style";
import { SafeAreaView } from "react-navigation";
import style from "../login/style";

export default function LogIn(props) {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.container}>
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
            style={style.input}
            autoComplete={"email"}
            keyboardType={"email-address"}
            textContentType={"emailAddress"}
            placeholder={"0947xxxxxxx / johndoe@gmail.com"}
            placeholderTextColor={"#AAA"}
          />

          <View style={styles.labelContainer}>
            <Text style={styles.label}>Password</Text>
          </View>
          <TextInput style={style.input} />
          <Pressable
            style={styles.hanasPinkButton}
            onPress={() => props.navigation.navigate("LogIn")}
          >
            <Text style={style.white}>LOGIN</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

import * as React from "react";
import { TextInput, Text, Image, View, TouchableOpacity } from "react-native";
import Button from "@components/button";
import BigLogo from "@components/bigLogo";

import styles from "./style";
import { SafeAreaView } from "react-navigation";

export default function Register({ navigation }) {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.content}></View>
    </SafeAreaView>
  );
}

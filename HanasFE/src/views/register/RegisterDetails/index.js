import * as React from "react";
import { Text, View, SafeAreaView, TextInput } from "react-native";
import Button from "@components/Button";
import TextLink from "@components/TextLink";
import IconField from "@components/form/IconField";

import styles from "./style";

export default function RegisterNumber({ navigation }) {
  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.title}>User Details</Text>
      <View style={styles.formContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>First Name</Text>
        </View>
        <IconField
          iconName="person-outline"
          iconType="ionicons"
          iconSize={25}
          keyboardType={"number-pad"}
          placeholder={"0947xxxxxxx"}
        />
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Last Name</Text>
        </View>
        <IconField
          iconName="person-outline"
          iconType="ionicons"
          iconSize={25}
          keyboardType={"number-pad"}
          placeholder={"0947xxxxxxx"}
        />
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Date of Birth</Text>
        </View>
        <IconField
          iconName="calendar"
          iconType="entypo"
          iconSize={25}
          keyboardType={"number-pad"}
          placeholder={"0947xxxxxxx"}
        />
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Address</Text>
        </View>
        <IconField
          iconName="location-pin"
          iconType="material-icons"
          iconSize={25}
          keyboardType={"number-pad"}
          placeholder={"0947xxxxxxx"}
        />
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Password</Text>
        </View>
        <IconField
          iconName="lock"
          iconType="material-community-icons"
          iconSize={25}
          keyboardType={"number-pad"}
          placeholder={"0947xxxxxxx"}
        />
        <View style={{ height: 20 }}></View>
        <Button
          title="SEND"
          onPress={() => navigation.navigate("RegisterNumber")}
        />
      </View>
    </SafeAreaView>
  );
}

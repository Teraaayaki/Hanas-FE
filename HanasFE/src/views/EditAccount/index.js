import { View, Text, ScrollView, KeyboardAvoidingView } from "react-native";
import React from "react";
import styles from "./style";
import IconField from "@components/form/IconField";
import Button from "@components/Button";

const EditAccount = () => {
  return (
    <View
      style={[styles.body, styles.alignCenter, styles.justifyContentCenter]}
    >
      <KeyboardAvoidingView style={[styles.w66]}>
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
            Edit Account Info
          </Text>
          <View style={[styles.my5, styles.py5]}>
            <Text style={[styles.bold, styles.mb3]}>Address</Text>
            <IconField
              iconName="location-pin"
              iconType="material-community-icons"
              iconSize={25}
              autoCapitalize="none"
              autoComplete={"password"}
              placeholder={"Tungkil, Minglanilla, Cebu"}
            />
            <Text style={[styles.bold, styles.mt4, styles.mb3]}>Email</Text>
            <IconField
              iconName="email"
              iconType="entypo"
              iconSize={25}
              autoCapitalize="none"
              autoComplete={"password"}
              placeholder={"email.address@gmail.com"}
            />
            <Text style={[styles.bold, styles.mt4, styles.mb3]}>
              Mobile Number
            </Text>
            <IconField
              iconName="smartphone"
              iconType="material-icon"
              iconSize={25}
              autoCapitalize="none"
              autoComplete={"password"}
              placeholder={"XXXOOOXXXX"}
              mobileNum
            />
          </View>
          <View style={[styles.mt5, styles.pt5]}>
            <Button title="Confirm" onPress={() => {}} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default EditAccount;

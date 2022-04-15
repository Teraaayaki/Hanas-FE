import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import styles from "./style";
import IconField from "@components/form/IconField";
import Button from "@components/Button";

const EditPassword = () => {
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
            />
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
            />
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

export default EditPassword;

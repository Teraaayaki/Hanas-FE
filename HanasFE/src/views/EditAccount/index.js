import { View, Text, ScrollView, KeyboardAvoidingView } from "react-native";
import React, { useState, useEffect } from "react";

import styles from "./style";
import IconField from "@components/form/IconField";
import Button from "@components/Button";
import CircularImage from "@components/CircularImage";

const EditAccount = ({ navigation, route }) => {
  const { user_id, email, address, profile_pic } = route.params;
  // const [address, setAddress] = useState("");

  useEffect(() => {
    console.log(user_id, email, address, profile_pic);
  }, []);

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
          <View style={[styles.alignCenter]}>
            <CircularImage
              // imageSource={ profile_pic ?? {uri: ""}}
              onPress={() => {}}
            />
          </View>

          <View style={[styles.my5, styles.py5]}>
            <Text style={[styles.bold, styles.mb3]}>Address</Text>
            <IconField
              iconName="location-pin"
              iconType="material-community-icons"
              iconSize={25}
              editable={false}
              autoCapitalize="none"
              autoComplete={"password"}
              placeholder={address}
            />
            <Text style={[styles.bold, styles.mt4, styles.mb3]}>Email</Text>
            <IconField
              iconName="email"
              iconType="entypo"
              iconSize={25}
              autoCapitalize="none"
              autoComplete={"password"}
              placeholder={email}
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

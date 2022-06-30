import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Icon, Divider } from "react-native-elements";

import { colors } from "@constants";
import styles from "./style";

const ProfileDetails = ({ editLocation, address, email, mobile_no }) => {
  return (
    <>
      <Text style={styles.headingText}>Account Info</Text>
      <Divider orientation="horizontal" />
      <View style={styles.profileInfoContainer}>
        <Icon name="place" type="material" color={colors.info} />
        <TouchableOpacity onPress={editLocation}>
          <Text
            style={[styles.valuesEditable, styles.controlledWidth]}
          >{`${address}`}</Text>
        </TouchableOpacity>
      </View>
      <Divider orientation="horizontal" />
      <View style={styles.profileInfoContainer}>
        <Icon name="email" type="material" color={colors.dark} />
        <Text style={styles.values}>{`${email}`}</Text>
      </View>
      <Divider orientation="horizontal" />
      <View style={styles.profileInfoContainer}>
        <Icon name="phone" type="material" color={colors.dark} />
        <Text style={styles.values}>{`+63${mobile_no}`}</Text>
      </View>
    </>
  );
};

export default ProfileDetails;

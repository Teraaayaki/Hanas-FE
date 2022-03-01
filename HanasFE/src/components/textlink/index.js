import { View, Text, TouchableOpacity } from "react-native";
import styles from "@screens/login/style";
import React from "react";

// @Props
// title (string) - title of no link text
// linkTitle (string) - title of link text
// onPress (callback function) - link to which page
const index = ({ title, linkTitle, onPress }) => {
  return (
    <View style={[styles.rowContainer, styles.pt3]}>
      <Text style={[styles.secondary, styles.f13, styles.pr2]}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.pink, styles.f13]}>{linkTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;

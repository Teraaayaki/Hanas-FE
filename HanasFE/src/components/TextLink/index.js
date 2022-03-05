import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import React from "react";

// @Props
// title (string) - title of no link text
// linkTitle (string) - title of link text
// onPress (callback function) - link to which page
const index = ({ title, linkTitle, onPress }) => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.title]}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.linkTitle]}>{linkTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;

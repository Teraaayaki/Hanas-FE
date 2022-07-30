import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import React, { memo, useState, useEffect } from "react";
import Countdown from "react-countdown";

// @Props
// title (string) - title of no link text
// linkTitle (string) - title of link text
// onPress (callback function) - link to which page
const index = ({ title, linkTitle, onPress, keyValue }) => {
  const renderTimeLeft = ({ seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return (
        <TouchableOpacity onPress={onPress}>
          <Text style={[styles.linkTitle]}>{linkTitle}</Text>
        </TouchableOpacity>
      );
    } else {
      // Render a countdown
      return <Text style={[styles.linkTitle]}>{seconds}s</Text>;
    }
  };

  return (
    <View style={[styles.container]}>
      {console.log("rerender")}
      <Text style={[styles.title]}>{title}</Text>
      <Countdown
        date={Date.now() + 59000}
        renderer={renderTimeLeft}
        key={keyValue}
      />
    </View>
  );
};

export default memo(index);

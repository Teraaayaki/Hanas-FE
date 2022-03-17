import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

//Containers are invisible
//Cards are visible

const AttachImage = ({ title }) => {
  return (
    <View
      style={[
        styles.w100,
        styles.flexRow,
        styles.justifyContentCenter,
        styles.alignCenter,
        styles.pt1,
      ]}
    >
      <Icon
        name="attach-outline"
        type="ionicon"
        color={"#BBB"}
        size={20}
        style={[styles.rotate130deg]}
      />
      <Text style={[styles.p, styles.textCenter]}>{title}</Text>
      <TouchableOpacity>
        <Icon
          name="close-circle-outline"
          type="ionicon"
          color={"#BBB"}
          size={20}
          style={[styles.ml2, styles.mr4]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AttachImage;

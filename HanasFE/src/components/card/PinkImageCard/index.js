import React, { Fragment, useState } from "react";
import { View, Text, Image } from "react-native";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

import { colors, fontSize } from "@constants";
import styles from "./style";

// {disabled} renders the card Greyed out. Used for Schedule Screen.
// {hideCard} renders the Hide Card button on the header.

// Function for 1 Pink Sided Card ////////////////////////////////////
const PinkImageCard = ({
  success,
  disabled,
  imageSource,
  imageName,
  content,
}) => {
  const pinkSideCard = ({ imageSource }) => {
    const backgroundColorStyle = () => {
      return disabled
        ? { backgroundColor: colors.muted25 }
        : success
        ? styles.bgSuccess
        : styles.pinkCard;
    };
    return (
      <View
        style={[
          styles.flex3,
          backgroundColorStyle(),
          styles.px3,
          styles.pb2,
          styles.rounded,
        ]}
      >
        <Text style={[]}>Reward:</Text>
        {pinkSideImage({ imageSource })}
      </View>
    );
  };

  const pinkSideImage = ({ imageSource }) => {
    return (
      <View
        style={[
          styles.bgWhite,
          styles.imageHeight,
          styles.rounded,
          styles.mb5,
          styles.pt5,
          styles.pb2,
        ]}
      >
        <View
          style={[
            styles.flex1,
            styles.my4,
            styles.alignCenter,
            styles.justifyContentCenter,
          ]}
        >
          <Image source={imageSource} style={[styles.h100, styles.mw100]} />
        </View>
        <Text style={[styles.textCenter]}>{imageName}</Text>
      </View>
    );
  };

  const whiteSideCard = () => {
    const backgroundColorStyle = () => {
      return disabled ? styles.bgLightGrey : styles.bgWhite;
    };
    return (
      <View
        style={[
          styles.flex5,
          backgroundColorStyle(),
          styles.p3,
          styles.roundedRight20,
          styles.h75,
          styles.borderTop,
          styles.borderRight,
          styles.borderBottom,
          styles.borderMuted20,
        ]}
      >
        {content}
      </View>
    );
  };
  return (
    <View style={[styles.flexRow, styles.pb2, styles.mb1, styles.alignCenter]}>
      {pinkSideCard({ imageSource })}
      {whiteSideCard()}
    </View>
  );
};

export default PinkImageCard;

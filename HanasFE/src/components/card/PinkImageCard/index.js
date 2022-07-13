import React, { useState } from "react";
import { View, Text, Image } from "react-native";

import { colors } from "@constants";
import styles from "./style";

// {disabled} renders the card Greyed out. Used for Schedule Screen.
// {hideCard} renders the Hide Card button on the header.

// Function for 1 Pink Sided Card ////////////////////////////////////
const PinkImageCard = ({ success, disabled, imageSource, content }) => {
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
          styles.elevation1,
        ]}
      >
        <Text style={[styles.bold]}>Reward:</Text>
        {pinkSideImage({ imageSource })}
      </View>
    );
  };

  const pinkSideImage = ({ imageSource }) => {
    return (
      <View style={[styles.imageHeight, styles.rounded, styles.mb5]}>
        <View>
          <Image
            source={imageSource}
            style={[styles.h100, styles.w100, styles.rounded, styles.bgWhite]}
          />
        </View>
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
          styles.h85,
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

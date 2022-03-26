import React, { useState } from "react";
import { View, Text } from "react-native";
import { colors, fontSize } from "@constants";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

// {disabled} renders the card Greyed out. Used for Schedule Screen.
// {}

const PinkSidedCard = ({ navigation, disabled, hideCard, title, content }) => {
  // DESIGN FUNCTIONS=================================================
  //Header-------------------------------------------------
  const renderHeader = ({ title, hideCard }) => {
    if (hideCard) {
      return (
        <View style={[styles.temp1, styles.w100, styles.flexRow]}>
          {renderTitle({ title })}
        </View>
      );
    }
    return (
      <View style={[styles.temp1, styles.w100, styles.flexRow]}>
        {renderTitle({ title })}
      </View>
    );
  };

  const renderHideButton = ({ hideCard }) => {
    return <TouchableOpacity style={[styles.px4]}></TouchableOpacity>;
  };

  //Card---------------------------------------------------
  const PinkSide = (disabled) => {
    if (disabled) {
      return (
        <View
          style={[
            styles.pl3,
            styles.bgGrey,
            styles.roundedTopLeft,
            styles.roundedBottomLeft,
          ]}
        ></View>
      );
    }
    return (
      <View
        style={[
          styles.pl3,
          styles.bgPrimary,
          styles.roundedTopLeft,
          styles.roundedBottomLeft,
        ]}
      ></View>
    );
  };

  const ContentSide = (disabled, content) => {
    if (disabled) {
      return (
        <View
          style={[
            styles.flex1,
            styles.bgLightGrey,
            styles.roundedTopRight,
            styles.roundedBottomRight,
            styles.py3,
            styles.px5,
          ]}
        >
          {renderContent({ content })}
        </View>
      );
    }
    return (
      <View
        style={[
          styles.flex1,
          styles.bgWhite,
          styles.roundedTopRight,
          styles.roundedBottomRight,
          styles.py3,
          styles.px5,
        ]}
      >
        {renderContent({ content })}
      </View>
    );
  };

  const renderCard = ({ content, disabled }) => {
    return (
      <View
        style={[
          styles.temp4,
          styles.w100,
          styles.flexRow,
          styles.rounded,
          styles.shadow,
        ]}
      >
        {PinkSide(disabled)}
        {ContentSide(disabled, content)}
      </View>
    );
  };

  // CONTENT FUNCTIONS================================================
  //Header-------------------------------------------------
  const renderTitle = ({ title }) => {
    if (title) {
      return (
        <Text style={[styles.flex1, styles.bold, styles.h1, styles.mb3]}>
          {title}
        </Text>
      );
    }
    return "";
  };

  //Card---------------------------------------------------
  const renderContent = ({ content }) => {
    if (content) {
      return <View style={[styles.w100, styles.flex1]}>{content}</View>;
    }
    return (
      <View style={[styles.w100, styles.flex1]}>
        <Text>A</Text>
      </View>
    );
  };

  // RENDER ===========================================================
  return (
    <View style={[styles.mt3, styles.w100]}>
      {renderHeader({ title, hideCard })}
      {renderCard({ content, disabled })}
    </View>
  );
};

export default PinkSidedCard;

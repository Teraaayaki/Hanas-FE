import React, { Fragment, useState } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

import { colors, fontSize } from "@constants";
import styles from "./styles";

// {disabled} renders the card Greyed out. Used for Schedule Screen.
// {hideCard} renders the Hide Card button on the header.

// Function for 1 Pink Sided Card ////////////////////////////////////
const PinkSidedCard = ({
  navigation,
  disabled,
  hideCardBtn,
  title,
  content,
}) => {
  const [hideCard, setHideCard] = useState(false);

  // DESIGN FUNCTIONS=================================================
  //Header-------------------------------------------------
  const renderHeader = ({ title, hideCardBtn, hideCard, setHideCard }) => {
    return (
      <View style={[styles.w100, styles.flexRow, styles.mb3]}>
        {renderTitle({ title })}
        {renderHideButton({ hideCardBtn, hideCard, setHideCard })}
      </View>
    );
  };

  const renderHideButton = ({ hideCardBtn, hideCard, setHideCard }) => {
    if (hideCardBtn) {
      if (!hideCard) {
        return (
          <TouchableOpacity
            style={[styles.px5, styles.flex1]}
            onPress={() => setHideCard(true)}
          >
            <Icon name="chevron-down" type="font-awesome" />
          </TouchableOpacity>
        );
      }
      return (
        <TouchableOpacity
          style={[styles.px5, styles.flex1]}
          onPress={() => setHideCard(false)}
        >
          <Icon name="chevron-up" type="font-awesome" />
        </TouchableOpacity>
      );
    }
    return <Fragment></Fragment>;
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

  const renderCard = ({ content, disabled, hideCard }) => {
    if (!hideCard) {
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
    }
    return <Fragment></Fragment>;
  };

  // CONTENT FUNCTIONS================================================
  //Header-------------------------------------------------
  const renderTitle = ({ title }) => {
    if (title) {
      return (
        <Text style={[styles.flex1, styles.bold, styles.h1]}>{title}</Text>
      );
    }
    return <Fragment></Fragment>;
  };

  //Card---------------------------------------------------
  const renderContent = ({ content }) => {
    if (content != null) {
      return <View style={[styles.w100, styles.flex1]}>{content}</View>;
    }
    return (
      <View style={[styles.w100, styles.flex1]}>
        <Text>Use Content prop to render card content.</Text>
      </View>
    );
  };

  // RENDER ===========================================================
  return (
    <View style={[styles.mt3, styles.w100]}>
      {renderHeader({ title, hideCardBtn, hideCard, setHideCard })}
      {renderCard({ content, disabled, hideCard })}
    </View>
  );
};

export default PinkSidedCard;

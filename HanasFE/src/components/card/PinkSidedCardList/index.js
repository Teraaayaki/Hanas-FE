import React, { Fragment, useState } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

import styles from "./styles";

// PINK SIDED CARD HEADER --- START ==========================================

// PARAMETERS:
// PinkSidedCardHeader
// {disabled} renders the card Greyed out. Used for Schedule Screen.
// {hideCardBtn} renders the Hide Card button on the header.
// {hideCard} the Hide Card state.
// {setHideCard} sets the Hide Card state.

// PinkSidedCardItem
// {disabled} renders the card Greyed out. Used for Schedule Screen.
// {hideCard} the Hide Card state.
// {content} contains what is rendered inside the PinkSidedCard.

const PinkSidedCardHeader = ({
  navigation,
  hideCardBtn,
  title,
  hideCard,
  setHideCard,
}) => {
  const renderHeader = ({ title, hideCardBtn, hideCard, setHideCard }) => {
    return (
      <View style={[styles.w100, styles.flexRow]}>
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

  const renderTitle = ({ title }) => {
    if (title) {
      return (
        <Text style={[styles.flex1, styles.bold, styles.h1, styles.mb3]}>
          {title}
        </Text>
      );
    }
    return <Fragment></Fragment>;
  };

  // PINK SIDED CARD HEADER RENDER -----------------------------------------
  return (
    <View style={[styles.mt3, styles.w100]}>
      {renderHeader({ title, hideCardBtn, hideCard, setHideCard })}
    </View>
  );
};
// PINK SIDED CARD HEADER --- END ==========================================

// PINK SIDED CARD ITEM --- START ==========================================

// PARAMETERS:
// PinkSidedCardHeader
// {disabled} renders the card Greyed out. Used for Schedule Screen.
// {hideCardBtn} renders the Hide Card button on the header.
// {hideCard} the Hide Card state.
// {setHideCard} sets the Hide Card state.

// PinkSidedCardItem
// {disabled} renders the card Greyed out. Used for Schedule Screen.
// {hideCard} the Hide Card state.
// {content} contains what is rendered inside the PinkSidedCard.

const PinkSidedCardItem = ({ navigation, disabled, hideCard, content }) => {
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
            styles.mt3,
          ]}
        >
          {PinkSideBorder(disabled)}
          {ContentSide(disabled, content)}
        </View>
      );
    }
    return <Fragment></Fragment>;
  };

  const PinkSideBorder = (disabled) => {
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
        ]}
      >
        {renderContent({ content })}
      </View>
    );
  };

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

  // PINK SIDED CARD RENDER ------------------------------------------------
  return (
    <View style={[styles.w100]}>
      {renderCard({ content, disabled, hideCard })}
    </View>
  );
};
// PINK SIDED CARD ITEM --- END ============================================

export { PinkSidedCardHeader, PinkSidedCardItem };

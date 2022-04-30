import React, { useState } from "react";
import CircularImage from "@components/CircularImage";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";

import styles from "./style";
import PinkSidedCard from "@components/card/PinkSidedCard";

const SkilledWorkerDashboardFlatlist = ({ OngoingDATA }) => {
  const renderOngoingBody = () => {
    return (
      <View style={[styles.flex1, styles.w100]}>
        {/* Card Body */}
        <View style={[styles.flex1, styles.w100, styles.flexRow]}>
          {/* Body Left */}
          <View
            style={[
              styles.ml3,
              styles.justifyContentCenter,
              styles.alignCenter,
            ]}
          >
            <CircularImage imageSource={OngoingDATA.image} />
          </View>
          {/* Body Right */}
          {renderItem()}
        </View>
        {/* Card Footer */}
        <View style={[styles.flex1, styles.w100, styles.flexRow]}>
          {footerMessage()}
        </View>
      </View>
    );
  };

  const footerMessage = () => {
    const renderServiceEnd = () => {
      return "2" + " hrs " + "38" + " mins";
    };

    return (
      <View
        style={[
          styles.w100,
          styles.flex1,
          styles.borderTop,
          styles.borderMuted20,
          styles.mx5,
          styles.flexRow,
          styles.justifyContentCenter,
          styles.pt1,
          styles.mt1,
        ]}
      >
        <Text style={[styles.h1, styles.bold, styles.textMuted50]}>
          Service ends in:{" "}
        </Text>
        <Text style={[styles.h1, styles.bold]}>{renderServiceEnd()}</Text>
      </View>
    );
  };

  const renderItem = () => {
    return (
      <View style={[styles.w100, styles.flex1, styles.mr5]}>
        <Text
          style={[
            styles.h2,
            styles.bold,
            styles.textCenter,
            styles.borderBottom,
            styles.borderMuted20,
            styles.mb2,
            styles.pb3,
          ]}
        >
          {OngoingDATA.title}
        </Text>
        <View
          style={[
            styles.w100,
            styles.flexRow,
            styles.justifyContentCenter,
            styles.alignCenter,
            styles.mb2,
          ]}
        >
          <Icon name="alarm" type="material-community-icons" size={18} />
          <Text style={[styles.h4, styles.textCenter, styles.ml1]}>
            {OngoingDATA.timeStart} - {OngoingDATA.timeEnd}
          </Text>
        </View>
        <View
          style={[
            styles.w100,
            styles.flexRow,
            styles.justifyContentCenter,
            styles.alignCenter,
            styles.mb2,
          ]}
        >
          <Icon name="person-outline" type="material-icons" size={18} />
          <Text style={[styles.h4, styles.textCenter, styles.ml1]}>
            {OngoingDATA.name}
          </Text>
        </View>
        <View
          style={[
            styles.w100,
            styles.flexRow,
            styles.justifyContentCenter,
            styles.alignCenter,
            styles.mb2,
          ]}
        >
          <Icon name="location-sharp" type="ionicon" size={18} />
          <Text style={[styles.h4, styles.textCenter, styles.ml1]}>
            {OngoingDATA.address}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <PinkSidedCard
      title="Ongoing Services"
      hideCardBtn
      content={renderOngoingBody()}
      success
    />
  );
};

export default SkilledWorkerDashboardFlatlist;

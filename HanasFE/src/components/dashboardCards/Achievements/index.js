import React, { useState } from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import PinkSidedCard from "@components/card/PinkSidedCard";
import TextToggle from "@components/TextToggle";
import { Icon } from "react-native-elements";

const Achievements = () => {
  const renderContent = () => {
    const completion = 42;

    const renderCompletionBar = () => {
      const pinkBarStyle = () => {};
      return (
        <View
          style={[
            styles.flex1,
            styles.flexRow,
            styles.mt2,
            styles.justifyContentCenter,
            styles.alignCenter,
          ]}
        >
          <View
            style={[
              styles.roundedLeft100,
              styles.pt5,
              styles.pb3,
              styles.bgPrimary,
              { flex: completion },
            ]}
          />
          <View
            style={[
              styles.roundedRight100,
              styles.pt5,
              styles.pb3,
              styles.bgLightGrey,
              { flex: 100 - completion },
            ]}
          />
          <Text style={[styles.completion, styles.h4, styles.mb1]}>
            {completion}% completed
          </Text>
        </View>
      );
    };

    return (
      <View style={[styles.flex1]}>
        <Text
          style={[
            styles.flex1,
            styles.borderBottom,
            styles.borderMuted20,
            styles.textCenter,
            styles.h5,
            styles.pb2,
          ]}
        >
          Career Milestone Achievemnts
        </Text>
        <View
          style={[
            styles.flex1,
            styles.flexRow,
            styles.justifyContentSpaceBetween,
            styles.alignCenter,
            styles.mt2,
          ]}
        >
          <Text style={[styles.h3]}>PHP 30,000 Total Sales</Text>
          <Icon
            name="info-circle"
            type="font-awesome-5"
            size={22}
            color="#8bd948"
            style={[styles.mb5, styles.pb5]}
          />
        </View>
        {renderCompletionBar()}
      </View>
    );
  };
  return (
    <PinkSidedCard
      title={"Achievements"}
      hideCardBtn={true}
      content={renderContent()}
    />
  );
};

export default Achievements;

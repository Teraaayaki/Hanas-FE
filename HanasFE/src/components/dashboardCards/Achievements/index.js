import React, { useState } from "react";
import { View, Text } from "react-native";

import { Icon, ListItem } from "react-native-elements";
import { colors } from "@constants";
import { TouchableOpacity } from "react-native-gesture-handler";

import PinkSidedCard from "@components/card/PinkSidedCard";
import CompletionBar from "@components/CompletionBar";
import styles from "./styles";

const Achievements = ({ navigation, AchievementsDATA }) => {
  const renderContent = () => {
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
          <Text style={[styles.h3]}>
            PHP {AchievementsDATA.goal} Total Sales
          </Text>
          <TouchableOpacity
            onPressOut={() => navigation.navigate("Achievements")}
          >
            <Icon
              name="info-circle"
              type="font-awesome-5"
              size={22}
              color={colors.success}
              style={[styles.mb5, styles.pb5]}
            />
          </TouchableOpacity>
        </View>
        <CompletionBar
          goal={AchievementsDATA.goal}
          completion={AchievementsDATA.completion}
        />
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

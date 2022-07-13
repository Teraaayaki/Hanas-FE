import React, { useState } from "react";
import { View, Text } from "react-native";
import { Icon, ListItem } from "react-native-elements";
import { colors } from "@constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Tooltip } from "react-native-elements";

import PinkSidedCard from "@components/card/PinkSidedCard";
import CompletionBar from "@components/CompletionBar";
import styles from "./styles";

const Achievements = ({ navigation, AchievementsDATA }) => {
  const renderContent = () => {
    return (
      <View style={[styles.flex1]}>
        <TouchableOpacity onPress={() => navigation.navigate("Achievements")}>
          <Text
            style={[
              styles.flex1,
              styles.borderBottom,
              styles.borderMuted20,
              styles.textCenter,
              styles.h2,
              styles.pb2,
            ]}
          >
            Career Milestone Achievements
          </Text>
        </TouchableOpacity>
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
          <Tooltip
            containerStyle={{ backgroundColor: "lightgrey" }}
            width={300}
            height={75}
            overlayColor={styles.bgGrey}
            pointerColor="lightgrey"
            popover={
              <Text>
                You will earn rewards if you complete jobs. Please make sure to
                pay your monthly convenience fee.
              </Text>
            }
          >
            <Icon
              name="info-circle"
              type="font-awesome-5"
              size={22}
              color={colors.success}
              style={[styles.mb5, styles.pb5]}
            />
          </Tooltip>
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

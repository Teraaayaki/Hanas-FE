import React, { useState } from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import PinkSidedCard from "@components/card/PinkSidedCard";
import { Icon } from "react-native-elements";
import { colors } from "@constants";
import { TouchableOpacity } from "react-native-gesture-handler";

const Achievements = ({ AchievementsDATA }) => {
  const renderContent = () => {
    const [type, setType] = useState(false);
    const goal = "30,000";

    const renderCompletionBar = () => {
      const renderCompletedSide = () => {
        if (AchievementsDATA.percentage < 100) {
          return (
            <View
              style={[
                styles.roundedLeft100,
                styles.pt5,
                styles.pb3,
                styles.bgPrimary,
                { flex: AchievementsDATA.percentage },
              ]}
            />
          );
        }
        return (
          <View
            style={[
              styles.rounded,
              styles.pt5,
              styles.pb3,
              styles.bgPrimary,
              { flex: AchievementsDATA.percentage },
            ]}
          />
        );
      };

      const renderUncompletedSide = () => {
        if (AchievementsDATA.percentage > 0) {
          return (
            <View
              style={[
                styles.roundedRight100,
                styles.pt5,
                styles.pb3,
                styles.bgLightGrey,
                { flex: 100 - AchievementsDATA.percentage },
              ]}
            />
          );
        }
        return (
          <View
            style={[
              styles.rounded,
              styles.pt5,
              styles.pb3,
              styles.bgLightGrey,
              { flex: 100 - AchievementsDATA.percentage },
            ]}
          />
        );
      };
      return (
        <TouchableOpacity onPressOut={() => setType(!type)}>
          <View
            style={[
              styles.flex1,
              styles.flexRow,
              styles.mt2,
              styles.justifyContentCenter,
              styles.alignCenter,
            ]}
          >
            {renderCompletedSide()}
            {renderUncompletedSide()}
            <Text style={[styles.completion, styles.h4, styles.mb1]}>
              {type
                ? "PHP " + AchievementsDATA.completion
                : AchievementsDATA.percentage + "% completed"}
            </Text>
          </View>
        </TouchableOpacity>
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
          <Text style={[styles.h3]}>
            PHP {AchievementsDATA.goal} Total Sales
          </Text>
          <TouchableOpacity>
            <Icon
              name="info-circle"
              type="font-awesome-5"
              size={22}
              color={colors.success}
              style={[styles.mb5, styles.pb5]}
            />
          </TouchableOpacity>
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

import React, { useState } from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import PinkSidedCard from "@components/card/PinkSidedCard";
import TextToggle from "@components/TextToggle";
import { Icon } from "react-native-elements";

const Overview = ({ OverviewDATA }) => {
  const renderContent = ({ OverviewDATA }) => {
    const [toggle, setToggle] = useState(0);

    const handleWeeklyToggle = () => {
      return setToggle(0);
    };

    const handleMonthlyToggle = () => {
      return setToggle(1);
    };

    const handleYearlyToggle = () => {
      return setToggle(2);
    };

    return (
      <View style={[styles.flex1]}>
        <View
          style={[styles.flex1, styles.flexRow, styles.mb3, styles.alignCenter]}
        >
          <Text style={[styles.h2, styles.bold, styles.mr2]}>Total Earned</Text>
          <Icon
            name="bank"
            type="font-awesome"
            size={18}
            style={[styles.mb5, styles.pb5]}
          />
        </View>
        <View
          style={[
            styles.flex1,
            styles.flexRow,
            styles.justifyContentSpaceBetween,
            styles.mb2,
          ]}
        >
          <TextToggle
            title="Weekly"
            active={toggle == 0 ? true : false}
            onPress={handleWeeklyToggle}
          />
          <TextToggle
            title="Monthly"
            active={toggle == 1 ? true : false}
            onPress={handleMonthlyToggle}
          />
          <TextToggle
            title="Yearly"
            active={toggle == 2 ? true : false}
            onPress={handleYearlyToggle}
          />
        </View>

        <View style={[styles.flex1]}>
          <View
            style={[
              styles.mt2,
              styles.flex1,
              styles.flexRow,
              styles.justifyContentSpaceBetween,
            ]}
          >
            <Text style={[styles.h2, styles.textMuted50]}>Average Earned:</Text>
            <Text style={[styles.h3]}>
              PHP {OverviewDATA[toggle].AverageEarned}
            </Text>
          </View>
          <View
            style={[
              styles.mt2,
              styles.flex1,
              styles.flexRow,
              styles.justifyContentSpaceBetween,
            ]}
          >
            <Text style={[styles.h2, styles.textMuted50]}>Highest Single:</Text>
            <Text style={[styles.h3]}>
              PHP {OverviewDATA[toggle].HighestSingle}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <PinkSidedCard
      title={"Overview"}
      hideCardBtn={true}
      content={renderContent({ OverviewDATA })}
    />
  );
};

export default Overview;

import React, { useState } from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import PinkSidedCard from "@components/card/PinkSidedCard";
import TextToggle from "@components/TextToggle";
import { Icon } from "react-native-elements";

const Overview = () => {
  const renderContent = () => {
    const [toggle, setToggle] = useState({
      weekly: true,
      monthly: false,
      yearly: false,
    });

    const handleWeeklyToggle = () => {
      return setToggle({ weekly: true, monthly: false, yearly: false });
    };

    const handleMonthlyToggle = () => {
      return setToggle({ weekly: false, monthly: true, yearly: false });
    };

    const handleYearlyToggle = () => {
      return setToggle({ weekly: false, monthly: false, yearly: true });
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
            active={toggle.weekly}
            onPress={handleWeeklyToggle}
          />
          <TextToggle
            title="Monthly"
            active={toggle.monthly}
            onPress={handleMonthlyToggle}
          />
          <TextToggle
            title="Yearly"
            active={toggle.yearly}
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
            <Text style={[styles.h3]}>PHP 499.75</Text>
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
            <Text style={[styles.h3]}>PHP 800.00</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <PinkSidedCard
      title={"Overview"}
      hideCardBtn={true}
      content={renderContent()}
    />
  );
};

export default Overview;

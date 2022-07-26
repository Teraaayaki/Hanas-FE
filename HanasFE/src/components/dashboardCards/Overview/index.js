import React, { useState } from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import PinkSidedCard from "@components/card/PinkSidedCard";
import TextToggle from "@components/TextToggle";
import { Icon } from "react-native-elements";

const Overview = ({ OverviewDATA }) => {
  const renderContent = ({ OverviewDATA }) => {
    const [toggle, setToggle] = useState(0);

    const handleWeeklyToggle = () => setToggle(0);

    const handleMonthlyToggle = () => setToggle(1);

    const handleYearlyToggle = () => setToggle(2);

    const displayDays = () => {
      switch (toggle) {
        case 0:
          return "Last 7 days";
        case 1:
          return "Last 31 days";
        case 2:
          return "Last 366 days";
      }
    };
    return (
      <View style={[styles.flex1]}>
        <View style={[styles.flex1, styles.flexRow, styles.mb3, styles.alignCenter]}>
          <Text style={[styles.h2, styles.bold, styles.mr2]}>Total Earned</Text>
          <Text style={[styles.textRight, styles.textMuted50, styles.mr2]}>
            ({displayDays()})
          </Text>
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
            title="Week"
            active={toggle == 0 ? true : false}
            onPress={handleWeeklyToggle}
          />
          <TextToggle
            title="Month"
            active={toggle == 1 ? true : false}
            onPress={handleMonthlyToggle}
          />
          <TextToggle
            title="Year"
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
            <Text style={[styles.h2, styles.textMuted50]}>Income:</Text>
            <Text style={[styles.h3]}>
              PHP{" "}
              {OverviewDATA[toggle]?.income
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
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
            <Text style={[styles.h2, styles.textMuted50]}>Services:</Text>
            <Text style={[styles.h3]}>
              {OverviewDATA[toggle]?.services} Transactions
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

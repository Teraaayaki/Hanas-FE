import React, { useState } from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import PinkSidedCard from "@components/card/PinkSidedCard";
import TextToggle from "@components/TextToggle";
import { Icon } from "react-native-elements";

const Achievements = () => {
  const renderContent = () => {
    return (
      <View style={[styles.flex1]}>
        <View style={[styles.borderBottom, styles.borderMuted20]}>
          <Text>Remaining Balance: </Text>
          <Text style={[styles.textRight]}>PHP 345.00</Text>
        </View>
        <View style={[styles.borderBottom, styles.borderMuted20]}>
          <View
            style={[
              styles.flex1,
              styles.flexRow,
              styles.justifyContentSpaceBetween,
            ]}
          >
            <Text>Payment Details:</Text>
          </View>

          <View style={[styles.flex1, styles.px3]}>
            <View style={[styles.flex1, styles.flexRow]}>
              <Icon
                name="info-circle"
                type="font-awesome-5"
                size={22}
                color="#8bd948"
                style={[styles.mb5, styles.pb5]}
              />
              <Text>Date</Text>
            </View>
            <View style={[styles.flex1, styles.flexRow]}>
              <Icon
                name="info-circle"
                type="font-awesome-5"
                size={22}
                color="#8bd948"
                style={[styles.mb5, styles.pb5]}
              />
              <Text>Address</Text>
            </View>
          </View>

          <View style={[styles.flex1, styles.flexRow, styles.borderTop]}>
            <Icon
              name="info-circle"
              type="font-awesome-5"
              size={22}
              color="#8bd948"
              style={[styles.mb5, styles.pb5]}
            />
            <Text style={[styles.textDanger]}>
              Payment Overdue! You are unable to claim Achievement Incentives.
            </Text>
          </View>
        </View>
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

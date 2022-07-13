import React, { useState } from "react";
import { View, Text } from "react-native";

import styles from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";
import currencyFormat from "@utils/currencyFormat";

const CompletionBar = ({ goal, completion, success, disabled }) => {
  const [type, setType] = useState(false);
  const percentage = Math.round((completion / goal) * 100);
  const remainingBalance = goal - completion;

  const renderCompletedSide = () => {
    const completedBarStyle = () => {
      return disabled
        ? styles.bgMuted25
        : success
        ? styles.bgSuccess
        : styles.bgPrimary;
    };
    const flexStyle = () => {
      return { flex: percentage };
    };
    const roundedStyle = () => {
      return percentage < 100 ? styles.roundedLeft100 : styles.rounded;
    };

    return (
      <View
        style={[
          roundedStyle(),
          styles.pt5,
          styles.pb3,
          completedBarStyle(),
          flexStyle(),
        ]}
      />
    );
  };

  const renderUncompletedSide = () => {
    const flexStyle = () => {
      return { flex: 100 - percentage };
    };

    const roundedStyle = () => {
      return percentage > 0 ? styles.roundedRight100 : styles.rounded;
    };

    return (
      <View
        style={[
          roundedStyle(),
          styles.pt5,
          styles.pb3,
          styles.bgLightGrey,
          flexStyle(),
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
            ? remainingBalance > 0
              ? "Earn PHP " + currencyFormat(remainingBalance) + " more"
              : "Earn PHP 0.00"
            : percentage > 100
            ? "100% completed "
            : percentage + "% completed"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CompletionBar;

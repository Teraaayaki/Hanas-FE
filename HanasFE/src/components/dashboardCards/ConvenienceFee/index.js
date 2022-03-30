import React, { useState } from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import PinkSidedCard from "@components/card/PinkSidedCard";
import { Icon } from "react-native-elements";
import { colors } from "@constants";
import { TouchableOpacity } from "react-native-gesture-handler";

const Achievements = () => {
  const renderContent = () => {
    const [error, setError] = useState(true);
    return (
      <View style={[styles.flex1]}>
        <View
          style={[
            styles.borderBottom,
            styles.borderMuted20,
            styles.pb3,
            styles.mb3,
          ]}
        >
          <Text style={[styles.h2, styles.textMuted50]}>
            Remaining Balance:{" "}
          </Text>
          <Text style={[styles.mt2, styles.textRight, { fontSize: 22 }]}>
            PHP 345.00
          </Text>
        </View>
        <View style={[]}>
          <View
            style={[
              styles.flex1,
              styles.flexRow,
              styles.justifyContentSpaceBetween,
            ]}
          >
            <Text style={[styles.h2, styles.textMuted50]}>
              Payment Details:
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

          <View style={[styles.flex1, styles.px4]}>
            <View
              style={[
                styles.flex1,
                styles.flexRow,
                styles.alignCenter,
                styles.mt2,
              ]}
            >
              <Icon
                name="calendar"
                type="font-awesome"
                size={22}
                style={[styles.mb5, styles.pb5]}
              />
              <Text style={[styles.ml3, styles.h3]}>7/12/22</Text>
            </View>
            <View
              style={[
                styles.flex1,
                styles.flexRow,
                styles.alignCenter,
                styles.mt2,
              ]}
            >
              <Icon name="location-sharp" type="ionicon" size={22} />
              <Text
                style={[styles.ml3, styles.pb1, styles.h3, styles.textMuted50]}
              >
                Brgy. Lourdes Bogo City, Cebu
              </Text>
            </View>
          </View>

          {error ? (
            <View style={[styles.flex1, styles.px4]}>
              <View
                style={[
                  styles.flex1,
                  styles.flexRow,
                  styles.borderTop,
                  styles.borderMuted20,
                  styles.alignCenter,
                  styles.pt2,
                  styles.mt2,
                ]}
              >
                <Icon
                  name="alert"
                  type="material-community"
                  size={28}
                  color={colors.danger}
                  style={[styles.mt5, styles.pt5]}
                />
                <Text style={[styles.textDanger, styles.ml3, styles.p]}>
                  Payment Overdue! You are unable to claim Achievement
                  Incentives.
                </Text>
              </View>
            </View>
          ) : (
            <View></View>
          )}
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

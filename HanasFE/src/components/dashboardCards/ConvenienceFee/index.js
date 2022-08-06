import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import dayjs from "dayjs";

import styles from "./styles";
import PinkSidedCard from "@components/card/PinkSidedCard";
import { Icon } from "react-native-elements";
import { colors } from "@constants";
import { TouchableOpacity } from "react-native-gesture-handler";

const ConvenienceFee = ({ ConvenienceFeeDATA }) => {
  const [showText, setShowText] = useState(false);

  const renderContent = () => {
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
            Total Amount Due:{" "}
          </Text>
          <Text style={[styles.mt2, styles.textRight, { fontSize: 22 }]}>
            PHP {ConvenienceFeeDATA?.total_amount || 0}
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
            <TouchableOpacity onPress={() => setShowText(!showText)}>
              <Icon
                name="info-circle"
                type="font-awesome-5"
                size={22}
                color={colors.success}
                style={[styles.mb5, styles.pb5]}
              />
            </TouchableOpacity>
          </View>
          {showText && (
            <Text style={[styles.textSecondary, styles.ml3, styles.p]}>
              Every time you complete a service you need to pay us a fraction of
              the amount the first day of next month.{" "}
            </Text>
          )}
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
              <Text style={[styles.ml3, styles.h3]}>
                {!ConvenienceFeeDATA
                  ? "N/A"
                  : "Next due - " +
                    dayjs().add(1, "M").set("date", 1).format("MMMM DD, YYYY")}
              </Text>
            </View>
            <View
              style={[
                styles.flex1,
                styles.flexRow,
                styles.alignCenter,
                styles.mt2,
              ]}
            >
              <Icon
                name="map-marker"
                type="font-awesome"
                size={22}
                style={[styles.mb5, styles.pb5]}
              />
              <Text style={[styles.ml3, styles.h3]}>
                {"  "}
                53 P. Rodriguez St. Bogo City, Cebu
              </Text>
            </View>
            <View
              style={[
                styles.flex1,
                styles.flexRow,
                styles.alignCenter,
                styles.mt2,
              ]}
            >
              <Icon
                name="phone"
                type="font-awesome"
                size={22}
                style={[styles.mb5, styles.pb5]}
              />
              <Text style={[styles.ml3, styles.h3, styles.textMuted50]}>
                {" "}
                032-253-3310
              </Text>
            </View>
          </View>

          {ConvenienceFeeDATA?.status === "OVERDUE" && (
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
                  Payment Overdue!{"\n"} You are unable to claim Achievement
                  Incentives. Please pay now to avoid account deactivation.
                </Text>
              </View>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <PinkSidedCard
      title={"Convenience Fee"}
      hideCardBtn={true}
      content={renderContent()}
    />
  );
};

export default ConvenienceFee;

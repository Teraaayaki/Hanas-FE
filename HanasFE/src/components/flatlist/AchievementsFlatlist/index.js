import React from "react";
import { FlatList, View, Text } from "react-native";
import { Icon } from "react-native-elements";

import PinkSidedCard from "@components/card/PinkSidedCard";
import PinkImageCard from "@components/card/PinkImageCard";
import CompletionBar from "@components/CompletionBar";
import styles from "./style";
import { colors } from "@constants";
import { padding } from "@constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import currencyFormat from "@utils/currencyFormat";

const AchievemntsFlatlist = ({
  AchievementsDATA,
  totalEarnings,
  paymentOverdue,
}) => {
  const renderContent = ({ item }) => {
    return (
      <View style={[styles.flex1, styles.w100, styles.justifyContentCenter]}>
        <Text
          style={[
            styles.h4,
            styles.robotoRegFont,
            styles.textCenter,
            styles.mb3,
          ]}
        >
          PHP {currencyFormat(item.goal)} in Total earnings
        </Text>
        <Text style={[styles.h4, styles.robotoFont, styles.textCenter]}>
          {item.title}
        </Text>
        <CompletionBar
          goal={item.goal}
          completion={totalEarnings}
          success={totalEarnings > item.goal ? true : false}
          disabled={item.claimed ? true : false}
        />
        {item.claimed && (
          <View
            style={[styles.flexRow, styles.justifyContentCenter, styles.mt5]}
          >
            <Icon name="check" type="entypo" size={20} color={colors.success} />
            <Text style={[styles.p, styles.textCenter, styles.pl1]}>
              Received
            </Text>
          </View>
        )}
        {totalEarnings >= item.goal && paymentOverdue && !item.claimed && (
          <TouchableOpacity onPressOut={() => {}}>
            <View
              style={[styles.flexRow, styles.justifyContentCenter, styles.mt5]}
            >
              <Icon
                name="alert"
                type="material-community"
                size={20}
                color={colors.danger}
              />
              <View>
                <Text style={[styles.textDanger, styles.ml3, styles.p]}>
                  Payment Overdue!
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <PinkImageCard
        imageSource={item.image}
        imageName={item.title}
        content={renderContent({ item })}
        success={totalEarnings > item.goal ? true : false}
        disabled={item.claimed ? true : false}
      />
    );
  };

  const renderHeader = () => {
    return (
      <View style={[styles.mb5]}>
        <Text style={[styles.totalEarnings]}>Total Earnings:</Text>
        <Text style={[styles.bold, styles.totalEarningsVal, styles.textCenter]}>
          {"₱ "}
          {currencyFormat(totalEarnings)}
        </Text>
        <View
          style={[
            styles.w100,
            styles.flexRow,
            styles.justifyContentCenter,
            styles.alignCenter,
          ]}
        >
          <Icon
            name="info-circle"
            type="font-awesome-5"
            size={22}
            color={colors.success}
          />
          <Text style={[styles.h3, styles.ml2]}>
            Increase total earnings to earn rewards!
          </Text>
        </View>

        <View style={[styles.w100, styles.px5]}>
          <PinkSidedCard
            content={
              <View
                style={[styles.bgWhite, styles.rounded, styles.px3, styles.py2]}
              >
                <Text
                  style={[
                    styles.h3,
                    styles.mb3,
                    styles.bold,
                    styles.textCenter,
                  ]}
                >
                  Contact Hanas to Claim Rewards
                </Text>
                <View
                  style={[
                    styles.flexRow,
                    styles.justifyContentCenter,
                    styles.alignCenter,
                  ]}
                >
                  <Icon
                    name="email"
                    type="material-icons"
                    size={22}
                    color={colors.secondary}
                  />
                  <Text style={[styles.h3, styles.ml2]}>
                    hanas.app.services@gmail.com
                  </Text>
                </View>
                <View
                  style={[
                    styles.flexRow,
                    styles.justifyContentCenter,
                    styles.alignCenter,
                  ]}
                >
                  <Icon
                    name="phone"
                    type="material-icons"
                    size={22}
                    color={colors.secondary}
                  />
                  <Text style={[styles.h3, styles.ml2]}>49X-XOXO</Text>
                </View>
                <View
                  style={[
                    styles.flexRow,
                    styles.justifyContentCenter,
                    styles.alignCenter,
                  ]}
                >
                  <Icon
                    name="smartphone"
                    type="material-icons"
                    size={22}
                    color={colors.secondary}
                  />
                  <Text style={[styles.h3, styles.ml2]}>09XXOOOXXXX</Text>
                </View>
              </View>
            }
          />
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={AchievementsDATA}
      renderItem={renderItem}
      extraData={[totalEarnings, paymentOverdue]}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingVertical: padding.p5 }}
      ListHeaderComponent={renderHeader()}
    />
  );
};

export default AchievemntsFlatlist;

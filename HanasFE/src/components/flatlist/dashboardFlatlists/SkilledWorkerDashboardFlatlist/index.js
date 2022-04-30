import React, { useState } from "react";
import CircularImage from "@components/CircularImage";
import { FlatList, View, Text, Fragment } from "react-native";
import { Icon } from "react-native-elements";

import styles from "./styles";
import PinkSidedCard from "@components/card/PinkSidedCard";
import {
  PinkSidedCardHeader,
  PinkSidedCardItem,
} from "@components/card/PinkSidedCardList";
import Ongoing from "@components/dashboardCards/Ongoing";
import Overview from "@components/dashboardCards/Overview";
import Achievements from "@components/dashboardCards/Achievements";
import ConvenienceFee from "@components/dashboardCards/ConvenienceFee";

const SkilledWorkerDashboardFlatlist = ({
  navigation,
  OngoingDATA,
  ServicesDATA,
  OverviewDATA,
  AchievementsDATA,
  ConvenienceFeeDATA,
}) => {
  const [hideCard, setHideCard] = useState(false);

  const renderFlatlist = ({ OngoingDATA, hideCard }) => {
    const renderCard = ({ item }) => {
      return (
        <PinkSidedCardItem
          hideCard={hideCard}
          content={renderUpcomingBody({ item })}
        />
      );
    };

    const renderUpcomingBody = ({ item }) => {
      return (
        <View style={[styles.flex1, styles.w100]}>
          {/* Card Body */}
          <View style={[styles.flex1, styles.w100, styles.flexRow]}>
            {/* Body Left */}
            <View
              style={[
                styles.ml3,
                styles.justifyContentCenter,
                styles.alignCenter,
              ]}
            >
              <CircularImage imageSource={item.image} />
            </View>
            {/* Body Right */}
            {renderItem({ item })}
          </View>
          {/* Card Footer */}
          <View style={[styles.flex1, styles.w100, styles.flexRow]}>
            {footerMessage()}
          </View>
        </View>
      );
    };

    const footerMessage = () => {
      const renderServiceEnd = () => {
        return "2" + " hrs " + "38" + " mins";
      };

      return (
        <View
          style={[
            styles.w100,
            styles.flex1,
            styles.borderTop,
            styles.borderMuted20,
            styles.mx5,
            styles.flexRow,
            styles.justifyContentCenter,
            styles.pt1,
            styles.mt1,
          ]}
        >
          <Text style={[styles.h1, styles.bold, styles.textMuted50]}>
            Service starts in:{" "}
          </Text>
          <Text style={[styles.h1, styles.bold]}>{renderServiceEnd()}</Text>
        </View>
      );
    };

    const renderItem = ({ item }) => {
      return (
        <View style={[styles.w100, styles.flex1, styles.mr5]}>
          <Text
            style={[
              styles.h2,
              styles.bold,
              styles.textCenter,
              styles.borderBottom,
              styles.borderMuted20,
              styles.mb2,
              styles.pb3,
            ]}
          >
            {item.title}
          </Text>
          <View
            style={[
              styles.w100,
              styles.flexRow,
              styles.justifyContentCenter,
              styles.alignCenter,
              styles.mb2,
            ]}
          >
            <Icon name="alarm" type="material-community-icons" size={18} />
            <Text style={[styles.h4, styles.textCenter, styles.ml1]}>
              {item.timeStart} - {item.timeEnd}
            </Text>
          </View>
          <View
            style={[
              styles.w100,
              styles.flexRow,
              styles.justifyContentCenter,
              styles.alignCenter,
              styles.mb2,
            ]}
          >
            <Icon name="person-outline" type="material-icons" size={18} />
            <Text style={[styles.h4, styles.textCenter, styles.ml1]}>
              {item.name}
            </Text>
          </View>
          <View
            style={[
              styles.w100,
              styles.flexRow,
              styles.justifyContentCenter,
              styles.alignCenter,
              styles.mb2,
            ]}
          >
            <Icon name="location-sharp" type="ionicon" size={18} />
            <Text style={[styles.h4, styles.textCenter, styles.ml1]}>
              {item.address}
            </Text>
          </View>
        </View>
      );
    };

    return (
      <FlatList
        data={ServicesDATA}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        extraData={[hideCard]}
        ListHeaderComponent={
          <View>
            <Ongoing OngoingDATA={OngoingDATA} />
            <PinkSidedCardHeader
              title="Upcoming Services"
              hideCardBtn
              hideCard={hideCard}
              setHideCard={setHideCard}
            />
          </View>
        }
        ListFooterComponent={
          <View style={[styles.flex1, styles.mb5, styles.pb5]}>
            <Overview OverviewDATA={OverviewDATA} />
            <Achievements
              navigation={navigation}
              AchievementsDATA={AchievementsDATA}
            />
            <ConvenienceFee ConvenienceFeeDATA={ConvenienceFeeDATA} />
          </View>
        }
      />
    );
  };

  return (
    <View style={[styles.mt3, styles.w100]}>
      {renderFlatlist({
        hideCard,
        OngoingDATA,
        ServicesDATA,
        AchievementsDATA,
        ConvenienceFeeDATA,
      })}
    </View>
  );
};

export default SkilledWorkerDashboardFlatlist;

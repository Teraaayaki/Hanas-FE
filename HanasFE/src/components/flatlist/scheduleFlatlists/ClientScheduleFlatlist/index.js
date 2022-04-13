import React, { Fragment, useState } from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

import {
  PinkSidedCardHeader,
  PinkSidedCardItem,
} from "@components/card/PinkSidedCardList";
import ContainedIcon from "@components/icons/ContainedIcon";
import styles from "./style";
import { colors } from "@constants";
import { padding } from "@constants";

const ClientScheduleFlatlist = ({ navigation, DATA }) => {
  let date = "_";

  const renderTopButton = ({ item }) => {
    const renderIcon = ({ item }) => {
      if (item.bookStatus == "Finished") {
        return (
          <Icon name="checkmark-circle-outline" type="ionicon" size={18} />
        );
      } else if (item.bookStatus == "Accepted") {
        return (
          <Icon name="calendar-clock" type="material-community" size={18} />
        );
      } else if (item.bookStatus == "Cancelled") {
        return <Icon name="x-circle" type="feather" size={18} />;
      }
    };
    const topBorderStyle = ({ item }) => {
      switch (item.bookStatus) {
        case "Finished":
          return styles.borderSuccess;
        case "Accepted":
          return styles.borderWarning;
        case "Cancelled":
          return styles.borderDanger;
        default:
          return styles.borderMuted50;
      }
    };
    return (
      <View
        style={[
          styles.w100,
          styles.border2,
          topBorderStyle({ item }),
          styles.bgLightGrey,
          styles.flexRow,
          styles.justifyContentCenter,
          styles.alignCenter,
          styles.py5,
          styles.rounded5,
        ]}
      >
        {renderIcon({ item })}
        <Text style={[styles.h5, styles.textBlack]}>
          {" "}
          {item.bookStatus == "Finished" ? "Completed" : item.bookStatus}
        </Text>
      </View>
    );
  };

  const renderBottomButton = ({ item }) => {
    if (item.bookStatus == "Finished" || item.bookStatus == "Cancelled") {
      return (
        <TouchableOpacity>
          <View
            style={[
              styles.w100,
              styles.border,
              styles.borderMuted50,
              styles.bgLightGrey,
              styles.flexRow,
              styles.justifyContentCenter,
              styles.alignCenter,
              styles.py5,
              styles.rounded5,
            ]}
          >
            <Text style={[styles.h5]}>Delete</Text>
          </View>
        </TouchableOpacity>
      );
    }
    if (item.bookStatus == "Accepted") {
      //Missing Condition: This button must only appear when Current Date is more than 3 days away from Booked Date & Time Start
      return (
        <TouchableOpacity>
          <View
            style={[
              styles.w100,
              styles.border,
              styles.borderMuted50,
              styles.bgLightGrey,
              styles.flexRow,
              styles.justifyContentCenter,
              styles.alignCenter,
              styles.py5,
              styles.rounded5,
            ]}
          >
            <Text style={[styles.h5]}>Cancel</Text>
          </View>
        </TouchableOpacity>
      );
    }
  };

  const renderCard = ({ item }) => {
    if (item.bookStatus != "Declined") {
      return (
        <View
          style={[styles.flex1, styles.flexRow, styles.alignCenter, styles.py3]}
        >
          <View style={[styles.flex4, styles.pl3]}>
            <TouchableOpacity>
              <Text
                style={[
                  styles.mx1,
                  styles.h3,
                  styles.textInfo,
                  styles.bold,
                  styles.underline,
                  styles.mb2,
                ]}
              >
                {item.workerName}
              </Text>
            </TouchableOpacity>
            <Text style={[styles.flex1, styles.mx1, styles.p, styles.my1]}>
              {item.serviceType} Service
            </Text>
            <Text style={[styles.flex1, styles.mx1, styles.p]}>
              {item.address}
            </Text>
            <View
              style={[
                styles.flex1,
                styles.flexRow,
                styles.mt3,
                styles.alignCenter,
              ]}
            >
              <Icon
                name="calendar-clock"
                type="material-community"
                color={colors.secondary}
              />
              <Text
                style={[styles.mx1, styles.bold, styles.p, styles.textMuted75]}
              >
                {item.timeStart} - {item.timeEnd}
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.flex2,
              styles.h100,
              styles.justifyContentSpaceEvenly,
              styles.pr3,
              styles.pl2,
            ]}
          >
            {renderTopButton({ item })}
            {renderBottomButton({ item })}
          </View>
        </View>
      );
    }
  };

  const renderTitle = ({ item }) => {
    if (item.date != date) {
      date = item.date;
      return (
        <View style={[styles.flex1, styles.mt2]}>
          <PinkSidedCardHeader title={item.date} />
        </View>
      );
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View>
        {renderTitle({ item })}

        {item.serviceType ? (
          <PinkSidedCardItem content={renderCard({ item })} />
        ) : (
          <PinkSidedCardItem
            disabled
            content={
              <Text style={[styles.textCenter, styles.h2, styles.textMuted75]}>
                NONE
              </Text>
            }
          />
        )}
      </View>
    );
  };

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingBottom: padding.p5 }}
    />
  );
};

export default ClientScheduleFlatlist;

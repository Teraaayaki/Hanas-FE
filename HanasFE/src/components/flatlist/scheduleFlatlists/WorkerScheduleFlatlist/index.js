import React from "react";
import { FlatList, View, Text } from "react-native";
import { Icon } from "react-native-elements";
import moment from "moment";

import {
  PinkSidedCardHeader,
  PinkSidedCardItem,
} from "@components/card/PinkSidedCardList";
import ContainedIcon from "@components/icons/ContainedIcon";
import styles from "./style";
import { colors } from "@constants";
import { padding } from "@constants";

const WorkerScheduleFlatlist = ({ navigation, DATA }) => {
  let date = "_";

  const renderCard = ({ item }) => {
    return (
      <View
        style={[styles.flex1, styles.flexRow, styles.alignCenter, styles.py3]}
      >
        <View style={[styles.flex1, styles.pl3]}>
          <View style={[styles.flex1, styles.flexRow, styles.mb2]}>
            <Text style={[styles.flex1, styles.mx1, styles.h3, styles.bold]}>
              Type of Service:
            </Text>
            <Text style={[styles.flex1, styles.mx1, styles.h3]}>
              {item.service_availed.service.service_type}
            </Text>
          </View>
          <View style={[styles.flex1, styles.flexRow, styles.my1]}>
            <Text style={[styles.flex1, styles.mx1, styles.bold, styles.p]}>
              Client Name
            </Text>
            <Text
              style={[styles.flex1, styles.mx1, styles.p]}
            >{`${item.client.first_name} ${item.client.middle_name} ${item.client.family_name} ${item.client.suffix}`}</Text>
          </View>
          <View style={[styles.flex1, styles.flexRow, styles.my1]}>
            <Text style={[styles.flex1, styles.mx1, styles.bold, styles.p]}>
              Address
            </Text>
            <Text style={[styles.flex1, styles.mx1, styles.p]}>
              {item.client.address}
            </Text>
          </View>
          <View
            style={[
              styles.flex1,
              styles.flexRow,
              styles.mt2,
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
              {item.book_type === "Multiple" &&
                `Until ${moment(item.booked_dateTimeEnd).format("LL")}`}

              {item.book_type === "Single" &&
                moment(item.booked_dateTimeStart).format("LT") +
                  "-" +
                  moment(item.booked_dateTimeEnd).format("LT")}
            </Text>
          </View>
        </View>
        <View style={[styles.mx5]}>
          {item.bookStatus === "Finished" ? (
            <ContainedIcon check disabled />
          ) : (
            <ContainedIcon check success pressable />
          )}
        </View>
      </View>
    );
  };

  const renderTitle = ({ item }) => {
    if (moment(item.booked_dateTimeStart).format("LL") !== date) {
      date = moment(item.booked_dateTimeStart).format("LL");
      return (
        <View style={[styles.flex1, styles.mt2]}>
          <PinkSidedCardHeader
            title={moment(item.booked_dateTimeStart).format("LL")}
          />
        </View>
      );
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View>
        {renderTitle({ item })}

        {item.service_availed.service.service_type ? (
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
      keyExtractor={(item) => item._id}
      contentContainerStyle={{ paddingBottom: padding.p5 }}
    />
  );
};

export default WorkerScheduleFlatlist;

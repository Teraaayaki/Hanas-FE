import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularImage from "@components/CircularImage";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import moment from "moment";

import Alert from "@helpers/alert";
import styles from "./styles";
import Button from "@components/Button";
import PinkSidedCard from "@components/card/PinkSidedCard";
import {
  PinkSidedCardHeader,
  PinkSidedCardItem,
} from "@components/card/PinkSidedCardList";
import Ongoing from "@components/dashboardCards/Ongoing";
import Overview from "@components/dashboardCards/Overview";
import Achievements from "@components/dashboardCards/Achievements";
import ConvenienceFee from "@components/dashboardCards/ConvenienceFee";
import { serviceImage } from "../../../../helper/serviceImage";
import { startService } from "../../../../redux/actions/workerDashboardActions";

const SkilledWorkerDashboardFlatlist = ({
  navigation,
  OngoingDATA,
  ServicesDATA,
  OverviewDATA,
  AchievementsDATA,
  ConvenienceFeeDATA,
}) => {
  const dispatch = useDispatch();
  const { ongoingService } = useSelector((state) => state.workerDashboard);

  const startServiceAlert = (item) => {
    if (ongoingService?._id) {
      Alert(
        () => {},
        "Message",
        "You currently have an ongoing service.",
        "",
        "OK",
        () => null
      );
    } else {
      Alert(
        () => dispatch(startService(item._id)),
        "Hold on!",
        "Are you sure you want to start the service?",
        "Cancel",
        "YES",
        () => null
      );
    }
  };

  const [hideCard, setHideCard] = useState(false);

  const renderFlatlist = ({ OngoingDATA, hideCard }) => {
    const renderCard = ({ item, index }) => {
      return (
        <PinkSidedCardItem
          hideCard={hideCard}
          content={renderUpcomingBody({ item, index })}
        />
      );
    };

    const renderUpcomingBody = ({ item, index }) => {
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
              <CircularImage
                imageSource={serviceImage(
                  item.service_availed.service.service_type
                )}
              />
            </View>
            {/* Body Right */}
            {renderItem({ item })}
          </View>
          {/* Card Footer */}
          <View style={[styles.flex1, styles.w100, styles.flexRow]}>
            {index === 0 ? footerMessage(item) : <></>}
          </View>
        </View>
      );
    };

    const footerMessage = (item) => {
      return (
        <View style={styles.flexedButton}>
          <Button
            title="Start Service"
            onPress={() => startServiceAlert(item)}
          />
        </View>
      );
    };

    const renderItem = ({ item }) => {
      return (
        <View style={[styles.w100, styles.flex1, styles.mr5]}>
          <View style={[styles.w100, styles.mr5, styles.mb5]}>
            <Text style={[styles.h2, styles.bold]}>
              {item.service_availed.service.service_type} Service
            </Text>
            <Text>{moment(item.booked_dateTimeStart).format("LL")}</Text>
          </View>
          <View
            style={[
              styles.w100,
              styles.flexRow,
              styles.alignCenter,
              styles.mb2,
            ]}
          >
            <Icon name="alarm" type="material-community-icons" size={18} />
            <Text style={[styles.h4, styles.textCenter, styles.ml1]}>
              {item.book_type === "Multiple" &&
                `Until ${moment(item.booked_dateTimeEnd).format("LL")}`}
              {item.book_type === "Single" &&
                moment(item.booked_dateTimeStart).format("LT") +
                  "-" +
                  moment(item.booked_dateTimeEnd).format("LT")}
            </Text>
          </View>
          <View
            style={[
              styles.w100,
              styles.flexRow,
              styles.alignCenter,
              styles.mb2,
            ]}
          >
            <Icon name="person-outline" type="material-icons" size={18} />
            <Text
              style={[styles.h4, styles.textCenter, styles.ml1]}
            >{`${item.client.first_name} ${item.client.family_name} ${item.client.suffix}`}</Text>
          </View>
          <View
            style={[
              styles.w100,
              styles.flexRow,
              styles.alignCenter,
              styles.mb2,
            ]}
          >
            <Icon name="location-sharp" type="ionicon" size={18} />
            <Text style={[styles.h4, styles.ml1]}>{item.client.address}</Text>
          </View>
        </View>
      );
    };

    return (
      <FlatList
        data={ServicesDATA}
        renderItem={renderCard}
        keyExtractor={(item) => item._id}
        extraData={[hideCard]}
        ListHeaderComponent={
          <View>
            <Ongoing OngoingDATA={OngoingDATA} />
            {ServicesDATA.length > 0 ? (
              <PinkSidedCardHeader
                title="Upcoming Services"
                hideCardBtn
                hideCard={hideCard}
                setHideCard={setHideCard}
              />
            ) : (
              <PinkSidedCard
                title="Upcoming Service"
                hideCardBtn
                content={
                  <Text style={[styles.flex1, styles.w100, styles.textCenter]}>
                    No Upcoming Service
                  </Text>
                }
                success
              />
            )}
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

import React, { useState } from "react";
import CircularImage from "@components/CircularImage";
import { useDispatch } from "react-redux";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import moment from "moment";

import styles from "./style";
import Button from "@components/Button";
import PinkSidedCard from "@components/card/PinkSidedCard";
import { serviceImage } from "../../../helper/serviceImage";
import { serviceFinished } from "../../../redux/actions/workerDashboardActions";

const SkilledWorkerDashboardFlatlist = ({ OngoingDATA }) => {
  const dispatch = useDispatch();

  const renderOngoingBody = () => {
    return (
      <View>
        {OngoingDATA?.service_availed ? (
          <View style={[styles.flex1, styles.w100]}>
            {/* Card Body */}
            <View style={[styles.flex1, styles.w100, styles.flexRow]}>
              {/* Body Left */}
              <View
                style={[styles.ml3, styles.justifyContentCenter, styles.alignCenter]}
              >
                <CircularImage
                  imageSource={serviceImage(
                    OngoingDATA.service_availed.service.service_type,
                  )}
                />
              </View>
              {/* Body Right */}
              {renderItem()}
            </View>
            {/* Card Footer */}
            <View style={[styles.flex1, styles.w100, styles.flexRow]}>
              {footerMessage()}
            </View>
          </View>
        ) : (
          <Text style={[styles.flex1, styles.w100, styles.textCenter]}>
            No Ongoing Service
          </Text>
        )}
      </View>
    );
  };

  const footerMessage = () => {
    return (
      <View
        style={[
          styles.w100,
          styles.flex1,
          styles.mx5,
          styles.flexRow,
          styles.justifyContentCenter,
          styles.pt1,
          styles.mt1,
        ]}
      >
        <Button
          title="Service Finished"
          onPress={() => dispatch(serviceFinished(OngoingDATA?._id))}
        />
      </View>
    );
  };

  const renderItem = () => {
    return (
      <View style={[styles.w100, styles.flex1, styles.mr5]}>
        <View
          style={[
            styles.w100,
            styles.flexRow,
            styles.alignCenter,
            styles.justifyContentSpaceBetween,
            styles.mr5,
            styles.mb5,
          ]}
        >
          <Text style={[styles.h2, styles.bold]}>
            {OngoingDATA.service_availed.service.service_type} Service
          </Text>
          <Text>{moment(OngoingDATA.booked_dateTimeStart).format("LL")}</Text>
        </View>
        <View style={[styles.w100, styles.flexRow, styles.alignCenter, styles.mb2]}>
          <Icon name="alarm" type="material-community-icons" size={18} />
          <Text style={[styles.h4, styles.textCenter, styles.ml1]}>
            {moment(OngoingDATA.booked_dateTimeStart).format("LT")} -
            {moment(OngoingDATA.booked_dateTimeEnd).format("LT")}
          </Text>
        </View>
        <View style={[styles.w100, styles.flexRow, styles.alignCenter, styles.mb2]}>
          <Icon name="person-outline" type="material-icons" size={18} />
          <Text style={[styles.h4, styles.textCenter, styles.ml1]}>
            {`${OngoingDATA.client.first_name} ${OngoingDATA.client.family_name} ${OngoingDATA.client.suffix}`}
          </Text>
        </View>
        <View style={[styles.w100, styles.flexRow, styles.alignCenter, styles.mb2]}>
          <Icon name="location-sharp" type="ionicon" size={18} />
          <Text style={[styles.h4, styles.textCenter, styles.ml1]}>
            {OngoingDATA.client.address}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <PinkSidedCard
      title="Ongoing Service"
      hideCardBtn
      content={renderOngoingBody()}
      success
    />
  );
};

export default SkilledWorkerDashboardFlatlist;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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

import {
  resetStatus,
  acceptBookingRequest,
  declineBookingRequest,
} from "@redux/actions/workerBookingActions";
import { ToastComponent, showToast } from "@helpers/toast";

const WorkerBookingRequestsFlatlist = ({ navigation, DATA }) => {
  const { status } = useSelector((state) => state.workerBookingRequests);
  const dispatch = useDispatch();
  let date = "_";

  useEffect(() => {
    if (status) {
      showToast("success", status, " ", () => dispatch(resetStatus()));
    }
  }, [status]);

  const renderContent = ({ item }) => {
    return (
      <View style={[styles.flex1, styles.flexRow, styles.alignCenter, styles.py3]}>
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
          <View style={[styles.flex1, styles.flexRow, styles.mt2, styles.alignCenter]}>
            <Icon
              name="calendar-clock"
              type="material-community"
              color={item.book_status == "Pending" ? colors.secondary : colors.muted75}
            />
            <Text style={[styles.mx1, styles.bold, styles.p, styles.textMuted75]}>
              {moment(item.booked_dateTimeStart).format("LT")} -
              {moment(item.booked_dateTimeEnd).format("LT")}
            </Text>
          </View>
        </View>
        {item.book_status === "Pending" ? (
          <View style={[styles.mx5, styles.h100, styles.justifyContentSpaceBetween]}>
            <ContainedIcon
              check
              success
              pressable
              onPress={() => {
                dispatch(acceptBookingRequest(item._id));
              }}
            />
            <ContainedIcon
              xMark
              danger
              pressable
              onPress={() => {
                dispatch(declineBookingRequest(item._id));
              }}
            />
          </View>
        ) : (
          <View style={[styles.mx5, styles.h100, styles.justifyContentCenter]}>
            <ContainedIcon
              xMark
              disabled
              pressable
              onPress={() => {
                console.log("Decline Request");
              }}
            />
          </View>
        )}
      </View>
    );
  };

  const renderTitle = ({ item }) => {
    if (moment(item.booked_dateTimeStart).format("LL") !== date) {
      date = moment(item.booked_dateTimeStart).format("LL");
      return (
        <View style={[styles.flex1, styles.mt2]}>
          <PinkSidedCardHeader title={moment(item.booked_dateTimeStart).format("LL")} />
        </View>
      );
    }
  };

  const renderCard = ({ item }) => {
    if (item.book_status === "Pending") {
      return <PinkSidedCardItem content={renderContent({ item })} />;
    } else if (item.bookStatus === "Declined") {
      return <PinkSidedCardItem disabled content={renderContent({ item })} />;
    }
    return (
      <PinkSidedCardItem
        disabled
        content={
          <Text style={[styles.px4, styles.textJustify]}>
            <Text style={[styles.bold]}>Error:</Text> This Card is accessing Data that
            is not a Booking Request.
          </Text>
        }
      />
    );
  };

  const renderItem = ({ item }) => {
    return (
      <View>
        {renderTitle({ item })}
        {renderCard({ item })}
      </View>
    );
  };

  return (
    <>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        contentContainerStyle={{ paddingBottom: padding.p5 }}
      />
      <ToastComponent />
    </>
  );
};

export default WorkerBookingRequestsFlatlist;

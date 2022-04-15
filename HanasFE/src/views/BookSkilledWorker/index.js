import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import dayjs from "dayjs";

import Header from "@components/Header";
import IconField from "@components/form/IconField";
import Button from "@components/Button";
import { colors } from "@constants";
import styles from "./style";
import { useSelector } from "react-redux";
import style from "./style";

const BookSkilledWorker = ({ navigation, route }) => {
  const { serviceName } = route.params;

  //DATE
  const [dateTimeStart, setDateTimeStart] = useState(new Date());
  const [dateTimeEnd, setDateTimeEnd] = useState(new Date());

  const [dateStartModal, setDateTimeStartModal] = useState(false);
  const [dateEndModal, setDateTimeEndModal] = useState(false);

  //TIME
  const [timeStart, setTimeStart] = useState(new Date());
  const [timeEnd, setTimeEnd] = useState(new Date());

  const [timeStartModal, setTimeStartModal] = useState(false);
  const [timeEndModal, setTimeEndModal] = useState(false);

  const { profileData } = useSelector((state) => state.clientWorkerView);

  const { user } = useSelector((state) => state.userDetails);

  console.log(dateTimeStart, dateTimeEnd, timeStart, timeEnd);
  //DATE
  const changeStartDate = (e, dob) => {
    setDateTimeStartModal(false);
    dob && setDateTimeStart(dob);
  };
  const changeEndDate = (e, dob) => {
    setDateTimeEndModal(false);
    dob && setDateTimeEnd(dob);
  };

  //TIME
  const changeStartTime = (e, dob) => {
    setTimeStartModal(false);
    dob && setTimeStart(dob);
  };

  const changeEndTime = (e, dob) => {
    setTimeEndModal(false);
    dob && setTimeEnd(dob);
  };

  const renderHeader = () => {
    return (
      <View style={[styles.borderBottom, styles.borderMuted25, styles.px2]}>
        <Text
          style={[styles.h2, styles.px5, styles.bold, styles.pt3, styles.pb4]}
        >
          Request Information
        </Text>
      </View>
    );
  };

  const renderServiceInfoBox = () => {
    return (
      <View
        style={[
          styles.flex1,
          styles.px5,
          styles.pb5,
          styles.pt3,
          styles.borderBottom,
          styles.borderMuted25,
        ]}
      >
        <View style={[styles.flex1, styles.flexRow, styles.mb5]}>
          <View style={[styles.flex1]}>
            <Text style={[styles.bold,  styles.h3]}>Type of Service:</Text>
          </View>
          <View style={[styles.flex1]}>
            <Text style={[styles.textRight]}>{serviceName} Services</Text>
          </View>
        </View>
        <View style={[styles.flex1, styles.flexRow, styles.mb3]}>
          <View style={[styles.flex1]}>
            <Text style={[styles.p]}>Skilled Worker Name</Text>
          </View>
          <View style={[styles.flex1]}>
            <Text style={[styles.p, styles.textRight]}>
              {`${profileData.first_name} ${profileData.middle_name} ${profileData.family_name}`}{" "}
            </Text>
          </View>
        </View>
        <View style={[styles.flex1, styles.flexRow, styles.mb3]}>
          <View style={[styles.flex1]}>
            <Text style={[styles.p]}>Address</Text>
          </View>
          <View style={[styles.flex1]}>
            <Text style={[styles.p, styles.textRight]}>
              {profileData.address}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderPersonalInfoBox = () => {
    return (
      <View
        style={[
          styles.flex1,
          styles.px5,
          styles.pb5,
          styles.pt3,
          styles.borderBottom,
          styles.borderMuted25,
        ]}
      >
        <View style={[styles.flex1, styles.flexRow, styles.mb5]}>
          <View style={[styles.flex1]}>
            <Text style={[styles.bold,  styles.h3]}>Personal Information:</Text>
          </View>
        </View>
        <View style={[styles.flex1, styles.flexRow, styles.mb3]}>
          <View style={[styles.flex1]}>
            <Text style={[styles.p]}>Name</Text>
          </View>
          <View style={[styles.flex1]}>
            <Text style={[styles.p, styles.textRight]}>
              {`${user.first_name} ${user.middle_name} ${user.last_name}`}
            </Text>
          </View>
        </View>
        <View style={[styles.flex1, styles.flexRow, styles.mb3]}>
          <View style={[styles.flex1]}>
            <Text style={[styles.p]}>Address</Text>
          </View>
          <View style={[styles.flex1]}>
            <Text style={[styles.p, styles.textRight]}>{user.address}</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderHourlyRateInfoBox = () => {
    return (
      <View style={[styles.flex1, styles.px5, styles.pb5, styles.pt3,styles.borderBottom,styles.borderMuted25,]}>
        <View style={[styles.flex1, styles.flexRow, styles.mb5]}>
          <View style={[styles.flex1]}>
            <Text style={[styles.bold, styles.h3]}>Booking Information:</Text>
          </View>
        </View>
        <View style={[ styles.flex1, styles.flexRow, styles.justifyContentSpaceBetween, styles.alignCenter]}>
          <Text style={styles.h4}>Hourly Rate:</Text>
          <Text style={[styles.h4, styles.textRight]}>
            PHP {profileData.myServicesData[0].hourly_rate}
          </Text>
        </View>
        <View style={[ styles.flex1, styles.flexRow, styles.justifyContentSpaceBetween, styles.alignCenter]}>
          <Text style={styles.h4}>Total Hours:</Text>
          <Text style={[styles.h4, styles.textRight]}>
            {profileData.myServicesData[0].hourly_rate} hr(s)
          </Text>
        </View>
        <View style={[ styles.flex1, styles.flexRow, styles.justifyContentSpaceBetween, styles.alignCenter]}>
          <Text style={styles.h4, styles.bold}>Subtotal:</Text>
          <Text style={[styles.h4, styles.textRight, styles.bold]}>
            PHP {profileData.myServicesData[0].hourly_rate} 
          </Text>
        </View>
        
      </View>
    );
  };

  const renderTotalPayment = () => {
    return(
      <View style={[styles.flex1, styles.px5, styles.pb5, styles.pt3]}>
        <View style={[ styles.flex1, styles.flexRow, styles.justifyContentSpaceBetween, styles.alignCenter]}>
          <Text style={styles.h3}>Convenience Fee (5%):</Text>
          <Text style={[styles.h4, styles.textRight]}>
            PHP {profileData.myServicesData[0].hourly_rate} 
          </Text>
        </View>
        <View style={[ styles.flex1, styles.flexRow, styles.justifyContentSpaceBetween, styles.alignCenter]}>
          <Text style={[styles.bold, styles.h3]}>Total Cost:</Text>
          <Text style={[styles.h3, styles.textRight, styles.bold]}>
            PHP {profileData.myServicesData[0].hourly_rate} 
          </Text>
        </View>
      </View>
    )
  }

  return (
    <View style={[styles.body]}>
      <Header title={"Book Skilled Worker"} />
      <ScrollView style={[styles.h100, styles.w100]}>
        <View style={[styles.m3, styles.pt3, styles.flex1]}>
          <View
            style={[
              styles.flex1,
              styles.bgWhite,
              styles.rounded,
              styles.border,
              styles.borderMuted25,
            ]}
          >
            {renderHeader()}
            <View style={[styles.px5]}>
              {renderServiceInfoBox()}
              {renderPersonalInfoBox()}
              {renderHourlyRateInfoBox()}
              {renderTotalPayment()}
            </View>
          </View>
        </View>
        <View
          style={[
            styles.bgLightGrey,
            styles.m3,
            styles.p3,
            styles.flex1,
            styles.rounded,
            styles.border,
            styles.borderMuted25,
          ]}
        >
          <Text style={[styles.h3, styles.bold, styles.mb4]}>
            Start of Service
          </Text>
          <TouchableOpacity onPress={() => setDateTimeStartModal(true)}>
            <IconField
              iconName="calendar"
              iconType="font-awesome"
              iconColor={colors.secondary}
              iconSize={24}
              editable={false}
              value={dayjs(dateTimeStart).format("MMMM D, YYYY")}
              placeholder="Set date and time"
            />
          </TouchableOpacity>
          {dateStartModal && (
            <DateTimePicker
              onChange={changeStartDate}
              value={dateTimeStart}
              minimumDate={new Date(1950, 0, 1)}
            />
          )}
          <Text style={[styles.h3, styles.bold, styles.mb4]}>Start Time</Text>
          <TouchableOpacity onPress={() => setTimeStartModal(true)}>
            <IconField
              iconName="schedule"
              iconType="material"
              iconColor={colors.secondary}
              iconSize={24}
              editable={false}
              value={dayjs(timeStart).format("hh:mm:ss A")}
              placeholder="Set date and time"
            />
          </TouchableOpacity>
          {timeStartModal && (
            <DateTimePicker
              mode="time"
              onChange={changeStartTime}
              value={timeStart}
            />
          )}
        </View>

        <View
          style={[
            styles.bgLightGrey,
            styles.m3,
            styles.p3,
            styles.flex1,
            styles.rounded,
            styles.border,
            styles.borderMuted25,
          ]}
        >
          <Text style={[styles.h3, styles.bold, styles.mb4]}>
            End of Service
          </Text>
          <TouchableOpacity onPress={() => setDateTimeEndModal(true)}>
            <IconField
              iconName="calendar"
              iconType="font-awesome"
              iconColor={colors.secondary}
              iconSize={24}
              editable={false}
              value={dayjs(dateTimeEnd).format("MMMM D, YYYY")}
              placeholder="Set date and time"
            />
          </TouchableOpacity>
          {dateEndModal && (
            <DateTimePicker
              onChange={changeEndDate}
              value={dateTimeEnd}
              minimumDate={new Date(1950, 0, 1)}
            />
          )}
          <Text style={[styles.h3, styles.bold, styles.mb4]}>End Time</Text>
          <TouchableOpacity onPress={() => setTimeEndModal(true)}>
            <IconField
              iconName="schedule"
              iconType="material"
              iconColor={colors.secondary}
              iconSize={24}
              editable={false}
              value={dayjs(timeEnd).format("hh:mm:ss A")}
              placeholder="Set date and time"
            />
          </TouchableOpacity>
          {timeEndModal && (
            <DateTimePicker
              mode="time"
              onChange={changeEndTime}
              value={timeEnd}
            />
          )}
        </View>

        <View style={[styles.py3, styles.px5, styles.m5]}>
          <View style={[styles.px5, styles.mx5]}>
            <Button
              title="Submit Request"
              onPress={() => navigation.navigate("Home")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default BookSkilledWorker;

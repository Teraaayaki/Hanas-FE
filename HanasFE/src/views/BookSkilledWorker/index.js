import React, {useState} from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import dayjs from "dayjs";

import Header from "@components/Header";
import IconField from "@components/form/IconField";
import Button from "@components/Button";
import { colors } from "@constants";
import styles from "./style";




const BookSkilledWorker = ({ navigation }) => {
  const [date_start, setStartDate] = useState(new Date());
  const [date_end, setEndDate] = useState(new Date());
  const [dateStartModal, setStartDateModal] = useState(false);
  const [dateEndModal, setEndDateModal] = useState(false);

  const changeStartDate = (e,dob) => {
    setStartDateModal(false);
    dob && setStartDate(dob);
  };
  const changeEndDate = (e,dob) => {
    setEndDateModal(false);
    dob && setEndDate(dob);
  };
  const DATA = {
    serviceType: "Electrical Service",
    workerName: "Mary Therese Sun S. Alegre",
    workerAddress: "Minglanilla, Cebu",
    personalName: "Hosea M. Barriga",
    personalAddress: "Danao, Cebu",
    hourlyRate: "200.00",
  };

  const renderHeader = () => {
    return (
      <View style={[styles.borderBottom, styles.borderMuted25, styles.px2]}>
        <Text
          style={[styles.h2, styles.px5, styles.bold, styles.pt3, styles.pb4]}
        >
          Request Informaton
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
            <Text style={[styles.bold]}>Type of Service:</Text>
          </View>
          <View style={[styles.flex1]}>
            <Text style={[styles.textRight]}>{DATA.serviceType}</Text>
          </View>
        </View>
        <View style={[styles.flex1, styles.flexRow, styles.mb3]}>
          <View style={[styles.flex1]}>
            <Text style={[styles.p]}>Skilled Worker Name</Text>
          </View>
          <View style={[styles.flex1]}>
            <Text style={[styles.p, styles.textRight]}>{DATA.workerName}</Text>
          </View>
        </View>
        <View style={[styles.flex1, styles.flexRow, styles.mb3]}>
          <View style={[styles.flex1]}>
            <Text style={[styles.p]}>Address</Text>
          </View>
          <View style={[styles.flex1]}>
            <Text style={[styles.p, styles.textRight]}>
              {DATA.workerAddress}
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
            <Text style={[styles.bold]}>Personal Information:</Text>
          </View>
        </View>
        <View style={[styles.flex1, styles.flexRow, styles.mb3]}>
          <View style={[styles.flex1]}>
            <Text style={[styles.p]}>Name</Text>
          </View>
          <View style={[styles.flex1]}>
            <Text style={[styles.p, styles.textRight]}>
              {DATA.personalName}
            </Text>
          </View>
        </View>
        <View style={[styles.flex1, styles.flexRow, styles.mb3]}>
          <View style={[styles.flex1]}>
            <Text style={[styles.p]}>Address</Text>
          </View>
          <View style={[styles.flex1]}>
            <Text style={[styles.p, styles.textRight]}>
              {DATA.personalAddress}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderHourlyRateInfoBox = () => {
    

    return (
      <View style={[styles.flex1, styles.px5, styles.pb5, styles.pt3]}>
        <View
          style={[
            styles.flex1,
            styles.flexRow,
            styles.justifyContentSpaceBetween,
            styles.alignCenter,
          ]}
        >
          <Text style={[styles.bold, styles.h3]}>Hourly Rate:</Text>
          <Text style={[styles.h3, styles.textRight, styles.bold]}>
            PHP {DATA.hourlyRate}
          </Text>
        </View>
      </View>
    );
  };

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
          <TouchableOpacity onPress={() => setStartDateModal(true)}>
            <IconField
              iconName="calendar"
              iconType="font-awesome"
              iconColor={colors.secondary}
              iconSize={24}
              value={dayjs(date_start).format("MMMM D, YYYY hh:mm A")}
              placeholder="Set date and time"
              
            />
          </TouchableOpacity>
          {dateStartModal && (
              <DateTimePicker
                onChange={changeStartDate}
                value={date_start}
                minimumDate={new Date(1950, 0, 1)}
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
          <TouchableOpacity onPress={() => setEndDateModal(true)}>
            <IconField
              iconName="calendar"
              iconType="font-awesome"
              iconColor={colors.secondary}
              iconSize={24}
              value={dayjs(date_end).format("MMMM D, YYYY hh:mm A")}
              placeholder="Set date and time"
              
            />
          </TouchableOpacity>
          {dateEndModal && (
              <DateTimePicker
                onChange={changeEndDate}
                value={date_end}
                minimumDate={new Date(1950, 0, 1)}
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

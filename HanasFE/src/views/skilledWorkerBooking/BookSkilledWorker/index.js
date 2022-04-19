import React, { useState, useEffect } from "react";

import {
  ActivityIndicator,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import dayjs from "dayjs";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { useDispatch, useSelector } from "react-redux";
import { ALERT_TYPE, Dialog, Root, Toast } from 'react-native-alert-notification';

import Header from "@components/Header";
import IconField from "@components/form/IconField";
import Button from "@components/Button";
import { colors, fontWeight } from "@constants";
import styles from "./style";
import { ToastComponent, showToast } from "@helpers/toast";
import { bookSkilledWorker } from "@redux/actions/clientBookingActions";

const BookSkilledWorker = ({ navigation, route }) => {
  const { serviceName } = route.params;
  const { profileData } = useSelector((state) => state.clientWorkerView);
  const { user } = useSelector((state) => state.userDetails);
  const { loading } = useSelector((state) => state.clientBooking);
  const dispatch = useDispatch();

  //BOOKING DATA STATE ARRAY
  const [bookingDataArray, setBookingDataArray] = useState([]);

  // DATE STATUS
  const [singleDayStatus, setSingleDayStatus] = useState(false);
  const [multipleDayEndStatus, setMultipleDayEndStatus ] = useState(false);

  //TAB VIEW
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  // COMPUTATION VALUES
  const [totalSingleHours, setTotalSingleHours] = useState("");
  const [totalMultipleHours, setTotalMultipleHours] = useState("");
  const [subTotal, setSubTotal] = useState(0);
  const [convenienceFee, setConvenienceFee] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

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

  const errorToast = (mess) => {
    console.log("Showing Toast");
    showToast("error", mess, "Please try again");
  };

  const diff = (start, end) => {
    start = start.split(":");
    end = end.split(":");
    let startDate = new Date(0, 0, 0, start[0], start[1], 0);
    let endDate = new Date(0, 0, 0, end[0], end[1], 0);
    let diff = endDate.getTime() - startDate.getTime();
    let hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    let minutes = Math.floor(diff / 1000 / 60);

    // If using time pickers with 24 hours format, add the below line get exact hours
    if (hours < 0) hours = hours + 24;

    return parseFloat(`${hours}.${minutes}`);
  };

  //DATE
  const changeStartDate = (e, dob) => {
    setDateTimeStartModal(false);
    dob && setDateTimeStart(dob);
   
    let returnedDate = bookingDataArray.find(bookDate =>  dayjs(dob).format("MMMDYYYY") === dayjs(bookDate).format("MMMDYYYY")) ? setSingleDayStatus(false) : setSingleDayStatus(true);
    console.log("DOB" , dob);
    // returnedDate ? setTimeStart(false) : setTimeStart(true);
    // console.log(returnedDate);
  };
  const changeEndDate = (e, dob) => {
    setDateTimeEndModal(false);
    if (!dob) {
      return;
    }
    if (dateTimeStart.getDate() >= dob.getDate()) {
      errorToast("Date end must not be lesser than or equal to date start");
      let newDateEnd = dateTimeEnd.setDate(dateTimeStart.getDate() + 1);
      setDateTimeEnd(new Date(newDateEnd));
    } else {
      dob && setDateTimeEnd(dob);
    }
  };

  //TIME
  const changeStartTime = (e, dob) => {
    setTimeStartModal(false);
    dob && setTimeStart(dob);
  };

  const changeEndTime = (e, dob) => {
    setTimeEndModal(false);

    // Validations
    let timeStartFormatted = dayjs(timeStart).format("HH:mm");
    let timeEndFormatted = dayjs(dob).format("HH:mm");
    let newTimeEnd;

    if (!dob) {
      newTimeEnd = new Date(timeStart.getTime() + 1000 * 60 * 60);
      setTimeEnd(newTimeEnd);
    } else if (timeStartFormatted >= timeEndFormatted) {
      errorToast("Time end must be greater than time start");
      newTimeEnd = new Date(timeStart.getTime() + 1000 * 60 * 60);
      setTimeEnd(newTimeEnd);
    } else {
      setTimeEnd(dob);
    }

    // Calculations
    let newStartTime = dayjs(timeStart).format("HH:mm:ss");
    let newEndTime =
      timeStartFormatted >= timeEndFormatted
        ? dayjs(newTimeEnd).format("HH:mm:ss")
        : dayjs(dob).format("HH:mm:ss");
    let timeDifference = diff(newStartTime, newEndTime);
    let subTotalValue =
      profileData.myServicesData[0].hourly_rate * timeDifference;
    let convenienceFeeValue = subTotalValue * 0.05;

    setTotalSingleHours(timeDifference.toFixed(2));
    setSubTotal(subTotalValue.toFixed(2));
    setConvenienceFee(convenienceFeeValue.toFixed(2));
    setTotalCost((convenienceFeeValue + subTotalValue).toFixed(2));
  };

  const setTotalHoursRendered = (e) => {
    let subTotalValue = profileData.myServicesData[0].hourly_rate * parseInt(e);
    let convenienceFeeValue = subTotalValue * 0.05;

    setTotalMultipleHours(e);
    setSubTotal(subTotalValue.toFixed(2));
    setConvenienceFee(convenienceFeeValue.toFixed(2));
    setTotalCost((convenienceFeeValue + subTotalValue).toFixed(2));
  };

  const handleSubmitSingleDay = () => {
    if (!totalSingleHours) {
      console.log("error missings data");
      errorToast("Please input some data");
      return;
    }

    let timeStartFormatted = dayjs(timeStart).format("HH:mm");
    let timeEndFormatted = dayjs(timeEnd).format("HH:mm");
    if (timeStartFormatted >= timeEndFormatted) {
      console.log("timeStart is greater than or equal to timeEnd");
      errorToast("Time end must be greater than time start");
      let newTimeEnd = new Date(timeStart.getTime() + 1000 * 60 * 60);
      setTimeEnd(newTimeEnd);
    } else {
      const data = {
        service_availed: profileData.myServicesData[0]._id,
        worker: profileData._id,
        client: user.id,
        book_type: "Single",
        booked_dateTimeStart: new Date(
          dateTimeStart.getDate() + timeStart.getTime()
        ),
        booked_dateTimeEnd: new Date(
          dateTimeStart.getDate() + timeEnd.getTime()
        ),
        total_cost: totalCost,
        total_hours: totalSingleHours,
        book_status: "Pending",
        conv_fee: convenienceFee,
      };
      console.log("dispatched booking");
      dispatch(bookSkilledWorker(data, navigation));
    }
  };

  const handleSubmitMultipleDay = () => {
    if (!totalMultipleHours) {
      console.log("error missings data");
      errorToast("Please input some data");
      return;
    }

    if (dateTimeStart.getDate() >= dateTimeEnd.getDate()) {
      errorToast("Date end must not be lesser than or equal to date start");
      let newDateEnd = dateTimeEnd.setDate(dateTimeStart.getDate() + 1);
      setDateTimeEnd(new Date(newDateEnd));
      setDateTimeEndModal(false);
    } else {
      const data = {
        service_availed: profileData.myServicesData[0]._id,
        worker: profileData._id,
        client: user.id,
        book_type: "Multiple",
        booked_dateTimeStart: dateTimeStart,
        booked_dateTimeEnd: dateTimeEnd,
        total_cost: totalCost,
        total_hours: totalMultipleHours,
        book_status: "Pending",
        conv_fee: convenienceFee,
      };
      dispatch(bookSkilledWorker(data, navigation));
    }
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
            <Text style={[styles.bold, styles.h3]}>Type of Service:</Text>
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
            <Text style={[styles.bold, styles.h3]}>Personal Information:</Text>
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

  const renderHourlyRateInfoBox = (service_mode) => {
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
            <Text style={[styles.bold, styles.h3]}>Booking Information:</Text>
          </View>
        </View>
        <View
          style={[
            styles.flex1,
            styles.flexRow,
            styles.justifyContentSpaceBetween,
            styles.alignCenter,
          ]}
        >
          <Text style={styles.h4}>Hourly Rate:</Text>
          <Text style={[styles.h4, styles.textRight]}>
            PHP {profileData.myServicesData[0].hourly_rate}
          </Text>
        </View>
        <View
          style={[
            styles.flex1,
            styles.flexRow,
            styles.justifyContentSpaceBetween,
            styles.alignCenter,
          ]}
        >
          <Text style={styles.h4}>Total Hours:</Text>
          <Text style={[styles.h4, styles.textRight]}>
            {service_mode === "Single" ? totalSingleHours : totalMultipleHours}
            hr(s)
          </Text>
        </View>
        <View
          style={[
            styles.flex1,
            styles.flexRow,
            styles.justifyContentSpaceBetween,
            styles.alignCenter,
          ]}
        >
          <Text style={[styles.h4, styles.bold]}>Subtotal:</Text>
          <Text style={[styles.h4, styles.textRight, styles.bold]}>
            PHP {subTotal}
          </Text>
        </View>
      </View>
    );
  };

  const renderTotalPayment = () => {
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
          <Text style={styles.h3}>Convenience Fee (5%):</Text>
          <Text style={[styles.h4, styles.textRight]}>
            PHP {convenienceFee}
          </Text>
        </View>
        <View
          style={[
            styles.flex1,
            styles.flexRow,
            styles.justifyContentSpaceBetween,
            styles.alignCenter,
          ]}
        >
          <Text style={[styles.bold, styles.h3]}>Total Cost:</Text>
          <Text style={[styles.h3, styles.textRight, styles.bold]}>
            PHP {totalCost}
          </Text>
        </View>
      </View>
    );
  };

  useEffect(() => {
    let date = new Date();
    setTimeEnd(new Date(date.getTime() + 1000 * 60 * 60));

    let newDateEnd = date.setDate(date.getDate() + 1);
    setDateTimeEnd(new Date(newDateEnd));

    let temp = profileData.myServicesData[0].bookingsData.map(bookingData => bookingData.booked_dateTimeStart);
    setBookingDataArray([...temp]);
  }, []);
  
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <Header title={"Book Skilled Worker (Single Day)"} />
        <View style={[styles.body]}>
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
                {renderHourlyRateInfoBox("Single")}
                {renderTotalPayment()}
              </View>
            </View>
          </View>
          <View style={[
              styles.bgLightGrey,
              styles.m3,
              styles.p3,
              styles.flex1,
              styles.rounded,
              styles.border,
              styles.borderMuted25,
            ]}>
            <Text style={styles.bold}>Note:</Text>
            <View style={styles.flexStartContainer}> 
              <Text style={styles.success_notif}></Text>
              <Text> - green indicates that the skilled worker has no other resposibility on this date.</Text>
            </View>
            <View style={styles.flexStartContainer}> 
              <Text style={styles.fail_notif}></Text>
              <Text style={{textAlign: "justify"}}> - red indicates that the skilled worker has an exisiting job on this date.</Text>
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
            <View style={styles.flexBetweenContainer}>
              <Text style={[styles.h3, styles.bold, styles.mb4]}>
                Day of Service
              </Text>
              <Text style={ singleDayStatus ? styles.fail_notif : styles.success_notif} ></Text>
            </View>
            
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
                minimumDate={new Date()}
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
                value={dayjs(timeStart).format("hh:mm A")}
                placeholder="Set date and time"
              />
            </TouchableOpacity>
            {timeStartModal && (
              <DateTimePicker
                mode="time"
                onChange={changeStartTime}
                value={timeStart}
                minimumDate={new Date()}
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
                value={dayjs(timeEnd).format("hh:mm A")}
                placeholder="Set date and time"
              />
            </TouchableOpacity>
            {timeEndModal && (
              <DateTimePicker
                mode="time"
                onChange={changeEndTime}
                value={timeEnd}
                minimumDate={new Date()}
              />
            )}
          </View>

          <View style={[styles.py3, styles.px5, styles.m5]}>
            <View style={[styles.px5, styles.mx5, styles.my3]}>
              {loading && (
                <ActivityIndicator size="large" color={colors.secondary} />
              )}
              <Button title="Book for Multiple Days" onPress={() => navigation.navigate("BookSkilledWorkerMultipleDays", {serviceName})} />
            </View>
            <View style={[styles.px5, styles.mx5]}>
              {loading && (
                <ActivityIndicator size="large" color={colors.secondary} />
              )}
              
              <Button title="Submit Request" onPress={handleSubmitSingleDay} />
            </View>
          </View>
        </ScrollView>
      </View>
      <ToastComponent />
    </View>
  );
};

export default BookSkilledWorker;

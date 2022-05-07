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

import Header from "@components/Header";
import IconField from "@components/form/IconField";
import Button from "@components/Button";
import { colors, fontWeight } from "@constants";
import styles from "./style";
import { ToastComponent, showToast } from "@helpers/toast";
import { bookSkilledWorker } from "@redux/actions/clientBookingActions";
import getBookedDateSingle from "@utils/getBookedDateSingle";
import getTimeDifference from "@utils/getTimeDifference";

const BookSkilledWorker = ({ navigation, route }) => {
  const { serviceName } = route.params;
  const { profileData } = useSelector((state) => state.clientWorkerView);
  const { user } = useSelector((state) => state.userDetails);
  const { loading } = useSelector((state) => state.clientBooking);
  const dispatch = useDispatch();

  //BOOKING DATA STATE ARRAY
  const [bookingSingleDataArray, setBookingSingleDataArray] = useState([]);
  const [bookingMultipleDataArray, setBookingMultipleDataArray] = useState([]);

  // DATE STATUS
  const [singleDayStatus, setSingleDayStatus] = useState(true);

  // COMPUTATION VALUES
  const [totalSingleHours, setTotalSingleHours] = useState("");
  const [totalMultipleHours, setTotalMultipleHours] = useState("");
  const [subTotal, setSubTotal] = useState(0);
  const [convenienceFee, setConvenienceFee] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  //DATE
  const [dateTimeStart, setDateTimeStart] = useState(new Date());
  const [dateStartModal, setDateTimeStartModal] = useState(false);

  //TIME
  const [timeStart, setTimeStart] = useState(new Date());
  const [timeEnd, setTimeEnd] = useState(new Date());
  const [timeStartModal, setTimeStartModal] = useState(false);
  const [timeEndModal, setTimeEndModal] = useState(false);

  // HELPER FUNCTIONS
  const errorToast = (mess) => {
    console.log("Showing Toast");
    showToast("error", mess, "Please try again");
  };

  const formatStartandEndTime = (
    dateTimeStart,
    scheduleTimeStart,
    scheduleTimeEnd
  ) => {
    const dateFormatStart = dayjs(dateTimeStart)
      .format("YYYY-MM-DDT")
      .toString();
    const timeFormatStart = dayjs(scheduleTimeStart)
      .format("HH:mm:ssZ")
      .toString();
    const timeFormatEnd = dayjs(scheduleTimeEnd).format("HH:mm:ssZ").toString();
    const newDateTimeStart = new Date(dateFormatStart + timeFormatStart);
    const newDateTimeEnd = new Date(dateFormatStart + timeFormatEnd);

    return { newDateTimeStart, newDateTimeEnd };
  };

  const setTotalHoursRendered = (e) => {
    let minutesAmount =
      ((e % 1) / 0.6) * profileData.myServicesData[0].hourly_rate;
    let hoursAmount = parseInt(e) * profileData.myServicesData[0].hourly_rate;
    let subTotalValue = hoursAmount + minutesAmount;
    let convenienceFeeValue = subTotalValue * 0.05;

    setTotalMultipleHours(e);
    setSubTotal((subTotalValue - convenienceFeeValue).toFixed(2));
    setConvenienceFee(convenienceFeeValue.toFixed(2));
    setTotalCost(subTotalValue.toFixed(2));
  };

  const validateTime = (scheduleTimeStart, scheduleTimeEnd) => {
    const { newDateTimeStart, newDateTimeEnd } = formatStartandEndTime(
      dateTimeStart,
      scheduleTimeStart,
      scheduleTimeEnd
    );

    let tempArray = bookingSingleDataArray.filter(
      (bookDate) =>
        dayjs(bookDate).format("MMDDYY") ===
        dayjs(newDateTimeStart).format("MMDDYY")
    );

    if (tempArray.length === 0) {
      return true;
    } else {
      let inputtedTime = [];
      let validationArray = [];
      for (
        let i = newDateTimeStart.getHours();
        i <= newDateTimeEnd.getHours();
        i++
      ) {
        if (i === newDateTimeStart.getHours()) {
          inputtedTime.push(new Date(newDateTimeStart));
        } else if (i === newDateTimeEnd.getHours()) {
          inputtedTime.push(newDateTimeEnd);
        } else {
          inputtedTime.push(new Date(newDateTimeStart.setHours(i)));
        }
      }

      tempArray.map((bookDate) => {
        inputtedTime.map((inputtedTime) => {
          validationArray.push(
            dayjs(bookDate).format("HH") === dayjs(inputtedTime).format("HH")
          );
        });
      });
      console.log("inputtedTime", inputtedTime);
      console.log("Temp Array", tempArray);
      console.log("Validation Array", validationArray);
      return validationArray.includes(true) ? false : true;
    }
  };

  //DATE
  const changeStartDate = (e, dob) => {
    setDateTimeStartModal(false);
    dob && setDateTimeStart(dob);

    let returnedDate = bookingMultipleDataArray.map(
      (bookDate) =>
        dayjs(dob).format("MMDDYY") === dayjs(bookDate).format("MMDDYY")
    );

    returnedDate.includes(true)
      ? setSingleDayStatus(false)
      : setSingleDayStatus(true);
  };

  //TIME
  const changeStartTime = (e, dob) => {
    setTimeStartModal(false);
    dob && setTimeStart(dob);
  };

  const changeEndTime = (e, dob) => {
    setTimeEndModal(false);

    const validTime = validateTime(timeStart, dob);
    console.log("Time is valid?: ", validTime);

    !validTime ? setSingleDayStatus(false) : setSingleDayStatus(true);

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

    let timeDifference = getTimeDifference(newStartTime, newEndTime);
    setTotalSingleHours(timeDifference);
    setTotalHoursRendered(timeDifference);
  };

  const handleSubmitSingleDay = () => {
    const { newDateTimeStart, newDateTimeEnd } = formatStartandEndTime(
      dateTimeStart,
      timeStart,
      timeEnd
    );

    const validTime = validateTime(timeStart, timeEnd);

    !validTime ? setSingleDayStatus(false) : setSingleDayStatus(true);

    if (!validTime) {
      errorToast("There is a conflict of schedule");
      return;
    }

    if (singleDayStatus === true) {
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
          booked_dateTimeStart: newDateTimeStart,
          booked_dateTimeEnd: newDateTimeEnd,
          total_cost: totalCost,
          total_hours: totalSingleHours,
          book_status: "Pending",
          conv_fee: convenienceFee,
        };
        dispatch(bookSkilledWorker(data, navigation));
      }
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
            {parseInt(totalMultipleHours)} hour/s{" "}
            {parseInt((totalMultipleHours * 100) % 100)} mins{" "}
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
          <Text style={styles.h4}>Convenience Fee (5%):</Text>
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
    setTimeStart(new Date(date.getTime() + 1000 * 60 * 60));
    setTimeEnd(new Date(date.getTime() + 1000 * 60 * 120));

    const { singleDates, multipleDates } = getBookedDateSingle(
      profileData.myServicesData[0].bookingsData
    );

    console.log(singleDates);
    console.log(multipleDates);
    setBookingSingleDataArray([...singleDates]);
    setBookingMultipleDataArray([...multipleDates]);

    let returnedDate = multipleDates.map(
      (bookDate) =>
        dayjs(dateTimeStart).format("MMDDYY") ===
        dayjs(bookDate).format("MMDDYY")
    );

    returnedDate.includes(true)
      ? setSingleDayStatus(false)
      : setSingleDayStatus(true);
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
            <Text style={styles.bold}>Note:</Text>
            <View style={styles.flexStartContainer}>
              <Text style={styles.success_notif}></Text>
              <Text>
                {" "}
                - green indicates that the skilled worker has no other
                resposibility on this date.
              </Text>
            </View>
            <View style={styles.flexStartContainer}>
              <Text style={styles.fail_notif}></Text>
              <Text style={{ textAlign: "justify" }}>
                {" "}
                - red indicates that the skilled worker has an exisiting job on
                this date.
              </Text>
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
              {/* {bookingDataArray.length == 0 &&  */}
              <Text
                style={
                  singleDayStatus ? styles.success_notif : styles.fail_notif
                }
              ></Text>
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
              <Button
                title="Book for Multiple Days"
                onPress={() =>
                  navigation.navigate("BookSkilledWorkerMultipleDays", {
                    serviceName,
                  })
                }
              />
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

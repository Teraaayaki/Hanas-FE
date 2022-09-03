import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";

import Header from "@components/Header";
import IconField from "@components/form/IconField";
import Button from "@components/Button";
import styles from "./style";
import { colors } from "@constants";
import { ToastComponent, showToast } from "@helpers/toast";
import { bookSkilledWorker } from "@redux/actions/clientBookingActions";
import getBookedDateMultiple from "@utils/getBookedDateMultiple";
import getMultipleDays from "@utils/getMultipleDays";

const BookSkilledWorker = ({ navigation, route }) => {
  const { serviceName } = route.params;
  const { profileData } = useSelector((state) => state.clientWorkerView);
  const { user } = useSelector((state) => state.userDetails);
  const { loading } = useSelector((state) => state.clientBooking);
  const dispatch = useDispatch();

  //BOOKING DATA STATE ARRAY
  const [bookingDataArray, setBookingDataArray] = useState([]);
  const [mergedDataArray, setMergedDataArray] = useState([]);

  // DATE STATUS
  const [multipleDayStartStatus, setMultipleDayStartStatus] = useState(true);

  // COMPUTATION VALUES
  const [totalMultipleHours, setTotalMultipleHours] = useState("");
  const [subTotal, setSubTotal] = useState(0);
  const [convenienceFee, setConvenienceFee] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  //DATE
  const [dateTimeStart, setDateTimeStart] = useState(new Date());
  const [dateTimeEnd, setDateTimeEnd] = useState(new Date());

  const [dateStartModal, setDateTimeStartModal] = useState(false);
  const [dateEndModal, setDateTimeEndModal] = useState(false);

  const errorToast = (mess) => {
    console.log("Showing Toast");
    showToast("error", mess, "Please try again");
  };

  //DATE
  const bookedDateValidation = (mergeBookedDateArray) => {
    let bookedDateValidationArray = [];

    mergeBookedDateArray.map((mergeBookedDate) =>
      bookingDataArray.map((bookingData) => {
        bookedDateValidationArray.push(
          dayjs(mergeBookedDate).format("MMDDYY") ===
            dayjs(bookingData).format("MMDDYY")
        );
      })
    );

    return bookedDateValidationArray;
  };

  const changeStartDate = (e, dob) => {
    setDateTimeStartModal(false);
    dob && setDateTimeStart(dob);
  };

  const changeEndDate = (e, dob) => {
    setDateTimeEndModal(false);

    if (!dob) {
      return;
    }

    let mergeBookedDateArray = getMultipleDays(dateTimeStart, dob);
    console.log("Merged Booked Date", mergeBookedDateArray);
    setMergedDataArray([...mergeBookedDateArray]);

    let bookedDateValidationArray = bookedDateValidation(mergeBookedDateArray);

    bookedDateValidationArray.includes(true)
      ? setMultipleDayStartStatus(false)
      : setMultipleDayStartStatus(true);

    if (
      dateTimeStart.getMonth() === dob.getMonth() &&
      dateTimeStart.getDate() >= dob.getDate()
    ) {
      errorToast("Date end must not be lesser than or equal to date start");
      let newDateEnd = dateTimeEnd.setDate(dateTimeStart.getDate() + 1);
      setDateTimeEnd(new Date(newDateEnd));
    } else if (dateTimeStart.getMonth() > dob.getMonth()) {
      errorToast("Date end must not be lesser than or equal to date start");
      let newDateEnd = new Date(
        dateTimeEnd.setDate(dateTimeStart.getDate() + 1)
      );
      newDateEnd.setMonth(dateTimeEnd.getMonth() + 1);
      setDateTimeEnd(new Date(newDateEnd));
    } else {
      dob && setDateTimeEnd(dob);
    }
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

  const handleSubmitMultipleDay = () => {
    if (multipleDayStartStatus === false) {
      errorToast("Worker has conflicts on specified dates");
      return;
    }

    if (mergedDataArray.length === 0) {
      errorToast("Please set start and end date");
      return;
    }

    const hoursRenderedOffset = mergedDataArray.length * 24;
    if (totalMultipleHours > hoursRenderedOffset) {
      errorToast("Invalid total number of hours");
      return;
    }

    if (!totalMultipleHours) {
      console.log("error missings data");
      errorToast("Please input some data");
      return;
    }

    if (isNaN(totalMultipleHours)) {
      errorToast("Please enter a valid number");
      return;
    }

    if (dateTimeStart.getDate() >= dateTimeEnd.getDate()) {
      errorToast("Date end must not be lesser than or equal to date start");
      let newDateEnd = dateTimeEnd.setDate(dateTimeStart.getDate() + 1);
      setDateTimeEnd(new Date(newDateEnd));
      setDateTimeEndModal(false);
      return;
    }

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
      hourly_rate: profileData.myServicesData[0].hourly_rate,
      address: profileData.address,
    };
    dispatch(bookSkilledWorker(data, navigation));
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
    let newDateEnd = date.setDate(date.getDate() + 1);
    setDateTimeEnd(new Date(newDateEnd));

    const mergedArray = getBookedDateMultiple(
      profileData.myServicesData[0].bookingsData
    );

    setBookingDataArray([...mergedArray]);
  }, []);

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <Header title={"Book (Multiple Days)"} />
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
                {renderHourlyRateInfoBox("Multiple")}
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
                Start of Service
              </Text>
              <Text
                style={
                  multipleDayStartStatus
                    ? styles.success_notif
                    : styles.fail_notif
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
            <View style={styles.flexBetweenContainer}>
              <Text style={[styles.h3, styles.bold, styles.mb4]}>
                End of Service
              </Text>
            </View>

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
                minimumDate={new Date()}
              />
            )}

            <Text style={[styles.h3, styles.bold, styles.mb4]}>
              Total Hours to be rendered
            </Text>

            <IconField
              iconName="schedule"
              iconType="material"
              iconColor={colors.secondary}
              iconSize={24}
              keyboardType="number-pad"
              value={totalMultipleHours}
              onChangeText={(e) => setTotalHoursRendered(e)}
              placeholder="Enter a number"
            />
          </View>

          <View style={[styles.py3, styles.px5, styles.m5]}>
            <View style={[styles.px5, styles.mx5, styles.my3]}>
              <Button
                title="Book for Single Day"
                onPress={() =>
                  navigation.navigate("BookSkilledWorker", { serviceName })
                }
              />
            </View>
            <View style={[styles.px5, styles.mx5]}>
              {/* {loading && (
                <ActivityIndicator size="large" color={colors.secondary} />
              )} */}
              <Button
                title="Submit Request"
                loading={loading}
                onPress={handleSubmitMultipleDay}
              />
            </View>
          </View>
        </ScrollView>
      </View>
      <ToastComponent />
    </View>
  );
};

export default BookSkilledWorker;

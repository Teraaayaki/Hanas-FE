import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "@axios";
import dayjs from "dayjs";

import { RegisterActions } from "./types";

export const worker = (isWorker, navigation) => (dispatch) => {
  console.log("Is user a worker: " + isWorker);
  dispatch({
    type: RegisterActions.REGISTER_WORKER,
    payload: isWorker,
  });
  navigation.navigate("RegisterNumber");
};

export const registerNumber = (number, navigation) => (dispatch) => {
  console.log("Number received by action: " + number);
  dispatch({
    type: RegisterActions.REGISTER_NUMBER,
    payload: number,
  });
  console.log("Number Registered");
  navigation.navigate("RegisterOTP");
};

export const verifyNumber = (otp, number, navigation) => (dispatch) => {
  dispatch({
    type: RegisterActions.REGISTER_LOADING,
  });
  //   axios logic
  setTimeout(() => {
    navigation.navigate("RegisterDetailsPageOne");
    console.log("verifying number: " + number + " and " + otp);
    dispatch({
      type: RegisterActions.REGISTER_NUMBER,
      payload: number,
    });
    dispatch({
      type: RegisterActions.REGISTER_SUCCESS,
    });
  }, 3000);
};

export const setUserDetails = (user, navigation) => (dispatch) => {
  dispatch({
    type: RegisterActions.REGISTER_USER,
    payload: user,
  });
  navigation.navigate("RegisterDetailsPageTwo");
};

export const setLocation = (address, navigation) => (dispatch) => {
  dispatch({
    type: RegisterActions.REGISTER_LOCATION,
    payload: address,
  });
  navigation.navigate("RegisterDetailsPageTwo");
};

export const registerUser = (user) => async (dispatch) => {
  let {
    firstName,
    middleName,
    lastName,
    suffix,
    email,
    password,
    number,
    address,
    dob,
    sex,
    isWorker,
  } = user;
  console.log("User Details:\n", user);
  console.log(dayjs(dob).format("YYYY-MM-DD"));
  dispatch({
    type: RegisterActions.REGISTER_LOADING,
  });
  try {
    console.log("Axios Call");
    let { data } = await axios.post("/api/client/register", {
      firstName,
      middleName,
      lastName,
      suffix,
      email,
      password,
      mobileNo: parseInt(number),
      address,
      dob: dayjs(dob).format("YYYY-MM-DD"),
      sex,
      isWorker,
    });
    if (data) {
      console.log("Data is: ", data);
      dispatch({
        type: RegisterActions.REGISTER_SUCCESS,
      });
    }
  } catch (err) {
    let { error } = err.response.data;
    console.log("Error catched: ", error);
    dispatch({
      type: RegisterActions.REGISTER_FAIL,
      payload: error,
    });
  }
};

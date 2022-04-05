import dayjs from "dayjs";

import { setItem } from "@helpers/asyncStorage";
import axios from "@axios";

import { RegisterActions, UserLoginActions } from "./types";

export const resetError = () => (dispatch) => {
  dispatch({
    type: RegisterActions.REGISTER_FAIL,
  });
};

export const worker = (isWorker, navigation) => (dispatch) => {
  console.log("Is user a worker: " + isWorker);
  dispatch({
    type: RegisterActions.REGISTER_WORKER,
    payload: isWorker,
  });
  navigation.navigate("RegisterNumber");
};

export const registerNumber = (number, navigation) => async (dispatch) => {
  console.log("Number received by action: " + number);
  dispatch({
    type: RegisterActions.REGISTER_LOADING,
  });

  try {
    console.log("axios call");
    let { data } = await axios.post("/api/auth/verify-number", {
      number,
    });

    dispatch({
      type: RegisterActions.REGISTER_NUMBER,
      payload: number,
    });

    if (data.success) {
      navigation.navigate("RegisterOTP");
    }
  } catch (err) {
    let { error } = err.response.data;
    console.log(error);
    dispatch({
      type: RegisterActions.REGISTER_FAIL,
      payload: error,
    });
  }
};

export const verifyNumber = (otp, number, navigation) => async (dispatch) => {
  dispatch({
    type: RegisterActions.REGISTER_LOADING,
  });
  console.log("verifying number: " + number + " and " + otp);
  try {
    let { data } = await axios.post("/api/auth/verify-number-otp", {
      number,
      otp: parseInt(otp),
    });
    if (data.success) {
      dispatch({
        type: RegisterActions.REGISTER_SUCCESS,
      });
      dispatch({
        type: RegisterActions.REGISTER_NUMBER,
        payload: number,
      });
      navigation.navigate("RegisterDetailsPageOne");
    }
  } catch (err) {
    let { error } = err.response.data;
    dispatch({
      type: RegisterActions.REGISTER_FAIL,
      payload: error,
    });
  }
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

export const registerUser = (user, navigation) => async (dispatch) => {
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

  dispatch({
    type: RegisterActions.REGISTER_LOADING,
  });

  try {
    console.log("Axios Call");
    let { data } = await axios.post("/api/auth/register", {
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
      setItem("token", data.token);
      setItem("is_worker", JSON.stringify(data.is_worker));

      dispatch({
        type: UserLoginActions.USER_LOGIN_SUCCESS,
        payload: true,
      });
      dispatch({
        type: RegisterActions.REGISTER_SUCCESS,
      });

      console.log("Navigate to another page");
      if (data.is_worker) {
        navigation.navigate("GetVerified");
      } else {
        navigation.navigate("Dashboard");
      }
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

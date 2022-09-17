import dayjs from "dayjs";

import { setItem } from "@helpers/asyncStorage";
import axios from "@axios";

import { RegisterActions, UserDetailActions, UserLoginActions } from "./types";

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

export const setLocation = (address, navigation, nextPage) => (dispatch) => {
  dispatch({
    type: RegisterActions.REGISTER_LOCATION,
    payload: address,
  });

  navigation.navigate(nextPage);
};

export const resetLocation = () => (dispatch) => {
  dispatch({
    type: RegisterActions.REGISTER_LOCATION,
  });
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

    // SUCCESSFUL REGISTER
    if (data) {
      setItem("token", data.token);
      setItem("is_worker", JSON.stringify(data.is_worker));

      // Store user in userDetails Object (Local Copy)
      let userDetails = {
        id: data.user_id,
        first_name: firstName,
        middle_name: middleName,
        last_name: lastName,
        suffix,
        email,
        mobile_no: number,
        address,
        birthdate: dob,
        sex,
        is_verified: false,
        profile_pic: "none",
      };

      // USED IN DETERMINING WHICH SCREENS TO DISPLAY (SEE /routes FOLDER)
      dispatch({
        type: UserLoginActions.USER_LOGIN_SUCCESS,
        payload: data.is_worker,
      });
      // RESETS REGISTER REDUCER STATE
      dispatch({
        type: RegisterActions.REGISTER_LOGOUT,
      });
      // INSTEAD OF SENDING API REQUEST, DETAILS CREATED IN REGISTER ARE USED
      dispatch({
        type: UserDetailActions.USER_DETAILS_SUCCESS,
        payload: userDetails,
      });

      console.log("Navigate to another page");
      if (data.is_worker) {
        setItem("is_verified", JSON.stringify(false));
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

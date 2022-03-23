import AsyncStorage from "@react-native-async-storage/async-storage";
import { RegisterActions } from "./types";

export const worker = (isWorker) => async (dispatch) => {
  await AsyncStorage.setItem("worker", isWorker);
  dispatch({
    type: RegisterActions.REGISTER_WORKER,
    payload: isWorker,
  });
};

export const registerNumber = (number) => async (dispatch) => {
  console.log("Number received by action: " + number);
  await AsyncStorage.setItem("number", number);
  dispatch({
    type: RegisterActions.REGISTER_SUCCESS,
    payload: true,
  });
  console.log("Number Registered");
};

export const verifyNumber = (otp) => async (dispatch) => {
  dispatch({
    type: RegisterActions.REGISTER_LOADING,
  });
  let number = await AsyncStorage.getItem("number");
  //   axios logic
  setTimeout(() => {
    console.log("verifying number: " + number + " and " + otp);
    dispatch({
      type: RegisterActions.REGISTER_SUCCESS,
      payload: true,
    });
  }, 5000);
};

export const registerUser = (user) => async (dispatch) => {
  //  logic
};

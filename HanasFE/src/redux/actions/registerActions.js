import AsyncStorage from "@react-native-async-storage/async-storage";
import { RegisterActions } from "./types";

export const worker = (isWorker) => async (dispatch) => {
  console.log("Is user a worker: " + isWorker);
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

export const verifyNumber = (otp, navigation) => async (dispatch) => {
  dispatch({
    type: RegisterActions.REGISTER_LOADING,
  });
  let number = await AsyncStorage.getItem("number");
  //   axios logic
  setTimeout(() => {
    navigation.navigate("RegisterDetailsPageOne");
    console.log("verifying number: " + number + " and " + otp);
    dispatch({
      type: RegisterActions.REGISTER_SUCCESS,
      payload: true,
    });
  }, 3000);
};

export const setUserDetails = (user, navigation) => async (dispatch) => {
  await AsyncStorage.setItem("user", JSON.stringify(user));
  console.log(user);
  navigation.navigate("RegisterDetailsPageTwo");
};

export const setLocation = (address, navigation) => (dispatch) => {
  dispatch({
    type: RegisterActions.REGISTER_LOCATION,
    data: address,
  });
};

export const registerUser = (user) => async (dispatch) => {
  //  logic
};

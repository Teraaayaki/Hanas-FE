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
  dispatch({
    type: RegisterActions.REGISTER_LOADING,
  });
  await AsyncStorage.setItem("number", number);
  dispatch({
    type: RegisterActions.REGISTER_SUCCESS,
    payload: true,
  });
};

export const verifyNumber = (otp) => async (dispatch) => {
  dispatch({
    type: RegisterActions.REGISTER_LOADING,
  });
  await AsyncStorage.getItem("number");
  //   axios logic
  dispatch({
    type: RegisterActions.REGISTER_SUCCESS,
    payload: true,
  });
};

export const registerUser = (user) => async (dispatch) => {
  //  logic
};

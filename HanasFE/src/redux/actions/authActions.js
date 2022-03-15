import { UserAuthActions } from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "@helper/axios";

export const userLogin = (email, password) => async (dispatch) => {
  let token = await AsyncStorage.getItem("token");

  if (token) {
    dispatch({ type: UserAuthActions.USER_LOGIN_SUCCESS, payload: token });
  } else {
    doUserLogin(email, password, dispatch);
  }
};

const doUserLogin = async (email, password, dispatch) => {
  let response = await axios.post("/api/client/login", { email, password });

  if (response.error) {
    return dispatch({
      type: UserAuthActions.USER_LOGIN_FAIL,
      payload: response.error,
    });
  }

  await AsyncStorage.setItem("token", response.token);
  dispatch({
    type: UserAuthActions.USER_LOGIN_SUCCESS,
    payload: response.token,
  });
};

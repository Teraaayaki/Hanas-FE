import { UserLoginActions } from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "@helpers";

export const userLogin = (email, password) => async (dispatch) => {
  let token = await AsyncStorage.getItem("token");
  let user_id = await AsyncStorage.getItem("user_id");

  if (token) {
    dispatch({ type: UserLoginActions.USER_LOGIN_SUCCESS, payload: user_id });
  } else {
    console.log("No Token");
    doUserLogin(email, password, dispatch);
  }
};

const doUserLogin = async (email, password, dispatch) => {
  try {
    console.log("Axios Call");
    let { data } = await axios.post("/api/client/login", {
      email,
      password,
    });
    console.log("Storing Token");
    AsyncStorage.setItem("token", data.token);
    AsyncStorage.setItem("user_id", data.user_id);
    dispatch({
      type: UserLoginActions.USER_LOGIN_SUCCESS,
      payload: true,
    });
  } catch (err) {
    const { error } = err.response.data;
    console.log(error);
    dispatch({ type: UserLoginActions.USER_LOGIN_FAIL, payload: error });
  }
};

export const userLogout = () => async (dispatch) => {
  console.log("Removing items");
  await AsyncStorage.removeItem("user_id");
  await AsyncStorage.removeItem("token");
  console.log("Succesfully removed items");
  dispatch({
    type: UserLoginActions.USER_LOGOUT,
  });
};

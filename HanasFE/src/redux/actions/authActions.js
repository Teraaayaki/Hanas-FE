import { UserLoginActions } from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "@helpers";

export const userLogin = (email, password) => async (dispatch) => {
  let token = await AsyncStorage.getItem("token");

  if (token) {
    dispatch({ type: UserLoginActions.USER_LOGIN_SUCCESS, payload: token });
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
    await AsyncStorage.setItem("token", data.token);
    dispatch({
      type: UserAuthActions.USER_LOGIN_SUCCESS,
      payload: data.token,
    });
  } catch (err) {
    const { error } = err.response.data;
    console.log(error);
    dispatch({ type: UserLoginActions.USER_LOGIN_FAIL, payload: error });
  }
};

export const userLogout = () => async (dispatch) => {
  await AsyncStorage.removeItem("token");
  dispatch({
    type: UserLoginActions.USER_LOGOUT,
  });
};

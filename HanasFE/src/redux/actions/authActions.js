import { UserLoginActions } from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "@axios";

export const userLogin = (email, password) => async (dispatch) => {
  let token = await AsyncStorage.getItem("token");

  if (token) {
    console.log("Token Already Exists - userLoginAction");
    dispatch({ type: UserLoginActions.USER_LOGIN_SUCCESS, payload: true });
  } else {
    console.log("No Token");
    doUserLogin(email, password, dispatch);
  }
};

const doUserLogin = async (email, password, dispatch) => {
  if (!email && !password) {
    console.log("No email and pass provided");
    dispatch({ type: UserLoginActions.USER_LOGIN_FAIL });
    return;
  }

  try {
    console.log("Axios Call");
    let { data } = await axios.post("/api/client/login", {
      email,
      password,
    });
    console.log("Storing Token");
    await AsyncStorage.setItem("token", data.token);
    await AsyncStorage.setItem("user_id", data.user_id);
    await AsyncStorage.setItem("is_worker", data.is_worker);
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
  console.log("Dispatching Logout");

  dispatch({
    type: UserLoginActions.USER_LOGOUT,
  });
  console.log("Dispatched Logout");
  return;
};

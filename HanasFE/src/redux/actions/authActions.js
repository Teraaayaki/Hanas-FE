import { UserLoginActions, RegisterActions } from "./types";
import axios from "@axios";
import { getItem, setItem, removeItem } from "@helpers/asyncStorage";

export const userLogin = (navigation, email, password) => async (dispatch) => {
  let token = await getItem("token");
  let isWorker = JSON.parse(await getItem("is_worker"));
  dispatch({ type: UserLoginActions.USER_LOADING, payload: true });

  if (token) {
    console.log("Token Already Exists - userLoginAction");
    dispatch({ type: UserLoginActions.USER_LOGIN_SUCCESS, payload: isWorker });

    if (isWorker) {
      navigation.navigate("GetVerified");
    } else {
      navigation.navigate("Dashboard");
    }
  } else {
    console.log("No Token");
    doUserLogin(navigation, email, password, dispatch);
  }
};

const doUserLogin = async (navigation, email, password, dispatch) => {
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
    setItem("token", data.token);
    setItem("is_worker", JSON.stringify(data.is_worker));
    dispatch({
      type: UserLoginActions.USER_LOGIN_SUCCESS,
      payload: data.is_worker,
    });

    if (data.is_worker) {
      navigation.navigate("GetVerified");
    } else {
      navigation.navigate("Dashboard");
    }
  } catch (err) {
    console.log(err);
    const { error } = err.response.data;
    console.log(error);
    dispatch({ type: UserLoginActions.USER_LOGIN_FAIL, payload: error });
  }
};

export const userLogout = () => async (dispatch) => {
  console.log("Removing items");
  removeItem("token");
  removeItem("is_worker");
  console.log("Succesfully removed items");
  console.log("Dispatching Logout");

  dispatch({
    type: UserLoginActions.USER_LOGOUT,
  });
  dispatch({
    type: RegisterActions.REGISTER_LOGOUT,
  });
  console.log("Dispatched Logout");
  return;
};

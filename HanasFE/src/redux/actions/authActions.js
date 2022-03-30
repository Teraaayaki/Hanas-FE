import { UserLoginActions } from "./types";
import axios from "@axios";
import { getItem, setItem, removeItem } from "@helpers/asyncStorage";

export const userLogin = (email, password) => async (dispatch) => {
  let token = await getItem("token");
  let isWorker = JSON.parse(await getItem("is_worker"));
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
    setItem("token", data.token);
    setItem("user_id", data.user_id);
    setItem("is_worker", JSON.stringify(data.is_worker));
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
  removeItem("user_id");
  removeItem("token");
  removeItem("is_worker");
  console.log("Succesfully removed items");
  console.log("Dispatching Logout");

  dispatch({
    type: UserLoginActions.USER_LOGOUT,
  });
  console.log("Dispatched Logout");
  return;
};

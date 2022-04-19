import axios from "@axios";
import { getItem, setItem, removeItem } from "@helpers/asyncStorage";
import {
  UserLoginActions,
  RegisterActions,
  UserDetailActions,
  WorkerServiceActions,
} from "./types";
import { workerServicesInitialValues } from "../reducers/workerServicesReducer";
import { userDetailsInitialValues } from "../reducers/userDetailsReducer";

export const userLogin = (navigation, email, password) => async (dispatch) => {
  // removeItem("token");
  let token = await getItem("token");
  let isWorker = JSON.parse(await getItem("is_worker"));
  dispatch({ type: UserLoginActions.USER_LOADING, payload: true });
  
  if (token) {
    console.log("Token Already Exists - userLoginAction");

    try {
      let { data } = await axios.get("/api/auth/get-details", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (data) {
        dispatch({
          type: UserLoginActions.USER_LOGIN_SUCCESS,
          payload: isWorker,
        });
        dispatch({
          type: UserDetailActions.USER_DETAILS_SUCCESS,
          payload: data.user,
        });

        if (isWorker) {
          navigation.navigate("GetVerified");
        } else {
          navigation.navigate("Dashboard");
        }
      }
    } catch (err) {
      let { error } = err.response.data;
      dispatch({
        type: UserDetailActions.USER_DETAILS_FAIL,
        payload: error,
      });
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
    let { data } = await axios.post("/api/auth/login", {
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

    dispatch({
      type: UserDetailActions.USER_DETAILS_SUCCESS,
      payload: data.user,
    });

    if (data.is_worker) {
      setItem("is_verified", JSON.stringify(data.is_verified));
      navigation.navigate("Dashboard");
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
  dispatch({
    type: UserDetailActions.USER_DETAILS_LOGOUT,
    payload: userDetailsInitialValues,
  });
  dispatch({
    type: WorkerServiceActions.WORKER_SERVICE_LOGOUT,
    payload: workerServicesInitialValues,
  });
  console.log("Dispatched Logout");

  return;
};

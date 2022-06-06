import axios from "@helpers/axios";
import { getItem } from "@helpers/asyncStorage";
import { UserDetailActions } from "./types";
import { RegisterActions } from "./types";

// No use =============
export const getUserDetails = () => async (dispatch) => {
  dispatch({ type: UserDetailActions.USER_DETAILS_LOADING });
  console.log("GetUserDetailsAction");
  try {
    let token = await getItem("token");
    let { data } = await axios.get("/api/worker/get-details", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (data.user) {
      dispatch({
        type: UserDetailActions.USER_DETAILS_SUCCESS,
        payload: data.user,
      });
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: UserDetailActions.USER_DETAILS_FAIL, error: err });
  }
};
// NO use ================

export const changeErrorState = (error) => (dispatch) => {
  dispatch({ type: UserDetailActions.USER_DETAILS_FAIL, payload: error });
};

export const changeSuccessState = (success) => (dispatch) => {
  dispatch({
    type: UserDetailActions.USER_DETAILS_CHANGE_SUCCESS,
    payload: success,
  });
};

export const changeAddress = (address) => async (dispatch) => {
  let token = await getItem("token");

  // SET ADDRESS STATE BACK TO EMPTY STRING ""
  dispatch({
    type: RegisterActions.REGISTER_LOCATION,
    payload: "",
  });

  try {
    const { data } = await axios.patch(
      "/api/edit/address",
      { address },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    if (data) {
      dispatch({
        type: UserDetailActions.USER_DETAILS_CHANGE_ADDRESS,
        payload: address,
      });
      console.log(data.message);
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: UserDetailActions.USER_DETAILS_FAIL, error: err });
  }
};

export const changeAccountInfo = (profile_pic, email) => async (dispatch) => {
  let token = await getItem("token");

  try {
    const { data } = await axios.patch(
      "/api/edit/account-info",
      { profile_pic, email },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    if (data) {
      console.log(data.message);
      dispatch({
        type: UserDetailActions.USER_DETAILS_CHANGE_ACCOUNT_INFO,
        payload: {
          profile_pic,
          email,
        },
      });
      dispatch({
        type: UserDetailActions.USER_DETAILS_CHANGE_SUCCESS,
        payload: true,
      });
    }
  } catch (err) {
    dispatch({
      type: UserDetailActions.USER_DETAILS_FAIL,
      payload: err.response.data.error,
    });
  }
};

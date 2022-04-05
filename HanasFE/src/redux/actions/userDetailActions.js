import axios from "@helpers/axios";
import { getItem } from "@helpers/asyncStorage";
import { UserDetailActions } from "./types";

export const getUserDetails = () => async (dispatch) => {
  dispatch({ type: UserDetailActions.USER_DETAILS_LOADING });
  console.log("GetUserDetailsAction");
  try {
    let token = getItem("token");
    let { user } = axios.get("/api/worker/get-details", {
      headers: `Bearer ${token}`,
    });
    console.log(user);
    if (user) {
      dispatch({
        type: UserDetailActions.USER_DETAILS_SUCCESS,
        payload: user,
      });
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: UserDetailActions.USER_DETAILS_FAIL, error: err });
  }
};

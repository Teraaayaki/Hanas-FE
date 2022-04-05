import axios from "@helpers/axios";
import { getItem } from "@helpers/asyncStorage";
import { UserDetailActions } from "./types";

// No use
//prettier-ignore
export const getUserDetails = () => async (dispatch) => {
  dispatch({ type: UserDetailActions.USER_DETAILS_LOADING });
  console.log("GetUserDetailsAction");
  try {
    let token = await getItem("token");
    let { data } = await axios.get("/api/worker/get-details", {
      headers: { "Authorization": `Bearer ${token}` },
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

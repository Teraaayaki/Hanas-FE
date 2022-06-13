import { FeedbackActions } from "./types";
import axios from "@axios";
import { getItem } from "@helpers/asyncStorage";

export const resetSuccess = () => async (dispatch) => {
  dispatch({ type: FeedbackActions.FEEDBACK_RESET_SUCCESS });
};

export const resetError = () => async (dispatch) => {
  dispatch({ type: FeedbackActions.FEEDBACK_FAIL });
};

export const addFeedback = (DATA) => async (dispatch) => {
  let token = await getItem("token");

  dispatch({ type: FeedbackActions.FEEDBACK_LOADING });

  console.log("DATA", DATA);

  try {
    let { data } = await axios.post(
      "/api/client/give-feedback",
      { DATA },
      { headers: { authorization: `Bearer ${token}` } }
    );

    if (data) {
      dispatch({ type: FeedbackActions.FEEDBACK_SUCCESS });
    }
  } catch (err) {
    console.log(err);
    let error = err.response.data ? err.response.data : err;
    dispatch({ type: FeedbackActions.FEEDBACK_FAIL, payload: error });
  }
};

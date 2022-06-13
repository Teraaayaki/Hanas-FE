import { ScheduleActions } from "./types";
import axios from "@axios";
import { getItem } from "@helpers/asyncStorage";

export const resetError = (DATA) => async (dispatch) => {
  dispatch({ type: ScheduleActions.SCHEDULE_RESET_FAIL });
};

export const removeSchedule = (DATA) => async (dispatch) => {
  let token = await getItem("token");

  dispatch({ type: ScheduleActions.SCHEDULE_LOADING });

  try {
    console.log("Removing Completed Sched");
    let { data } = await axios.post(
      "/api/client/remove-schedule",
      { DATA },
      { headers: { authorization: `Bearer ${token}` } }
    );

    if (data) {
      dispatch({ type: ScheduleActions.SCHEDULE_SUCCESS });
    }
  } catch (err) {
    console.log(err);
    let error = err.response.data ? err.response.data : err;
    dispatch({
      type: ScheduleActions.SCHEDULE_FAIL,
      payload: error,
    });
  }
};

export const removeCancelledBookSchedule = (DATA) => async (dispatch) => {
  let token = await getItem("token");

  dispatch({ type: ScheduleActions.SCHEDULE_LOADING });

  try {
    let { data } = await axios.post(
      "api/client/remove-cancelled-booking",
      { DATA },
      { headers: { authorization: `Bearer ${token}` } }
    );

    if (data) {
      dispatch({ type: ScheduleActions.SCHEDULE_SUCCESS });
    }
  } catch (err) {
    console.log(err);
    let error = err.response.data ? err.response.data : err;
    dispatch({ type: ScheduleActions.SCHEDULE_FAIL, payload: error });
  }
};

export const cancelBookingSchedule = (DATA) => async (dispatch) => {
  let token = await getItem("token");

  dispatch({ type: ScheduleActions.SCHEDULE_LOADING });

  try {
    let { data } = await axios.post(
      "api/client/cancel-booking-schedule",
      { DATA },
      { headers: { authorization: `Bearer ${token}` } }
    );

    if (data) {
      dispatch({ type: ScheduleActions.SCHEDULE_SUCCESS });
    }
  } catch (err) {
    console.log(err);
    let error = err.response.data ? err.response.data : err;
    dispatch({ type: ScheduleActions.SCHEDULE_FAIL, payload: error });
  }
};

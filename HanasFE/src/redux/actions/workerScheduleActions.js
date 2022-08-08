import { WorkerScheduleActions } from "./types";
import axios from "@axios";
import { getItem } from "@helpers/asyncStorage";

export const getSchedules = () => async (dispatch) => {
  let token = await getItem("token");

  try {
    dispatch({
      type: WorkerScheduleActions.FETCHING_SCHEDULES,
    });

    let { data } = await axios.get("/api/worker/accepted-bookings", {
      headers: { authorization: `Bearer ${token}` },
    });

    dispatch({
      type: WorkerScheduleActions.FETCH_SCHEDULES,
      payload: data.acceptedBookings,
    });
  } catch (err) {
    console.log(err);
  }
};

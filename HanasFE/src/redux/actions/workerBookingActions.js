import { WorkerBookingActions } from "./types";
import axios from "@axios";
import { getItem } from "@helpers/asyncStorage";

export const getBookingRequests = () => async (dispatch) => {
  let token = await getItem("token");

  try {
    let { data } = await axios.get("/api/worker/booking-requests", {
      headers: { authorization: `Bearer ${token}` },
    });

    dispatch({
      type: WorkerBookingActions.FETCH_BOOKING_REQUESTS,
      payload: data.bookingRequests,
    });
  } catch (err) {
    console.log(err);
  }
};

export const acceptBookingRequest = (bookingID) => async (dispatch) => {
  let token = await getItem("token");

  try {
    axios({
      method: "patch",
      url: `/api/worker/accept-booking/${bookingID}`,
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch({
      type: WorkerBookingActions.REMOVE_BOOKING_REQUEST,
      payload: bookingID,
    });
  } catch (err) {
    console.log(err);
  }
};

export const declineBookingRequest = (bookingID) => async (dispatch) => {
  let token = await getItem("token");

  try {
    axios({
      method: "patch",
      url: `/api/worker/decline-booking/${bookingID}`,
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch({
      type: WorkerBookingActions.REMOVE_BOOKING_REQUEST,
      payload: bookingID,
    });
  } catch (err) {
    console.log(err);
  }
};

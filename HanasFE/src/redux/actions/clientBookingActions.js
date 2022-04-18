import { ClientBookingActions } from "./types";
import axios from "@axios";
import { getItem } from "@helpers/asyncStorage";

export const resetLoading = () => async (dispatch) => {
  dispatch({ type: ClientBookingActions.CLIENT_BOOKING_FAIL });
};

export const getBooking = () => async (dispatch) => {
  let token = await getItem("token");

  try {
    let { data } = await axios.get("/api/client/get-bookings", {
      headers: { authorization: `Bearer ${token}` },
    });
    if (data.bookings) {
      dispatch({
        type: ClientBookingActions.CLIENT_BOOKING_DETAILS,
        payload: data.bookings,
      });
    }
  } catch (err) {
    let error = err.response.data ? err.response.data : err;
    dispatch({
      type: ClientBookingActions.CLIENT_BOOKING_FAIL,
      payload: error,
    });
  }
};

export const bookSkilledWorker = (DATA, navigation) => async (dispatch) => {
  let token = await getItem("token");

  dispatch({ type: ClientBookingActions.CLIENT_BOOKING_LOADING });

  try {
    let { data } = await axios.post(
      "/api/client/book-skilled-worker",
      { DATA },
      { headers: { authorization: `Bearer ${token}` } }
    );
    if (data) {
      let { booking_id } = data;
      let response = await axios.get("/api/client/get-bookings", {
        headers: { authorization: `Bearer ${token}` },
      });

      if (response.data) {
        dispatch({ type: ClientBookingActions.CLIENT_BOOKING_SUCCESS });

        dispatch({
          type: ClientBookingActions.CLIENT_BOOKING_DETAILS,
          payload: response.data.bookings,
        });

        navigation.navigate("BookingSummary", { booking_id });
      }
    }
  } catch (err) {
    console.log(err);
    let error = err.response.data ? err.response.data : err;
    dispatch({
      type: ClientBookingActions.CLIENT_BOOKING_FAIL,
      payload: error,
    });
  }
};

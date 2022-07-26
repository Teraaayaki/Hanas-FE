import axios from "@helpers/axios";
import { getItem } from "@helpers/asyncStorage";
import { WorkerDashboardActions } from "./types";

export const getOverview = () => async (dispatch) => {
  try {
    let token = await getItem("token");

    let { data } = await axios.get("/api/worker/overview", {
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch({
      type: WorkerDashboardActions.FETCH_OVERVIEW,
      payload: data.overview,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getUpcomingServices = () => async (dispatch) => {
  try {
    let token = await getItem("token");

    let { data } = await axios.get("/api/worker/upcoming-services", {
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch({
      type: WorkerDashboardActions.FETCH_UPCOMINGSERVICES,
      payload: data.upcomingServices,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getOngoingService = () => async (dispatch) => {
  try {
    let token = await getItem("token");

    let { data } = await axios.get("/api/worker/ongoing-service", {
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch({
      type: WorkerDashboardActions.FETCH_ONGOINGSERVICE,
      payload: data.ongoingService[0],
    });
  } catch (err) {
    console.log(err);
  }
};

export const startService = (bookingID) => async (dispatch) => {
  try {
    let token = await getItem("token");

    axios({
      method: "patch",
      url: `/api/worker/start-service/${bookingID}`,
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch({
      type: WorkerDashboardActions.START_SERVICE,
      payload: bookingID,
    });
  } catch (err) {
    console.log(err);
  }
};

export const serviceFinished = (bookingID) => async (dispatch) => {
  try {
    let token = await getItem("token");

    axios({
      method: "patch",
      url: `/api/worker/service-finished/${bookingID}`,
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch({
      type: WorkerDashboardActions.SERVICE_FINISHED,
    });
  } catch (err) {
    console.log(err);
  }
};

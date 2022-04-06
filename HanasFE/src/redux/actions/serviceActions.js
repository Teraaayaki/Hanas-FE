import { ServiceActions } from "./types";
import { getItem } from "@helpers/asyncStorage";
import axios from "@helpers/axios";

export const getServiceType = () => async (dispatch) => {
  let token = await getItem("token");
  dispatch({ type: ServiceActions.SERVICE_LOADING });

  try {
    let { data } = await axios.get("/api/worker/get-services", {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (data) {
      dispatch({
        type: ServiceActions.SERVICE_TYPE,
        payload: data.services,
      });
    }
  } catch (err) {
    console.log(err);

    dispatch({
      type: ServiceActions.SERVICE_FAIL,
      payload: err,
    });
  }
};

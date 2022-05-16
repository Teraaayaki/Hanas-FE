import { ClientWorkerViewActions } from "./types";
import axios from "@axios";
import { getItem } from "@helpers/asyncStorage";

export const fetchData = (worker_id, service_id) => async (dispatch) => {
  let token = await getItem("token");

  dispatch({
    type: ClientWorkerViewActions.CLIENT_WORKER_LOADING,
  });

  try {
    let { data } = await axios.post(
      "/api/client/get-worker-details",
      { worker_id, service_id },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    if (data) {
      dispatch({
        type: ClientWorkerViewActions.CLIENT_WORKER_DETAILS,
        payload: data.worker_details[0],
      });

      dispatch({
        type: ClientWorkerViewActions.CLIENT_WORKER_SUCCESS,
      });
    }
  } catch (err) {
    console.log(err);
    let error = err.response.data ? err.response.data : err;
    dispatch({
      type: ClientWorkerViewActions.CLIENT_WORKER_FAIL,
      payload: error,
    });
  }
};

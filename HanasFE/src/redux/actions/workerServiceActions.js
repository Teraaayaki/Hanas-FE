import { WorkerServiceActions } from "./types";
import { getItem } from "@helpers/asyncStorage";
import axios from "@helpers/axios";

export const getServiceType = () => async (dispatch) => {
  let token = await getItem("token");
  dispatch({ type: WorkerServiceActions.WORKER_SERVICE_LOADING });

  try {
    let { data } = await axios.get("/api/worker/get-services", {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (data) {
      dispatch({
        type: WorkerServiceActions.WORKER_SERVICE_TYPE,
        payload: data.services,
      });
    }
  } catch (err) {
    console.log(err);

    dispatch({
      type: WorkerServiceActions.WORKER_SERVICE_FAIL,
      payload: err,
    });
  }
};

export const getMyServices = () => async (dispatch) => {
  let token = await getItem("token");

  dispatch({
    type: WorkerServiceActions.WORKER_SERVICE_LOADING,
  });

  try {
    let { data } = await axios.get("/api/worker/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (data) {
      dispatch({
        type: WorkerServiceActions.WORKER_MY_SERVICES,
        payload: data.my_services,
      });
    }
  } catch (err) {
    console.log(err);
    let { error } = err.response.data ? err : err.response.data;
    dispatch({
      type: WorkerServiceActions.WORKER_SERVICE_FAIL,
      payload: error,
    });
  }
};

export const addServiceWorker =
  (serviceDetails, navigation) => async (dispatch) => {
    let token = await getItem("token");

    dispatch({
      type: WorkerServiceActions.WORKER_SERVICE_LOADING,
    });

    try {
      let { data } = await axios.post(
        "/api/worker/add-service",
        {
          ...serviceDetails,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (data.success) {
        // navigate
        dispatch({
          type: WorkerServiceActions.WORKER_SERVICE_SUCCESS,
        });
        navigation.navigate("MyServices");
      }
    } catch (err) {
      console.log(err);
      let { error } = err.response.data ? err : err.response.data;
      dispatch({
        type: WorkerServiceActions.WORKER_SERVICE_FAIL,
        payload: error,
      });
    }
  };

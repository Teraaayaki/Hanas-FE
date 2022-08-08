import axios from "@helpers/axios";
import { getItem } from "@helpers/asyncStorage";
import { NotificationActions } from "./types";

export const getNotifications = () => async (dispatch) => {
  try {
    let token = await getItem("token");

    dispatch({
      type: NotificationActions.FETCHING_NOTIFICATIONS,
    });

    let { data } = await axios.get("/api/notifications", {
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch({
      type: NotificationActions.FETCH_NOTIFICATIONS,
      payload: data.notifications,
    });
  } catch (err) {
    console.log(err);
  }
};

export const changeNotificationStatus = (notifID) => async (dispatch) => {
  let token = await getItem("token");

  try {
    axios({
      method: "patch",
      url: `/api/notifications/${notifID}`,
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch({
      type: NotificationActions.CHANGE_STATUS,
      payload: notifID,
    });
  } catch (err) {
    console.log(err);
  }
};

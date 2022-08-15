import { NotificationActions } from "../actions/types";

const initialValues = {
  notifications: [],
  fetching: false,
};

const notificationReducer = (state = initialValues, action) => {
  switch (action.type) {
    case NotificationActions.FETCHING_NOTIFICATIONS:
      return { ...state, fetching: true };

    case NotificationActions.FETCH_NOTIFICATIONS:
      return {
        ...state,
        fetching: false,
        notifications: action.payload,
      };

    case NotificationActions.CHANGE_STATUS:
      const notifications = state.notifications.map((notif) => {
        if (notif._id === action.payload) {
          notif.isOpened = true;
        }

        return notif;
      });

      return { ...state, notifications };

    default:
      return state;
  }
};

export default notificationReducer;

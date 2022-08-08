import { WorkerScheduleActions } from "../actions/types";

export const scheduleInitialValue = {
  acceptedRequests: [],
  fetching: false,
};

const workingScheduleReducer = (state = scheduleInitialValue, action) => {
  switch (action.type) {
    case WorkerScheduleActions.FETCHING_SCHEDULES:
      return {
        ...state,
        fetching: true,
      };

    case WorkerScheduleActions.FETCH_SCHEDULES:
      return {
        ...state,
        fetching: false,
        acceptedRequests: action.payload,
      };

    default:
      return state;
  }
};

export default workingScheduleReducer;

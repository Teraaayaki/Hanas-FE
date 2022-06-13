import { WorkerSchedule } from '../actions/types';

export const scheduleInitialValue = {
  acceptedRequests: [],
};

const workingScheduleReducer = (state = scheduleInitialValue, action) => {
  switch (action.type) {
    case WorkerSchedule.FETCH_SCHEDULES:
      return {
        ...state,
        acceptedRequests: action.payload,
      };
    default:
      return state;
  }
};

export default workingScheduleReducer;

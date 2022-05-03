import { ScheduleActions } from "../actions/types";

export const scheduleInitialValues = {
    loading: false,
    success: false,
    scheduleData: [],
    error: undefined,
};

const scheduleReducer = (state = scheduleInitialValues, action) => {
    switch(action.type){
        case ScheduleActions.SCHEDULE_LOADING:
            return { ...state, loading: true, success: false };
        case ScheduleActions.SCHEDULE_SUCCESS:
            return { ...state, loading: false, success: true };
        case ScheduleActions.SCHEDULE_FAIL:
            return {
                ...state,
                loading: false,
                success: false,
                error: action.payload,
              };
        case ScheduleActions.SCHEDULE_DETAILS:
            return { ...state, loading: false, scheduleData: action.payload };
        default:
            return state;
        }
}

export default scheduleReducer;
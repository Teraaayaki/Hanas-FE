import { FeedbackActions } from "../actions/types";

export const feedbackInitialValues = {
  loading: false,
  success: false,
  feedbackData: {},
  error: undefined,
};

const feedbackReducer = (state = feedbackInitialValues, action) => {
  switch (action.type) {
    case FeedbackActions.FEEDBACK_LOADING:
      return { ...state, loading: true, success: false };
    case FeedbackActions.FEEDBACK_SUCCESS:
      return { ...state, loading: false, success: true };
    case FeedbackActions.FEEDBACK_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case FeedbackActions.FEEDBACK_DETAILS:
      return { ...state, loading: false, scheduleData: action.payload };
    case FeedbackActions.FEEDBACK_RESET_SUCCESS:
      return { ...state, loading: false, success: false };
    default:
      return state;
  }
};

export default feedbackReducer;

import { ClientBookingActions } from "../actions/types";

export const clientBookingInitialValues = {
  loading: false,
  success: false,
  bookingData: [],
  error: undefined,
};

const clientBookingReducer = (state = clientBookingInitialValues, action) => {
  switch (action.type) {
    case ClientBookingActions.CLIENT_BOOKING_LOADING:
      return { ...state, loading: true, success: false };
    case ClientBookingActions.CLIENT_BOOKING_SUCCESS:
      return { ...state, loading: false, success: true };
    case ClientBookingActions.CLIENT_BOOKING_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case ClientBookingActions.CLIENT_BOOKING_DETAILS:
      return { ...state, loading: false, bookingData: action.payload };
    default:
      return state;
  }
};

export default clientBookingReducer;

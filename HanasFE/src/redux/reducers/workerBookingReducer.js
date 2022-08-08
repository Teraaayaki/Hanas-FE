import { WorkerBookingActions } from "../actions/types";

export const bookingRequestsInitialValue = {
  bookingRequests: [],
  count: 0,
  status: "",
};

const workerBookingReducer = (state = bookingRequestsInitialValue, action) => {
  switch (action.type) {
    case WorkerBookingActions.FETCH_BOOKING_REQUESTS:
      return {
        ...state,
        bookingRequests: action.payload,
        count: action.payload.length,
      };

    case WorkerBookingActions.REMOVE_BOOKING_REQUEST:
      const requests = state.bookingRequests.filter(
        (request) => request._id !== action.payload.bookingID,
      );

      return {
        ...state,
        bookingRequests: requests,
        count: state.count - 1,
        status: action.payload.status,
      };

    case WorkerBookingActions.RESET_STATUS:
      return {
        ...state,
        status: "",
      };

    default:
      return state;
  }
};

export default workerBookingReducer;

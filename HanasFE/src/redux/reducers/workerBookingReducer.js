import { WorkerBookingActions } from '../actions/types';

export const bookingRequestsInitialValue = {
  bookingRequests: [],
  count: 0,
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
      const requests = state.bookingRequests.filter((request) => request._id !== action.payload);

      return { ...state, bookingRequests: requests, count: state.count - 1 };
    default:
      return state;
  }
};

export default workerBookingReducer;

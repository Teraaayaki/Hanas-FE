import { WorkerDashboardActions } from "../actions/types";

const initialValues = {
  overview: [],
  upcomingServices: [],
  ongoingService: {},
};

const workerDashboardReducer = (state = initialValues, action) => {
  switch (action.type) {
    case WorkerDashboardActions.FETCH_OVERVIEW:
      return {
        ...state,
        overview: action.payload,
      };

    case WorkerDashboardActions.FETCH_UPCOMINGSERVICES:
      return { ...state, upcomingServices: action.payload };

    case WorkerDashboardActions.FETCH_ONGOINGSERVICE:
      return { ...state, ongoingService: action.payload };

    case WorkerDashboardActions.START_SERVICE:
      const upcomingServices = state.upcomingServices.filter(
        (service) => service._id !== action.payload,
      );

      return { ...state, upcomingServices, ongoingService: state.upcomingServices[0] };

    case WorkerDashboardActions.SERVICE_FINISHED:
      return { ...state, ongoingService: {} };

    default:
      return state;
  }
};

export default workerDashboardReducer;

import { ServiceActions } from "../actions/types";

export const servicesInitialValues = {
  serviceType: [],
  loading: false,
  success: false,
  error: undefined,
};

const workerServicesReducer = (state = servicesInitialValues, action) => {
  switch (action.type) {
    case ServiceActions.SERVICE_LOADING:
      return { ...state, loading: true };
    case ServiceActions.SERVICE_TYPE:
      return { ...state, serviceType: action.payload };
    case ServiceActions.SERVICE_SUCCESS:
      return { ...state, loading: false, success: true };
    case ServiceActions.SERVICE_FAIL:
      return { ...state, loading: false, error: action.payload };
    case ServiceActions.SERVICE_LOGOUT:
      return { ...state, state: action.payload };
    default:
      return state;
  }
};

export default workerServicesReducer;

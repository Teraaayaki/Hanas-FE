import { ServiceActions } from "../actions/types";

export const servicesInitialValues = {
  serviceType: [],
  loading: false,
  error: undefined,
};

const servicesReducer = (state = servicesInitialValues, action) => {
  switch (action.type) {
    case ServiceActions.SERVICE_LOADING:
      return { ...state, loading: true };
    case ServiceActions.SERVICE_TYPE:
      return { ...state, serviceType: action.payload };
    case ServiceActions.SERVICE_FAIL:
      return { ...state, loading: false, error: action.payload };
    case ServiceActions.SERVICE_LOGOUT:
      return { ...state, state: action.payload };
    default:
      return state;
  }
};

export default servicesReducer;

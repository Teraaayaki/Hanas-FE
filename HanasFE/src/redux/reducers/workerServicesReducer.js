import { WorkerServiceActions } from "../actions/types";

export const workerServicesInitialValues = {
  serviceType: [],
  myServices: [],
  loading: false,
  success: false,
  error: undefined,
};

const workerServicesReducer = (state = workerServicesInitialValues, action) => {
  switch (action.type) {
    case WorkerServiceActions.WORKER_SERVICE_LOADING:
      return { ...state, loading: true };
    case WorkerServiceActions.WORKER_SERVICE_TYPE:
      return { ...state, loading: false, serviceType: action.payload };
    case WorkerServiceActions.WORKER_SERVICE_SUCCESS:
      return { ...state, loading: false, success: true };
    case WorkerServiceActions.WORKER_MY_SERVICES:
      return { ...state, loading: false, myServices: action.payload };
    case WorkerServiceActions.WORKER_SERVICE_FAIL:
      return { ...state, loading: false, error: action.payload };
    case WorkerServiceActions.WORKER_SERVICE_LOGOUT:
      return { ...state, state: action.payload };
    default:
      return state;
  }
};

export default workerServicesReducer;

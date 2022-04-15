import { ClientWorkerViewActions } from "../actions/types";

export const clientWorkerViewInitialValues = {
  loading: false,
  success: false,
  profileData: {},
  error: undefined,
};

const clientWorkerViewReducer = (
  state = clientWorkerViewInitialValues,
  action
) => {
  switch (action.type) {
    case ClientWorkerViewActions.CLIENT_WORKER_LOADING:
      return { ...state, loading: true, success: false };
    case ClientWorkerViewActions.CLIENT_WORKER_SUCCESS:
      return { ...state, loading: false, success: true };
    case ClientWorkerViewActions.CLIENT_WORKER_FAIL:
      return { ...state, loading: false, error: action.payload };
    case ClientWorkerViewActions.CLIENT_WORKER_DETAILS:
      return { ...state, loading: false, profileData: action.payload };
    default:
      return state;
  }
};

export default clientWorkerViewReducer;

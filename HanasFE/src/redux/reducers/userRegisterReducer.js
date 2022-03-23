import { RegisterActions } from "../actions/types";

const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case RegisterActions.REGISTER_LOADING:
      return { ...state, loading: true, success: false };
    case RegisterActions.REGISTER_WORKER:
      return { ...state, loading: false, isWorker: action.payload };
    case RegisterActions.REGISTER_USER:
      return { ...state, loading: false, user: action.payload };
    case RegisterActions.REGISTER_SUCCESS:
      return { ...state, loading: false, success: action.payload };
    case RegisterActions.REGISTER_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default userRegisterReducer;

import { UserLoginActions } from "../actions/types";

const initialValues = {
  success: false,
  error: undefined,
  loading: false,
};

const userLoginReducer = (state = initialValues, action) => {
  switch (action.type) {
    case UserLoginActions.USER_LOADING:
      return { ...state, loading: true };
    case UserLoginActions.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: undefined,
        success: action.payload,
      };
    case UserLoginActions.USER_LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload };
    case UserLoginActions.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export default userLoginReducer;

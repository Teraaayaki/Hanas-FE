import { UserLoginActions } from "../actions/types";

const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case UserLoginActions.USER_LOGIN_SUCCESS:
      return { ...state, success: action.payload };
    case UserLoginActions.USER_LOGIN_FAIL:
      return { ...state, error: action.payload };
    case UserLoginActions.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export default userLoginReducer;

import { UserLoginActions } from "../actions/types";

const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case UserLoginActions.USER_LOGIN_FAIL:
      return { ...state, token: action.payload };
    case UserLoginActions.USER_LOGIN_SUCCESS:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default userLoginReducer;

import { UserLoginActions } from "../actions/types";

const initialValues = {
  success: false,
  error: " ",
};

const userLoginReducer = (state = initialValues, action) => {
  switch (action.type) {
    case UserLoginActions.USER_LOGIN_SUCCESS:
      return { ...state, error: "", success: action.payload };
    case UserLoginActions.USER_LOGIN_FAIL:
      return { ...state, error: action.payload };
    case UserLoginActions.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export default userLoginReducer;

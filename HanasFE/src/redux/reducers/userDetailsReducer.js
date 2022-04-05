import { UserDetailActions } from "../actions/types";

export const userDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case UserDetailActions.USER_DETAILS_LOADING:
      return { ...state, loading: true };
    case UserDetailActions.USER_DETAILS_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case UserDetailActions.USER_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };
    case UserDetailActions.USER_DETAILS_LOGOUT:
      return {};
    default:
      return state;
  }
};

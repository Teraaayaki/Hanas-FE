import { UserDetailActions } from "../actions/types";

export const userDetailsInitialValues = {
  loading: false,
  user: {},
  error: undefined,
  changeSuccess: false,
};

const userDetailReducer = (state = userDetailsInitialValues, action) => {
  switch (action.type) {
    case UserDetailActions.USER_DETAILS_LOADING:
      return { ...state, loading: true };
    case UserDetailActions.USER_DETAILS_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case UserDetailActions.USER_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };
    case UserDetailActions.USER_DETAILS_CHANGE_ADDRESS:
      return {
        ...state,
        loading: false,
        user: { ...state.user, address: action.payload },
      };
    case UserDetailActions.USER_DETAILS_CHANGE_ACCOUNT_INFO:
      return {
        ...state,
        loading: false,
        user: {
          ...state.user,
          profile_pic: action.payload.profile_pic,
          email: action.payload.email,
        },
      };
    case UserDetailActions.USER_DETAILS_CHANGE_SUCCESS:
      return {
        ...state,
        loading: false,
        changeSuccess: action.payload,
      };
    case UserDetailActions.USER_DETAILS_LOGOUT:
      return { ...state, state: action.payload };
    default:
      return state;
  }
};

export default userDetailReducer;

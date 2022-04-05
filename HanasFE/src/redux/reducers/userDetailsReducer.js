import { UserDetailActions } from "../actions/types";

const initialValues = {
  address: "",
  birthdate: new Date(0, 0, 0),
  email: "",
  first_name: "",
  last_name: "",
  middle_name: "",
  mobile_no: 0,
  sex: "",
};

export const userDetailReducer = (state = initialValues, action) => {
  switch (action.type) {
    case UserDetailActions.USER_DETAILS_LOADING:
      return { ...state, loading: true };
    case UserDetailActions.USER_DETAILS_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case UserDetailActions.USER_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };
    case UserDetailActions.USER_DETAILS_LOGOUT:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

import { EditPasswordActions } from "../actions/types";

export const editPasswordInitialValues = {
  loading: false,
  success: false,
  editPasswordData: {},
  error: undefined,
};

const editPasswordReducer = (state = editPasswordInitialValues, action) => {
  switch (action.type) {
    case EditPasswordActions.EDIT_PASSWORD_LOADING:
      return { ...state, loading: true, success: false };
    case EditPasswordActions.EDIT_PASSWORD_SUCCESS:
      return { ...state, loading: false, success: true };
    case EditPasswordActions.EDIT_PASSWORD_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case EditPasswordActions.EDIT_PASSWORD_DETAILS:
      return { ...state, loading: false, editPasswordData: action.payload };
    default:
      return state;
  }
};

export default editPasswordReducer;

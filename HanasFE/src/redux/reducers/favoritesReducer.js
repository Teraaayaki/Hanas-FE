import { FavoritesActions } from "../actions/types";

export const favoritesInitialValues = {
  loading: false,
  success: false,
  favoritesData: [],
  error: undefined,
  addedSuccess: false,
  removedSuccess: false,
  addedError: undefined,
  removedError: undefined,
};

const favoritesReducer = (state = favoritesInitialValues, action) => {
  switch (action.type) {
    case FavoritesActions.CLIENT_FAVORITES_LOADING:
      return { ...state, loading: true, success: false };
    case FavoritesActions.CLIENT_FAVORITES_SUCCESS:
      return { ...state, loading: false, success: true };
    case FavoritesActions.CLIENT_FAVORITES_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case FavoritesActions.CLIENT_FAVORITES_DETAILS:
      return { ...state, loading: false, favoritesData: action.payload };
    case FavoritesActions.CLIENT_FAVORITES_RESET:
      return { ...state, loading: false, success: false, error: undefined};
    case FavoritesActions.CLIENT_FAVORITES_ADDED_SUCCESS:
      return {...state, loading: false, addedSuccess: true, addedError: undefined}
    case FavoritesActions.CLIENT_FAVORITES_ADDED_ERROR:
      return {...state, loading: false, addedSuccess: false, addedError: action.payload}
    case FavoritesActions.CLIENT_FAVORITES_REMOVED_SUCCESS:
      return {...state, loading: false, removedSuccess: true, removedError: undefined}
    case FavoritesActions.CLIENT_FAVORITES_REMOVED_ERROR:
      return {...state, loading: false, removedSuccess: false, removedError: action.payload}
    default:
      return state;
  }
};

export default favoritesReducer;

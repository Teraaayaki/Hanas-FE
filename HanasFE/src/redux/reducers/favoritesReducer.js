import { FavoritesActions } from "../actions/types";

export const favoritesInitialValues = {
  loading: false,
  success: false,
  favoritesData: [],
  error: undefined,
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
    default:
      return state;
  }
};

export default favoritesReducer;

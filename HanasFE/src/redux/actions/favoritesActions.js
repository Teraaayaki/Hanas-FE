import { FavoritesActions } from "./types";
import axios from "@axios";
import { getItem } from "@helpers/asyncStorage";

export const resetError = () => (dispatch) => {
  dispatch({
    type: FavoritesActions.CLIENT_FAVORITES_FAIL,
  });
};

export const addToFavorites = (DATA) => async (dispatch) => {
  let token = await getItem("token");

  dispatch({ type: FavoritesActions.CLIENT_FAVORITES_LOADING });

  try {
    let { data } = await axios.post(
      "/api/client/add-to-favorites",
      { DATA },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (data) {
      let { data: favoritesDATA } = await axios.get(
        "/api/client/get-favorites",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (favoritesDATA) {
        console.log("Get Favorites");
        dispatch({
          type: FavoritesActions.CLIENT_FAVORITES_DETAILS,
          payload: favoritesDATA.favoritesArray,
        });

        dispatch({ type: FavoritesActions.CLIENT_FAVORITES_SUCCESS });
      }
    }
  } catch (err) {
    console.log(err);
    let error = err.response.data ? err.response.data : err;
    dispatch({ type: FavoritesActions.CLIENT_FAVORITES_FAIL, payload: error });
  }
};

export const getFavorites = () => async (dispatch) => {
  let token = await getItem("token");

  dispatch({ type: FavoritesActions.CLIENT_FAVORITES_LOADING });

  try {
    let { data } = await axios.get("/api/client/get-favorites", {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (data) {
      console.log("DATA", data.favoritesArray);
      dispatch({
        type: FavoritesActions.CLIENT_FAVORITES_DETAILS,
        payload: data.favoritesArray,
      });

      dispatch({ type: FavoritesActions.CLIENT_FAVORITES_SUCCESS });
    }else{
      
      dispatch({
        type: FavoritesActions.CLIENT_FAVORITES_DETAILS,
        payload: data.favoritesArray,
      });
    }

  } catch (err) {
    console.log(err);
    let error = err.response.data ? err.response.data : err;
    dispatch({ type: FavoritesActions.CLIENT_FAVORITES_FAIL, payload: error });
  }
};

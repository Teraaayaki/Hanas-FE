import { FavoritesActions } from "./types";
import axios from "@axios";
import { getItem } from "@helpers/asyncStorage";

import { sendNotification } from "@helpers/notifications";

export const resetError = () => (dispatch) => {
  dispatch({
    type: FavoritesActions.CLIENT_FAVORITES_RESET,
  });
};

export const resetAddedError = () => (dispatch) => {
  dispatch({
    type: FavoritesActions.CLIENT_FAVORITES_ADDED_ERROR,
  });
};

export const resetRemoveError = () => (dispatch) => {
  dispatch({
    type: FavoritesActions.CLIENT_FAVORITES_REMOVED_ERROR,
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

      await sendNotification(
        "ExponentPushToken[K_A54HJwEBd3wnaWJryslV]",
        "Good job!",
        "A client has added you to their favorites"
      );

      if (favoritesDATA) {
        dispatch({
          type: FavoritesActions.CLIENT_FAVORITES_DETAILS,
          payload: favoritesDATA.favoritesArray,
        });

        dispatch({ type: FavoritesActions.CLIENT_FAVORITES_ADDED_SUCCESS });
      }
    }
  } catch (err) {
    console.log(err);
    let error = err.response.data ? err.response.data : err;
    dispatch({
      type: FavoritesActions.CLIENT_FAVORITES_ADDED_ERROR,
      payload: error,
    });
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
      dispatch({
        type: FavoritesActions.CLIENT_FAVORITES_DETAILS,
        payload: data.favoritesArray,
      });
    } else {
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

export const removeFavorites = (DATA) => async (dispatch) => {
  let token = await getItem("token");

  dispatch({ type: FavoritesActions.CLIENT_FAVORITES_REMOVED_LOADING });

  try {
    let { data } = await axios.post(
      "api/client/remove-from-favorites",
      { DATA },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (data) {
      dispatch({ type: FavoritesActions.CLIENT_FAVORITES_REMOVED_SUCCESS });

      // let { data: favoritesDATA } = await axios.get(
      //   "/api/client/get-favorites",
      //   {
      //     headers: { Authorization: `Bearer ${token}` },
      //   }
      // );

      // if (favoritesDATA) {
      //   dispatch({
      //     type: FavoritesActions.CLIENT_FAVORITES_DETAILS,
      //     payload: favoritesDATA.favoritesArray,
      //   });

      //   dispatch({ type: FavoritesActions.CLIENT_FAVORITES_SUCCESS });
      // }
    }
  } catch (err) {
    console.log(err);
    let error = err.response.data ? err.response.data : err;
    dispatch({
      type: FavoritesActions.CLIENT_FAVORITES_REMOVED_ERROR,
      payload: error,
    });
  }
};

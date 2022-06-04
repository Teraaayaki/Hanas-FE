import { EditPasswordActions } from "./types";

import { getItem } from "@helpers/asyncStorage";
import axios from "@axios";

export const resetSuccess = () => async (dispatch) => {
  dispatch({ type: EditPasswordActions.EDIT_PASSWORD_RESET_SUCCESS });
};

export const resetError = () => async (dispatch) => {
  dispatch({ type: EditPasswordActions.EDIT_PASSWORD_FAIL });
};

export const editPassword = (DATA) => async (dispatch) => {
  let token = await getItem("token");

  dispatch({ type: EditPasswordActions.EDIT_PASSWORD_LOADING });

  try {
    let { data } = await axios.post(
      "api/auth/edit-password",
      { DATA },
      { headers: { authorization: `Bearer ${token}` } }
    );

    if (data) {
      dispatch({ type: EditPasswordActions.EDIT_PASSWORD_SUCCESS });
    }
  } catch (err) {
    console.log(err);
    let { error } = err.response.data;
    dispatch({ type: EditPasswordActions.EDIT_PASSWORD_FAIL, payload: error });
  }
};

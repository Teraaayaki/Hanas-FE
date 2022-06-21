import { TransactionActions } from "./types";
import axios from "@axios";
import { getItem } from "@helpers/asyncStorage";

export const resetDownloadSuccess = () => async (dispatch) => {
  dispatch({
    type: TransactionActions.RESET_TRANSACTION_DOWNLOAD_SUCCESS,
  });
};

export const downloadSuccess = () => async (dispatch) => {
  dispatch({
    type: TransactionActions.TRANSACTION_DOWNLOAD_SUCCESS,
  });
};

export const getTransactions = () => async (dispatch) => {
  let token = await getItem("token");

  try {
    let { data } = await axios.get("/api/transactions", {
      headers: { authorization: `Bearer ${token}` },
    });

    dispatch({
      type: TransactionActions.FETCH_TRANSACTIONS,
      payload: data.transactions,
    });
  } catch (err) {
    console.log(err);
  }
};

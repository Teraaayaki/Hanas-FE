import { TransactionActions } from "../actions/types";

export const transactionInitialValue = {
  transactions: [],
  success: false,
  successMessage: "",
  loading: false,
};

const transactionReducer = (state = transactionInitialValue, action) => {
  switch (action.type) {
    case TransactionActions.FETCH_TRANSACTIONS:
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      };
    case TransactionActions.RESET_TRANSACTION_DOWNLOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        success: false,
        successMessage: "",
      };
    case TransactionActions.LOAD_TRANSACTIONS:
      return {
        ...state,
        loading: true,
        success: false,
        successMessage: "",
      };
    case TransactionActions.TRANSACTION_DOWNLOAD_SUCCESS:
      return {
        ...state,
        success: true,
        successMessage: "Receipt has been successfully downloaded",
      };
    default:
      return state;
  }
};

export default transactionReducer;

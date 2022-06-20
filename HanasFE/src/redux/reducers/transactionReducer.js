import { TransactionActions } from "../actions/types";

export const transactionInitialValue = {
  transactions: [],
  success: false,
  successMessage: "",
};

const transactionReducer = (state = transactionInitialValue, action) => {
  switch (action.type) {
    case TransactionActions.FETCH_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };
    case TransactionActions.RESET_TRANSACTION_DOWNLOAD_SUCCESS:
      return {
        ...state,
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

import { TransactionActions } from '../actions/types';

export const transactionInitialValue = {
  transactions: [],
};

const transactionReducer = (state = transactionInitialValue, action) => {
  switch (action.type) {
    case TransactionActions.FETCH_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };
    default:
      return state;
  }
};

export default transactionReducer;

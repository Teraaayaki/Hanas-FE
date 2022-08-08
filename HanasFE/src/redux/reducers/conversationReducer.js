import { ConversationActions } from "../actions/types";

const initialValues = {
  conversations: [],
  fetching: false,
};

const conversationReducer = (state = initialValues, action) => {
  switch (action.type) {
    case ConversationActions.FETCHING_CONVERSATIONS:
      return {
        ...state,
        fetching: true,
      };

    case ConversationActions.FETCH_CONVERSATIONS:
      return {
        ...state,
        fetching: false,
        conversations: action.payload,
      };

    case ConversationActions.STORE_NEW_MESSAGE:
      return {
        ...state,
        conversations: action.payload,
      };

    default:
      return state;
  }
};

export default conversationReducer;

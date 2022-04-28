import { ConversationActions } from '../actions/types';

const initialValues = {
  conversations: null
};

const conversationReducer = (state = initialValues, action) => {
  switch (action.type) {
    case ConversationActions.FETCH_CONVERSATIONS:
      return {
        ...state,
        conversations: action.payload
      };
    case ConversationActions.STORE_NEW_MESSAGE:
      return {
        ...state,
        conversations: action.payload
      };

    default:
      return state;
  }
};

export default conversationReducer;

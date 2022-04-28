import axios from '@helpers/axios';
import { getItem } from '@helpers/asyncStorage';
import { ConversationActions } from './types';

export const getUserConversations = () => async (dispatch) => {
  try {
    let token = await getItem('token');

    let { data } = await axios.get('/api/conversations', {
      headers: { Authorization: `Bearer ${token}` }
    });

    dispatch({
      type: ConversationActions.FETCH_CONVERSATIONS,
      payload: data.conversations
    });
  } catch (err) {
    console.log(err);
  }
};

export const storeNewMessage = async (receiverID, newMessage) => {
  try {
    let token = await getItem('token');

    let { data } = await axios.post(
      '/api/conversations',
      {
        receiverID: receiverID,
        newMessage: newMessage
      },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );

    console.log(data.message);
  } catch (err) {
    console.log(err.data.error);
  }
};

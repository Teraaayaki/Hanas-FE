import { combineReducers } from 'redux';
import userLoginReducer from './userLoginReducer';
import userRegisterReducer from './userRegisterReducer';
import userDetailReducer from './userDetailsReducer';
import workerServicesReducer from './workerServicesReducer';
import clientWorkerViewReducer from './clientWorkerViewReducer';
import clientBookingReducer from './clientBookingReducer';
import conversationReducer from './conversationReducer';

export default combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailReducer,
  workerServices: workerServicesReducer,
  clientWorkerView: clientWorkerViewReducer,
  clientBooking: clientBookingReducer,
  userConversations: conversationReducer
});

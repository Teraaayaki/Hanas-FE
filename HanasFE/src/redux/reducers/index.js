import { combineReducers } from "redux";
import userLoginReducer from "./userLoginReducer";
import userRegisterReducer from "./userRegisterReducer";
import userDetailReducer from "./userDetailsReducer";
import workerServicesReducer from "./workerServicesReducer";
import clientWorkerViewReducer from "./clientWorkerViewReducer";
import clientBookingReducer from "./clientBookingReducer";
import conversationReducer from "./conversationReducer";
import scheduleReducer from "./scheduleReducer";
import favoritesReducer, {
  addfavoritesReducer,
  removefavoritesReducer,
} from "./favoritesReducer";
import servicesNearYouReducer from "./servicesNearYouReducer";
import editPasswordReducer from "./editPasswordReducer";
import feedbackReducer from "./feedbackReducer";
import workerBookingReducer from "./workerBookingReducer";
import workerScheduleReducer from "./workerScheduleReducer";
import transactionReducer from "./transactionReducer";
import notificationReducer from "./notificationReducer";
import workerDashboardReducer from "./workerDashboardReducer";

export default combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailReducer,
  workerServices: workerServicesReducer,
  clientWorkerView: clientWorkerViewReducer,
  clientBooking: clientBookingReducer,
  userConversations: conversationReducer,
  favorites: favoritesReducer,
  addFavorites: addfavoritesReducer,
  removeFavorites: removefavoritesReducer,
  schedule: scheduleReducer,
  servicesNearYou: servicesNearYouReducer,
  editPassword: editPasswordReducer,
  addFeedback: feedbackReducer,
  workerBookingRequests: workerBookingReducer,
  workerSchedules: workerScheduleReducer,
  transactions: transactionReducer,
  notifications: notificationReducer,
  workerDashboard: workerDashboardReducer,
});

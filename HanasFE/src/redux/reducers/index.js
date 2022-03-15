import { combineReducers } from "redux";
import userReducer from "./userLoginReducer";

export default combineReducers({
  user: userReducer,
});

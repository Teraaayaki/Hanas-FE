import { combineReducers } from "redux";
import userLoginReducer from "./userLoginReducer";

export default combineReducers({
  userLogin: userLoginReducer,
});

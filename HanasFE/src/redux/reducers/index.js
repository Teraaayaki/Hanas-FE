import { combineReducers } from "redux";
import userLoginReducer from "./userLoginReducer";
import userRegisterReducer from "./userRegisterReducer";

export default combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

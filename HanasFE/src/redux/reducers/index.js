import { combineReducers } from "redux";
import userLoginReducer from "./userLoginReducer";
import userRegisterReducer from "./userRegisterReducer";
import userDetailReducer from "./userDetailsReducer";
import workerServicesReducer from "./workerServicesReducer";

export default combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailReducer,
  workerServices: workerServicesReducer,
});

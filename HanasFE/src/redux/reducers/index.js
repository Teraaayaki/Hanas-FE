import { combineReducers } from "redux";
import userLoginReducer from "./userLoginReducer";
import userRegisterReducer from "./userRegisterReducer";
import userDetailReducer from "./userDetailsReducer";
import servicesReducer from "./servicesReducer";

export default combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailReducer,
  services: servicesReducer,
});

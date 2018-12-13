import userReducer from "./userReducer";
import userInfoReducer from "./userInfoReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  users: userReducer, // updates info on the product
  user: userInfoReducer
});

export default allReducers;

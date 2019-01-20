import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
// import userReducer from "./reducers/userReducer";
import allReducers from "./reducers/";

const initialState = {}

const middleware = [thunk];

const store = createStore(
  allReducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;

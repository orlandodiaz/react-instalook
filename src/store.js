import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";

const initialState = {
  username: "store_default_username"
};

const middleware = [thunk];

const store = createStore(
  userReducer,
  // applyMiddleware(...middleware)
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;

import { sortBy } from "underscore";

const initState = {
  user: {}
};

const userInfoReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_USER_INFO":
      return action.user;
    default:
      return state;
  }
  return state;
};

export default userInfoReducer;

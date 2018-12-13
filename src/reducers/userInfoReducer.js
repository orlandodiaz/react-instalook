import { sortBy } from "underscore";

const initState = {
  userData: {}
};

const userInfoReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_USER_INFO":
      return action.userData;
    default:
      return state;
  }
  return state;
};

export default userInfoReducer;

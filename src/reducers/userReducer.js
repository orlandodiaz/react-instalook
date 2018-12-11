import { sortBy } from "underscore";

const initState = {
  users: []
};

const userReducer = (state = initState, action) => {
  console.log("reducer called");
  switch (action.type) {
    case "FETCH_USERS":
      return action.payload;
    case "SORT_USERS_ARRAY":
      return sortBy(action.payload, obj => obj.user.follower_count).reverse();

    default:
      return state;
  }
  return state;
};
export default userReducer;

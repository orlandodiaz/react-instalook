import { sortBy } from "underscore";

const initState = {
  users: [],
  sortby: "none"
};

const userReducer = (state = initState, action) => {
  console.log("reducer called");
  switch (action.type) {
    case "FETCH_USERS":
      return action.payload;
    // return sortBy(action.payload, obj => obj.user.follower_count).reverse();
    case "SORT_USERS":
      // let users;
      let users = {
        users: sortBy(action.payload, obj => obj.user.follower_count).reverse(),
        sortby: "followers"
      };
      return users;

    default:
      return state;
  }
  return state;
};
export default userReducer;

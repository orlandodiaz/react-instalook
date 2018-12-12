import { sortBy } from "underscore";

const initState = {
  users: [],
  sortby: "none"
};

const userReducer = (state = initState, action) => {
  console.log("reducer called");
  switch (action.type) {
    case "FETCH_USERS":
      // return action.payload.users;
      if (action.payload.sortby === "followers") {
        return {
          users: sortBy(
            action.payload.users,
            obj => obj.user.follower_count
          ).reverse(),
          sortby: action.payload.sortby
        };
      } else {
        return {
          users: action.payload.users,
          sortby: action.payload.sortby
        };
      }
    // return sortBy(action.payload, obj => obj.user.follower_count).reverse();
    case "SORT_USERS":
      // let users;
      let users = {
        users: sortBy(action.payload, obj => obj.user.follower_count).reverse(),
        sortby: action.sortby
      };
      return users;

    default:
      return state;
  }
  return state;
};
export default userReducer;

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
      if (action.sortby === "followers") {
        return {
          users: sortBy(
            action.payload.users,
            obj => obj.user.follower_count
          ).reverse(),
          sortby: action.sortby
        };
      } else {
        return {
          users: sortBy(action.payload.users, obj => obj.position),
          sortby: action.sortby
        };
      }
    // case "GET_USER_INFO":
    //   users: sortBy(action.payload, obj => obj.position),
    //   return action.userData;

    default:
      return state;
  }
  return state;
};
export default userReducer;

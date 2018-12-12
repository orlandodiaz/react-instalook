import axios from "axios";
import { sortBy } from "underscore";
// import crypto from "crypto";

export const updateSearchField = value => {
  return {
    type: "UPDATE_SEARCH_FIELD",
    search_field: `value`
  };
};

// export const sortUsers = type => {
//   return {
//     type: "SORT_USERS_ARRAY",
//     sort_type: `type`
//   };
// };
export function sortUsers() {
  return (dispatch, getState) => {
    const state = getState();

    dispatch({
      type: "SORT_USERS",
      payload: sortBy(state.users, obj => obj.user.follower_count).reverse()
    });
  };
}
export function getUsers(username) {
  return (dispatch, getState) => {
    // make async data here
    const state = getState();

    axios
      .get(
        `https://www.instagram.com/web/search/topsearch/?context=blended&query=${username}&include_reel=true`
      )
      .then(response => {
        let users = { users: response.data.users };
        dispatch({
          type: "FETCH_USERS",
          payload: users
          // payload: { users: users, sortby: state.sortby }
        });
      })
      .catch(error => {
        console.log(error);
      });

    const user = {
      username: "newusername",
      fullname: "newfullname"
    };
  };
}

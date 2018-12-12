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
export function sortUsers(sortby) {
  return (dispatch, getState) => {
    const state = getState();

    console.log("Disaptching. Value of sortby is:");
    console.log(sortby);
    dispatch({
      type: "SORT_USERS",
      payload: sortBy(state.users, obj => obj.user.follower_count).reverse(),
      sortby: sortby
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
        // let users = { users: response.data.users };
        // if (state.sortby === "followers") {
        //   dispatch({
        //     type: "FETCH_USERS",
        //     // payload: users
        //     payload: {
        //       users: sortBy(
        //         response.data.users,
        //         obj => obj.response.data.user.follower_count
        //       ).reverse()
        //     }
        //   });
        // }

        dispatch({
          type: "FETCH_USERS",
          // payload: users
          payload: { users: response.data.users, sortby: state.sortby }
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

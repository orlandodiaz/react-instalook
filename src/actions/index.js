import axios from "axios";
// import crypto from "crypto";

export const updateSearchField = value => {
  return {
    type: "UPDATE_SEARCH_FIELD",
    search_field: `value`
  };
};

export const sortUsers = type => {
  return {
    type: "SORT_USERS_ARRAY",
    sort_type: `type`
  };
};

export function getUsers(username) {
  return dispatch => {
    // make async data here
    axios
      .get(
        `https://www.instagram.com/web/search/topsearch/?context=blended&query=${username}&include_reel=true`
      )
      .then(response => {
        let users = { users: response.data.users };
        dispatch({
          type: "FETCH_USERS",
          payload: users
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

import axios from "axios";
import { sortBy } from "underscore";
import crypto from "crypto";

export const updateSearchField = value => {
  return {
    type: "UPDATE_SEARCH_FIELD",
    search_field: `value`
  };
};

export function sortUsers(sortby) {
  return (dispatch, getState) => {
    const state = getState();

    console.log("Disaptching. Value of sortby is:");
    console.log(sortby);
    dispatch({
      type: "SORT_USERS",
      payload: state.users,
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
        dispatch({
          type: "FETCH_USERS",
          // payload: users
          payload: {
            users: response.data.users,
            sortby: state.users.sortby,
            fuck: "SDSD"
          }
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

export function getUserInfo(username) {
  return async (dispatch, getState) => {
    // make async data here
    const state = getState();

    const resp = await axios.get("https://www.instagram.com/");
    const rx = '("rhx_gis"):"([a-zA-Z0-9]*)';

    try {
    } catch (e) {
      console.log(e);
    }
    // console.log(resp.data);
    const match = resp.data.match(rx); //=> object
    // console.log(match[2]);
    // console.log(generateSignature(match[2], `/${username}/`));
    const signature = generateSignature(match[2], `/${username}/`);

    axios({
      url: `https://cors-anywhere.herokuapp.com/https://www.instagram.com/${username}/?__a=1`,
      method: "get",
      headers: {
        "x-instagram-gis": signature,
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        // console.log("resp" + response);
        // alert(response);
        dispatch({
          type: "GET_USER_INFO",
          // payload: users
          user: response.data.graphql
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

function generateSignature(rhxGis, queryVariables) {
  // generate signature

  return crypto
    .createHash("md5")
    .update(`${rhxGis}:${queryVariables}`, "utf8")
    .digest("hex");
}

// const showUserDialog = {
//   type: "SHOW_USER_DIALOG",
//   open: "true"
// };
//
// const closeUserDialog = {
//   type: "CLOSE_USER_DIALOG",
//   open: "false"
// };

export function showUserDialog() {
  return dispatch => {
    dispatch({
      type: "SHOW_USER_DIALOG",
      open: true
    });
  };
}

export function closeUserDialog() {
  return dispatch => {
    dispatch({
      type: "CLOSE_USER_DIALOG",
      open: false
    });
  };
}

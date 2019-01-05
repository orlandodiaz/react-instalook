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

export function getRhxGis() {
  return (dispatch, getState) => {
    // make async data here
    const state = getState();

    axios
      .get(`https://www.instagram.com/`)
      .then(response => {
        const rx = '("rhx_gis"):"([a-zA-Z0-9]*)';
        // console.log(resp.data);
        const match = response.data.match(rx); //=> object

        const rhx_gis = match[2];
        console.log("RHX_GIS" + match[2]);
        // console.log(generateSignature(match[2], `/${username}/`));

        dispatch({
          type: "GET_RHX_GIS",
          // payload: users
          payload: {
            rhx_gis: rhx_gis
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function getUserInfo(username, callback) {
  return (dispatch, getState) => {
    const state = getState();

    const signature = generateSignature(state.main.rhx_gis, `/${username}/`);

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
        // dispatch(callback);

        // return new Promise((resolve, reject) => {
        dispatch({
          type: "GET_USER_INFO",
          // payload: users
          rhx_gis: state.user.rhx_gis,
          user: response.data.graphql
        });
        // });

        // resolve();
        // });

        // dispatch({
        //   type: "GET_USER_INFO",
        //   // payload: users
        //   rhx_gis: state.user.rhx_gis,
        //   user: response.data.graphql
        // });
      })
      .then(() => {
        callback();
      })
      .catch(err => {
        console.log(err);
      });

    // return Promise.resolve();
  };
}

export function removeUserInfo(username) {
  return (dispatch, getState) => {
    const state = getState();

    dispatch({
      type: "REMOVE_USER_INFO",
      // payload: users
      rhx_gis: state.user.rhx_gis,
      user: []
    });

    // callback();
    return Promise.resolve();
  };
}

function generateSignature(rhxGis, queryVariables) {
  // generate signature

  return crypto
    .createHash("md5")
    .update(`${rhxGis}:${queryVariables}`, "utf8")
    .digest("hex");
}

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

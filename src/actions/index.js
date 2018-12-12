import axios from "axios";
import { sortBy } from "underscore";
import crypto from "crypto";

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

export function getUserInfo(username) {
  return (dispatch, getState) => {
    // make async data here
    const state = getState();

    const data = getRhxGis(username);

    dispatch({
      type: "GET_USER_INFO",
      // payload: users
      userData: data
    });
  };
}

async function getRhxGis(username) {
  const resp = await axios.get("https://www.instagram.com/");
  const rx = '("rhx_gis"):"([a-zA-Z0-9]*)';

  try {
  } catch (e) {
    console.log(e);
  }
  console.log(resp.data);
  const match = resp.data.match(rx); //=> object
  console.log(match[2]);
  console.log(generateSignature(match[2], `/${username}/`));
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
      console.log(response);
      const data = response.data.graphql.user;
      return data;
      // this.setState({
      //   username: data.biography,
      //   full_name: data.full_name,
      //   profile_pic_url: data.profile_pic_url,
      //   follower_count: data.edge_follow.count,
      //   following_count: data.edge_followed_by.count
      // });
    })
    .catch(err => {
      console.log(err);
    });
}

function generateSignature(rhxGis, queryVariables) {
  // generate signature

  return crypto
    .createHash("md5")
    .update(`${rhxGis}:${queryVariables}`, "utf8")
    .digest("hex");
}

// fetchUserInformation() {
//
//   resp = await axios.get('
// }

// updateUsername = event => {
//   console.log(event);
//   this.setState({ username: this.refs.username_field.value });
//   console.log(this.getRhxGis());
// };

import axios from "axios";
// import crypto from "crypto";

export const updateSearchField = value => {
  return {
    type: "UPDATE_SEARCH_FIELD",
    search_field: `value`
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
    // const users = [
    //   {
    //     username: "newusername",
    //     fullname: "newfullname"
    //   }
    // ];
  };
}

//  async function getRhxGis() {
//   let rx = '("rhx_gis"):"([a-zA-Z0-9]*)';
//
//   try {
//     let resp = await axios.get("https://www.instagram.com/");
//   } catch (e) {
//     console.log(e);
//   }
//   console.log(resp.data);
//   let match = resp.data.match(rx); //=> object
//   console.log(match[2]);
//   console.log(generateSignature(match[2], `/${this.state.username}/`));
//   let signature = =generateSignature(
//     match[2],
//     `/${this.state.username}/`
//   );
//
//   axios({
//     url: `https://cors-anywhere.herokuapp.com/https://www.instagram.com/${
//       this.state.username
//       }/?__a=1`,
//     method: "get",
//     headers: {
//       "x-instagram-gis": signature,
//       "Content-Type": "application/json"
//     }
//   })
//     .then(response => {
//       console.log(response);
//       var data = response.data.graphql.user;
//       this.setState({
//         username: data.biography,
//         full_name: data.full_name,
//         profile_pic_url: data.profile_pic_url,
//         follower_count: data.edge_follow.count,
//         following_count: data.edge_followed_by.count
//       });
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }
//
// function generateSignature(rhxGis, queryVariables) {
//   // generate signature
//
//   return crypto
//     .createHash("md5")
//     .update(`${rhxGis}:${queryVariables}`, "utf8")
//     .digest("hex");
// }
//
// // fetchUserInformation() {
// //
// //   resp = await axios.get('
// // }
//
// updateUsername = event => {
//   console.log(event);
//   this.setState({ username: this.refs.username_field.value });
//   console.log(getRhxGis());
// };

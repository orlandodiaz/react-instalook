export function getUsers() {
  return dispatch => {
    // make async data here

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
    dispatch({
      type: "FETCH_USERS",
      payload: user
    });
  };
}

// const getUsers = () => {
//   return dispatch => {
//     // make async call to db here
//     const users = [
//       {
//         firstname: "james",
//         lastname: "momoa"
//       }
//     ];
//
//     dispatch({
//       type: "FETCH_USERS",
//       payload: users
//     });
//   };
// };

// export const myAction = {
//   type: "ADD_MESSAGE",
//   message: "Looking good"
// };

// export default getUsers;

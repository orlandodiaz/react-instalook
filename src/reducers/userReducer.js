const initState = {
  users: [],
  username: "defaultname",
  fullname: "default_fullname"
};

const userReducer = (state = initState, action) => {
  console.log("reducer called");
  switch (action.type) {
    case "FETCH_USERS":
      return action.payload;
    default:
      return state;
  }
  return state;
};
export default userReducer;

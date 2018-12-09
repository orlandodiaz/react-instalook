const initState = {};

const myReducer = (state = initState, action) => {
  switch (action.type) {
    case "MY_ACTION":
      return action.payload;
    default:
      return state;
  }
  return state;
};
export default myReducer;

const initState = {
  open: false
};

const interfaceReducer = (state = initState, action) => {
  switch (action.type) {
    case "SHOW_USER_DIALOG":
      return { open: true };
    case "CLOSE_USER_DIALOG":
      return { open: false };
    default:
      return state;
  }
  return state;
};

export default interfaceReducer;

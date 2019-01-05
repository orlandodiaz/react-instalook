import { sortBy } from "underscore";

const initState = {
  rhx_gis: ""
};

const mainReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_RHX_GIS":
      return { rhx_gis: action.payload.rhx_gis };

    default:
      return state;
  }
  return state;
};

export default mainReducer;

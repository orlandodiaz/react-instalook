import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import GridContainer from "../containers/gridContainer";
import SearchContainer from "../containers/searchContainer";
class SearchPage extends Component {
  render() {
    return (
      <div>
        <SearchContainer />
        <GridContainer />
      </div>
    );
  }
}

export default SearchPage;

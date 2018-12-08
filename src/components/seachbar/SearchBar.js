import React, { Component } from "react";

import TextField from "@material-ui/core/TextField";

// const SearchBar = () => <TextField fullWidth={true} />;

class SearchBar extends Component {
  render() {
    return (
      <div>
        <TextField
          fullWidth={true}
          margin="normal"
          placeholder="Enter username"
        />
      </div>
    );
  }
}

export default SearchBar;

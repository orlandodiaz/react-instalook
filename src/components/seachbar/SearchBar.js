import React, { Component } from "react";

import TextField from "@material-ui/core/TextField";
import { debounce } from "lodash";

// const SearchBar = () => <TextField fullWidth={true} />;

class SearchBar extends Component {
  changeSearch = debounce(this.props.handleChange, 200);

  onTextChange = e => {
    // this.props.handleChange(e);
    e.persist();
    this.changeSearch(e);

    // console.log(e);
    // console.log(e.target.value);
  };
  render() {
    return (
      <div>
        <TextField
          fullWidth={true}
          margin="normal"
          placeholder="Enter username"
          onChange={this.onTextChange}
          spellCheck={false}
        />
      </div>
    );
  }
}

export default SearchBar;

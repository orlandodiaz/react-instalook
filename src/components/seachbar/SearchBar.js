import React, { Component } from "react";

import TextField from "@material-ui/core/TextField";
import { debounce } from "lodash";
import withStyles from "@material-ui/core/es/styles/withStyles";

// const SearchBar = () => <TextField fullWidth={true} />;

const styles = theme => ({
  TheInput: {
    // fontSize: 30,
    lineHeight: 2.4,
    paddingLeft: 20,
    width: 800,
    marginTtop: 0,
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto",

    fontSize: "200%"
  }
});

class SearchBar extends Component {
  changeSearch = debounce(this.props.handleChange, 200);

  onTextChange = e => {
    e.persist();
    this.changeSearch(e);
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <TextField
          fullWidth={true}
          margin="normal"
          placeholder="Enter username"
          onChange={this.onTextChange}
          spellCheck={false}
          // style={{ margin: 20, fontSize: "300%" }}
          // inputStyle={this.styles.textField}
          // InputClassName={classes.TheInput}
          InputProps={{
            shrink: true,
            className: classes.TheInput
          }}
          // InputProps={{
          //   classes: {
          //     input: this.styles.resize
          //   }
          // }}
        />
      </div>
    );
  }
}

// TheForm = withStyles(styles)(SearchBar);

export default withStyles(styles)(SearchBar);

// export default SearchBar;

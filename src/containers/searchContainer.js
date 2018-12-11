import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index.js";
import { Grid, Paper } from "@material-ui/core";
import ImageCard from "../components/ImageGrid/ImageGrid";

import getUsers from "../actions/";
import App from "../App";
import Button from "@material-ui/core/Button/Button";
import MyButton from "../components/Button";
import SearchBar from "../components/seachbar/SearchBar";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import withStyles from "@material-ui/core/es/styles/withStyles";
// import { debounce } from "lodash";

// define component container here

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class SearchContainer extends Component {
  // changeSearch = debounce(function(e) {
  //   this.props.getUsers(e.target.value);
  // }, 1050);

  state = {
    sortby: "default",
    age: "",
    name: "hai",
    labelWidth: 0
  };

  handleChange = event => {
    alert(this.state.sortby);
    // this.setState({ sortby: event.target.value });
    this.props.dispatch("SORT_USERS_ARRAY");
  };
  doSomething = event => {
    // alert("ok");
    // console.log("sdsdd");
    // event.preventDefault();
    // console.log("event");
    // console.log(event.target.value);
    this.props.getUsers(event.target.value);
    // this.changeSearch();
    // this.props.getUsers(document.querySelector(#.target.text);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <form className={classes.root} autoComplete="off">
          <SearchBar handleChange={this.doSomething} />
          {/*<Select*/}
          {/*name="amount"*/}
          {/*floatingLabelText="Amount"*/}
          {/*value="{this.state.amount}"*/}
          {/*inputProps={{*/}
          {/*name: "age",*/}
          {/*id: "age-simple"*/}
          {/*}}*/}
          {/*onChange={() => alert("dun goofed")}*/}
          {/*>*/}
          {/*<MenuItem value={10}>Ten</MenuItem>*/}
          {/*</Select>*/}

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel
              ref={ref => {
                this.InputLabelRef = ref;
              }}
              htmlFor="outlined-age-simple"
            >
              Sort by:
            </InputLabel>
            <Select
              value={this.state.sortby}
              onChange={this.handleChange}
              input={
                <OutlinedInput
                  labelWidth={this.state.labelWidth}
                  name="age"
                  id="outlined-age-simple"
                />
              }
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="alpha">Alphabetically(A-Z)</MenuItem>
              <MenuItem value="reverse">Reverse Alphabetically (Z-A)</MenuItem>
              <MenuItem value="followers">Number of followers</MenuItem>
            </Select>
          </FormControl>
        </form>
      </div>
    );
  }
}

// Parentheses are to automatically return this object. Otherwise you would use return
const mapStateToProps = state => {
  return {
    users: state
  };
};

// shortcut so you dont do store.dispatch
// const mapDispatchToProps = dispatch => {
//   return {
//     users: () => dispatch(getUsers)
//   };
// };
export default connect(
  mapStateToProps,
  actionCreators
)(withStyles(styles)(SearchContainer));

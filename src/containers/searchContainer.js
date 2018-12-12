import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index.js";
import { Grid, Paper } from "@material-ui/core";
import ImageCard from "../components/ImageGrid/ImageGrid";

import * as actions from "../actions/";
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
import * as ReactDOM from "react-dom";
// import { debounce } from "lodash";

// define component container here

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    marginTop: 30
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
    sortby: "",
    age: "",
    name: "hai",
    labelWidth: 0
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
    });
  }

  handleDropdownChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChange = event => {
    // alert(this.state.sortby);
    // this.setState({ sortby: event.target.value });
    // this.props.dispatch("SORT_USERS_ARRAY");
    this.props.sortUsers();
    this.setState({ [event.target.name]: event.target.value });
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
                  name="sortby"
                  id="outlined-age-simple"
                />
              }
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {/*<MenuItem value="age">10</MenuItem>*/}
              {/*<MenuItem value="reverse">Reverse Alphabetically (Z-A)</MenuItem>*/}
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
    users: state.users
  };
};

// shortcut so you dont do store.dispatch
const mapDispatchToProps = dispatch => {
  return {
    sortUsers: () => dispatch(actions.sortUsers())
  };
};

export default connect(
  mapStateToProps,
  actionCreators
)(withStyles(styles)(SearchContainer));

// export default connect()(SearchContainer);

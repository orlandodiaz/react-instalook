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
// import { debounce } from "lodash";

// define component container here

class SearchContainer extends Component {
  // changeSearch = debounce(function(e) {
  //   this.props.getUsers(e.target.value);
  // }, 1050);

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
    return <SearchBar handleChange={this.doSomething} />;
  }
}

// Parentheses are to automatically return this object. Otherwise you would use return
const mapStateToProps = state => {
  return {
    users: state
  };
};

export default connect(
  mapStateToProps,
  actionCreators
)(SearchContainer);

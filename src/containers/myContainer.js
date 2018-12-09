import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index.js";
import getUsers from "../actions/";
import App from "../App";
import Button from "@material-ui/core/Button/Button";
import MyButton from "../components/Button";

// define component container here

class MyContainer extends Component {
  doSomething = event => {
    // console.log(this.props);
    alert("test");
    // console.log("sdsdd");
    // event.preventDefault();
  };
  render() {
    return (
      <MyButton handleClick={this.props.getUsers} />
      // <Button variant="contained" color="secondary" onClick={this.props.users}>
      //   Fire an action
      // </Button>
    );
  }
}

// Parentheses are to automatically return this object. Otherwise you would use return
const mapStateToProps = state => ({
  users: state.users
});

// // shortcut so you dont do store.dispatch
// const mapDispatchToProps = dispatch => {
//   return {
//     users: () => dispatch(getUsers)
//   };
// };

export default connect(
  mapStateToProps,
  actionCreators
)(MyContainer);

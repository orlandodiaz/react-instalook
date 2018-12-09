import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index.js";
import getUsers from "../actions/";
import App from "../App";
import Button from "@material-ui/core/Button/Button";
import MyButton from "../components/Button";

// define component container here

class ButtonContainer extends Component {
  doSomething = event => {
    // alert("ok");
    // console.log("sdsdd");
    // event.preventDefault();
    // this.props.getUsers(document.querySelector(#.target.text);
  };
  render() {
    return (
      <MyButton handleClick={this.doSomething} />
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
)(ButtonContainer);

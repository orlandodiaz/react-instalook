import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index.js";

class userDialogContainer extends Component {
  doSomething = event => {
    alert("test");
  };

  render() {
    return <div>a</div>;
  }
}

// Parentheses are to automatically return this object. Otherwise you would use return
const mapStateToProps = state => {
  // console.log("State:");
  // console.log(state);
  return {
    users: state.users
  };
};

// // shortcut so you dont do store.dispatch
const mapDispatchToProps = dispatch => {
  return {
    users: () => dispatch(actions.getUserInfo())
  };
};

export default connect(
  mapStateToProps,
  actions
)(userDialogContainer);

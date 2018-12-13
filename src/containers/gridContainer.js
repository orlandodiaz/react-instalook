import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index.js";
import { Grid, Paper } from "@material-ui/core";
import ImageCard from "../components/ImageCard/ImageCard";

import getUsers from "../actions/";
import App from "../App";
import Button from "@material-ui/core/Button/Button";
import MyButton from "../components/Button";

// define component container here

class GridContainer extends Component {
  doSomething = event => {
    // console.log(this.props);
    // alert("test");
    // console.log("sdsdd");
    // event.preventDefault();
  };
  render() {
    console.log(this.props.users.users.length);
    if (this.props.users.users.length === 0) return null;
    else
      return (
        <div>
          <Grid container alignContent="space-around">
            {this.props.users.users.map(user => (
              <Grid item sm>
                <ImageCard
                  username={user.user.username}
                  fullname={user.user.full_name}
                  profilepic={user.user.profile_pic_url}
                  isVerified={user.user.is_verified}
                  profileUrl={`http://instagram.com/${user.user.username}`}
                  byLine={user.user.byline}
                  title="Hey my title"
                  description="Hey my description"
                  onButtonClick={this.doSomething}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      );
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
// const mapDispatchToProps = dispatch => {
//   return {
//     users: () => dispatch(getUsers)
//   };
// };

export default connect(
  mapStateToProps,
  actionCreators
)(GridContainer);

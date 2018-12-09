import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index.js";
import { Grid, Paper } from "@material-ui/core";
import ImageCard from "../components/ImageGrid/ImageGrid";

import getUsers from "../actions/";
import App from "../App";
import Button from "@material-ui/core/Button/Button";
import MyButton from "../components/Button";

// define component container here

class GridContainer extends Component {
  doSomething = event => {
    // console.log(this.props);
    alert("test");
    // console.log("sdsdd");
    // event.preventDefault();
  };
  render() {
    return (
      <Grid container alignContent="space-around">
        {/*{this.state.my_array.map(item => <li key={item.id}>{item}</li>)}*/}
        {/*this.props.username: {this.props.username}*/}
        <Grid item sm>
          <ImageCard
            username={this.props.user.username}
            fullname={this.props.user.fullname}
            title="Hey my title"
            description="Hey my description"
          />
        </Grid>
      </Grid>
    );
  }
}

// Parentheses are to automatically return this object. Otherwise you would use return
const mapStateToProps = state => {
  console.log(state.username);
  return {
    user: state
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

import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index.js";
import { Grid, Paper } from "@material-ui/core";
import ImageCard from "../components/ImageCard/ImageCard";
import UserDialogContainer from "./userDialogContainer";
import * as actions from "../actions";
// import UserDialogfrom "../components/Dialogs/userDialog";
// import
// define component container here

class GridContainer extends Component {
  state = {
    open: false
  };
  doSomething = username => {
    // alert("sdsd");
    console.log("username:" + username);
    this.props.getUserInfo(username);
    this.props.showUserDialog();
    // this.setState({ open: true });
    // render(){<UserDialogContainer />);
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
                  key={user.user.pk}
                  username={user.user.username}
                  fullname={user.user.full_name}
                  profilepic={user.user.profile_pic_url}
                  isVerified={user.user.is_verified}
                  profileUrl={`http://instagram.com/${user.user.username}`}
                  byLine={user.user.byline}
                  title="Hey my title"
                  description="Hey my description"
                  onLearnMoreClick={() => this.doSomething(user.user.username)}
                />
              </Grid>
            ))}
          </Grid>
          <UserDialogContainer />
        </div>
      );
  }
}

// Parentheses are to automatically return this object. Otherwise you would use return
const mapStateToProps = state => {
  // console.log("State:");
  // console.log(state);
  return {
    users: state.users,
    ui: state.ui
  };
};

// shortcut so you dont do store.dispatch
const mapDispatchToProps = dispatch => {
  return {
    getUserInfo: () => dispatch(actions.getUserInfo()),
    users: () => dispatch(actions.getUsers()),
    showUserDialog: () => dispatch(actions.showUserDialog()),
    closeUserDialog: () => dispatch(actions.closeUserDialog())
  };
};

export default connect(
  mapStateToProps,
  actionCreators
)(GridContainer);

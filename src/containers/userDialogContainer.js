import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index.js";
import UserDialog from "../components/Dialogs/userDialog";
import { getUserInfo } from "../actions";
import ImageCard from "../components/ImageCard/ImageCard";

class UserDialogContainer extends Component {
  doSomething = event => {
    // alert(this.props.users);
    // this.props.getUserInfo("milliebobbybrown");
    // this.props.showUserDialog();
  };
  handleClose = event => {
    // this.props.getUserInfo("milliebobbybrown");
    this.props.closeUserDialog();
  };

  render() {
    // console.log(this.props.user);
    return (
      <div>
        {/*<h1> {this.props.user.biography} </h1>*/}

        {/*{this.props.biography}*/}
        {/*{this.props.user.user.biography}*/}

        <UserDialog
          biography={this.props.user.user.biography}
          fullname={this.props.user.user.full_name}
          username={this.props.user.user.username}
          handleClickOpen={this.doSomething}
          handleClose={this.handleClose}
          open={this.props.ui.open}
          user={this.props.user.user.full_name}
          postarray={this.props.user.user.edge_owner_to_timeline_media}
        />
      </div>
    );
  }
}

// Parentheses are to automatically return this object. Otherwise you would use return
const mapStateToProps = state => {
  // console.log("State:");
  // console.log(state);
  return {
    user: state.user,
    ui: state.ui
  };
};

// // shortcut so you dont do store.dispatch
const mapDispatchToProps = dispatch => {
  return {
    getUserInfo: () => dispatch(actions.getUserInfo()),
    showUserDialog: () => dispatch(actions.showUserDialog()),
    closeUserDialog: () => dispatch(actions.closeUserDialog())
  };
};

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  actions
)(UserDialogContainer);

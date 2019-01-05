import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index.js";
import { Grid, Paper } from "@material-ui/core";
import ImageCard from "../components/ImageCard/ImageCard";
import UserDialogContainer from "./userDialogContainer";
import * as actions from "../actions";
import CircularIndeterminate from "../components/Progress";

// import UserDialogfrom "../components/Dialogs/userDialog";
// import
// define component container here

class GridContainer extends Component {
  state = {
    open: false
  };

  handleLearnMore = username => {
    // alert("sdsd");
    // console.log("username:" + username);
    // this.props.getUserInfo(username, () => {
    //   this.props.showUserDialog();
    // });

    // Erase any previous user state here
    this.props.removeUserInfo().then(this.props.showUserDialog());
    this.props.getUserInfo(username);

    // this.props.getUserInfo(username).then(() => {
    //   this.props.showUserDialog();
    // });
    // this.props.getUserInfo(username, () => {
    //   alert("tes");
    // });
    // this.props.showUserDialog();

    // this.props.showUserDialog();
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
                  // postarray={user.user.edge_owner_to_timeline_media.edges}
                  isVerified={user.user.is_verified}
                  profileUrl={`http://instagram.com/${user.user.username}`}
                  byLine={user.user.byline}
                  title="Hey my title"
                  description="Hey my description"
                  onLearnMoreClick={() =>
                    this.handleLearnMore(user.user.username)
                  }
                />
              </Grid>
            ))}
          </Grid>
          <UserDialogContainer />
          {/*<CircularIndeterminate />*/}
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
    getUserInfo: callback => dispatch(actions.getUserInfo()),
    removeUserInfo: callback => dispatch(actions.removeUserInfo()),
    users: () => dispatch(actions.getUsers()),
    showUserDialog: () => dispatch(actions.showUserDialog()),
    closeUserDialog: () => dispatch(actions.closeUserDialog())
  };
};

export default connect(
  mapStateToProps,
  actionCreators
)(GridContainer);

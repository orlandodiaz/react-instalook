import React, { Component } from "react";
import NavBar from "./components/navbar/NavBar";
import SearchBar from "./components/seachbar/SearchBar";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "./components/navbar/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import Demo from "./components/ImageCard/ImageCard";
import { Grid, Paper } from "@material-ui/core";
import MyButton from "./components/Button";
import GridContainer from "./containers/gridContainer";
import SearchContainer from "./containers/searchContainer";
import PrivacyPage from "./components/PrivacyPage";

import About from "./components/About";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import Root from "./components/Root";
import SearchPage from "./components/SearchPage";
import Privacypage from "./components/PrivacyPage";
import { connect } from "react-redux";
import * as actions from "./actions";

class App extends Component {
  componentDidMount() {
    this.props.getRhxGis();
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path={"/"} component={Root}>
          <IndexRoute component={SearchPage} />
          <Route path={"about"} component={About} />
          <Route path={"privacy"} component={PrivacyPage} />
        </Route>
      </Router>
    );
  }
}

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
    getRhxGis: () => dispatch(actions.getRhxGis()),
    getUserInfo: () => dispatch(actions.getUserInfo()),
    showUserDialog: () => dispatch(actions.showUserDialog()),
    closeUserDialog: () => dispatch(actions.closeUserDialog())
  };
};

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  actions
)(App);

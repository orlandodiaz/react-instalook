import React, { Component } from "react";
import NavBar from "./components/navbar/NavBar";
import SearchBar from "./components/seachbar/SearchBar";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "./components/navbar/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import Demo from "./components/ImageGrid/ImageGrid";
import { Grid, Paper } from "@material-ui/core";
import MyButton from "./components/Button";
import ButtonContainer from "./containers/buttonContainer";
import GridContainer from "./containers/gridContainer";
import SearchContainer from "./containers/searchContainer";
import PrivacyPage from "./components/PrivacyPage";

import About from "./components/About";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import Root from "./components/Root";
import SearchPage from "./components/SearchPage";
import Privacypage from "./components/PrivacyPage";

class App extends Component {
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

export default App;

import React, { Component } from "react";
import NavBar from "./navbar/NavBar";
import SearchBar from "./seachbar/SearchBar";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "./navbar/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import Demo from "./ImageGrid/ImageGrid";
import { Grid, Paper } from "@material-ui/core";
import MyButton from "./Button";
// import Body from "./components/Body";

class Root extends Component {
  render() {
    return (
      <div>
        {/*header*/}
        {/*{this.props.children}*/}
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <div>
            <NavBar />
            {this.props.children}

            {/*<SearchContainer />*/}
            {/*<SearchBar />*/}
            {/*<ButtonContainer />*/}
            {/*<GridContainer />*/}
            {/*<Body />*/}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Root;

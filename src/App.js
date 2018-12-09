import React, { Component } from "react";
import NavBar from "./components/navbar/NavBar";
import SearchBar from "./components/seachbar/SearchBar";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "./components/navbar/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import Demo from "./components/ImageGrid/ImageGrid";
import { Grid, Paper } from "@material-ui/core";
import MyButton from "./components/Button";
import Container from "./containers/myContainer";
import GridContainer from "./containers/gridContainer";
import SearchContainer from "./containers/searchContainer";

class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <div>
            <NavBar />
            <SearchContainer />
            {/*<SearchBar />*/}
            <Container />
            <GridContainer />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;

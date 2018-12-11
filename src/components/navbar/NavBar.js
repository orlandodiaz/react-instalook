import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton/IconButton";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/es/styles/withStyles";
import MenuIcon from "@material-ui/icons/Menu";
// import IconButton from "@material-uai/core/IconButton/IconButton";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Drawer from "@material-ui/core/Drawer";
import { browserHistory } from "react-router";
const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },

  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

// const { classes } = this.props;

class NavBar extends Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;

    this.sideList = (
      <div className={classes.list}>
        <List component="nav">
          <ListItem button>
            <ListItemText
              primary="Home"
              onClick={() => browserHistory.push("/")}
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="About"
              onClick={() => browserHistory.push("/about")}
            />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Contact" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Privacy statement" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Terms of Use" />
          </ListItem>
        </List>
      </div>
    );

    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={this.toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit">
            Instagram Profile Search
          </Typography>
          {/*<Typography variant="h6" color="inherit">*/}
          {/*About*/}
          {/*</Typography>*/}
        </Toolbar>

        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            {this.sideList}
          </div>
        </Drawer>
      </AppBar>
    );
  }
}
// export default NavBar;
//
NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);

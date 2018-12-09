import React from "react";
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

import Drawer from "../Drawer";
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
  }
};

const sideList = (
  <List component="nav">
    <ListItem button>
      <ListItemText primary="Trash" />
    </ListItem>
  </List>
);

function NavBar(props) {
  const { classes } = props;
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={() => alert("hi")}
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
    </AppBar>
  );
}
// export default NavBar;
//
NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);

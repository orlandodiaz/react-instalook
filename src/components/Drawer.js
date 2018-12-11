import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

class TemporaryDrawer extends Component {
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
    return (
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        {/*<ListItemLink href="#simple-list">*/}
        {/*<ListItemText primary="Spam" />*/}
        {/*</ListItemLink>*/}
      </List>
    );
  }
}

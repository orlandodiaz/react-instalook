import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class MyButton extends Component {
  render() {
    return (
      <Button
        variant="contained"
        color="secondary"
        // onClick={this.props.onClick}
        onClick={this.props.handleClick}
      >
        Fire an action
      </Button>
    );
  }
}

export default MyButton;

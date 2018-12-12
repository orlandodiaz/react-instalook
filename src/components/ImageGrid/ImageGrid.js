import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import logo from "../../images/verified.png";
import red from "@material-ui/core/es/colors/red";
const styles = {
  card: {
    maxWidth: 345,
    minHeight: 200,
    margin: 5
  },
  media: {
    height: 100,
    width: 100,
    margin: "0 auto"
  }
};

function MediaCard(props) {
  // console.log(props);
  const { classes } = props;
  // console.log(props);
  // console.log(props.fullname);
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.profilepic}
          title="Contemplative Reptile"
        />
        {/*<img src="/public/verified.png" alt="" />*/}

        {/*Test{" "}*/}
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{ minWidth: 200 }}
          >
            {props.isVerified ? <img src={logo} height="16" /> : ""}

            {props.username}
          </Typography>

          <Typography
            variant="subtitle2"
            component="p"
            gutterBottom
            color="primary"
          >
            {props.byLine}
          </Typography>

          <Typography component="p">{props.fullname}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          href={props.profileUrl}
          target="_blank"
        >
          Profile
        </Button>

        {/*<Button size="small" color="primary">*/}
        {/*Learn More*/}
        {/*</Button>*/}
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);

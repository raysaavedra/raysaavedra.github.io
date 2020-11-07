import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from "@material-ui/core/styles";

import accountConstants from "../../constants/accounts";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "tomato",
    fontWeight: "bold"
  },
  tanBG: {
    backgroundColor: "#222"
  },
}));

const EmailMe = ({
  title
}) => {
  const classes = useStyles();

  const handleClick = () => {
      window.location.href = `mailto:${accountConstants.EMAIL}`;
  };

  return (
    <Grid container justify="center">
      <Button 
        variant="contained"
        size="large"
        className={classes.tanBG}
        onClick={handleClick}
        endIcon={!title && <SendIcon style={{color: "tomato"}}/>}
      >
        <Typography className={classes.title} variant="h5">
          {title || "GET IN TOUCH"}
        </Typography>
      </Button>
    </Grid>
  )
};

export default EmailMe;

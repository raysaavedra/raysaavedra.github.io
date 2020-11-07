import React from 'react';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from "@material-ui/core/styles";

import upworkIcon from "../../assets/images/upwork.svg";
import accounts from "../../constants/accounts";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: "tan",
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));

const SocialBox = () => {
  const classes = useStyles();

  return (
    <Box mt={4} mb={4}>
      <Grid container justify="center">
        <Grid item>
          <IconButton onClick={() => {window.open(accounts.LINKEDIN)}}>
              <LinkedInIcon className={classes.icon}/>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton onClick={() => {window.open(accounts.GITHUB)}}>
              <GitHubIcon className={classes.icon}/>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton onClick={() => {window.open(accounts.UPWORK)}}>
              <Avatar alt="upwork" src={upworkIcon} className={classes.icon}/>
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  )
};

export default SocialBox;

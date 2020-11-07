import React from 'react';
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";

import SocialBox from "../../components/SocialBox";
import EmailMe from "../../components/EmailMe";
import avatar from "../../assets/images/avatar.png";
import infoConstants from "../../constants/info";
import Particles from "../../components/Particles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(30),
      height: theme.spacing(30),
    },
    width: theme.spacing(50),
    height: theme.spacing(50),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  root: {
    width: "100%",
    height: "100%"
  }
}));


const Home = () => {
  const classes = useStyles();
  
  return (
    <>
      <Particles />

      <Grid 
        container 
        direction="column"
        align="center"
        justify="center" 
        className={classes.root}
        spacing={0}
      >
        <Grid item>
          <Grid container justify="center">
            <Avatar className={classes.avatar} src={avatar} alt="raysaavedra" />
          </Grid>
        </Grid>

        <Grid item>
          <Typography className={classes.title} variant="h4">
            <Typed strings={[infoConstants.name]} typeSpeed={40} />
          </Typography>
        </Grid>

        <Grid item>
          <Typography className={classes.subtitle} variant="h5">
            <Typed
              strings={infoConstants.mainTitle}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </Typography>
        </Grid>

        <Grid item>
          <Typography className={classes.subtitle} variant="h6">
            <Typed
              strings={infoConstants.techStack}
              typeSpeed={40}
              backSpeed={60}
              loop
            />
          </Typography>
        </Grid>

        <Grid item>
          <SocialBox />
        </Grid>

        <Grid item>
          <EmailMe />
        </Grid>
      </Grid>

    </>
  );
};

export default Home;

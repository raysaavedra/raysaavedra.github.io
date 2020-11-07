import React from 'react';
import { Particles as ReactParticles } from "react-particles-js";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";

import SocialBox from "../../components/SocialBox";
import EmailMe from "../../components/EmailMe";
import avatar from "../../assets/images/avatar.png";
import infoConstants from "../../constants/info";

const useStyles = makeStyles((theme) => ({
  particlesContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100%"
  },
  particlesCanvas: {
    position: "fixed",
  },
  avatar: {
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
      <div className={classes.particlesContainer}>
        <ReactParticles
          canvasClassName={classes.particlesCanvas}
          params={{
            "particles": {
                "number": {
                    "value": 160,
                    "density": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "speed": 4,
                        "size_min": 0.3
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "random": true,
                    "speed": 1,
                    "direction": "top",
                    "out_mode": "out"
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "repulse"
                    }
                },
                "modes": {
                    "bubble": {
                        "distance": 250,
                        "duration": 2,
                        "size": 0,
                        "opacity": 0
                    },
                    "repulse": {
                        "distance": 400,
                        "duration": 4
                    }
                }
            }
          }}
        />
      </div>

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

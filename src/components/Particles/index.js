import React from "react";
import { Particles as ReactParticles } from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";

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
}));

const Particles = () => {
  const classes = useStyles();
  
  return (
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
  );
};

export default Particles;

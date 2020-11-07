import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import EmailMe from "../../components/EmailMe";
import Particles from "../../components/Particles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    backgroundColor: "black",
  },
  title: {
    color: "tan",
    fontWeight: "bold"
  },
  text2: {
    color: "tomato",
    fontWeight: "bold"
  },
}));

const Contact = () => {
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
        spacing={4}
      >
        <Grid item>
        <Typography variant="h4" className={classes.title}>
            What's next?
          </Typography>
        </Grid>
        <Grid item>
        <Typography variant="h3" className={classes.text2}>
            GET IN TOUCH!
          </Typography>
        </Grid>
        <Grid item>
          <EmailMe title={"Say hello 👋"}/>
        </Grid>
      </Grid>
    </>
  )

};

export default Contact;

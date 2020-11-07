import React from "react";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import sidebarRoutes from "../../routes/sidebar";
import avatar from "../../assets/images/avatar.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    backgroundColor: "black"
  },
  mainBody: {
    height: "100%",
    maxHeight: '93vh',
    backgroundColor: "#000"
  },
  appBarSpacer: theme.mixins.toolbar,
  appbar: {
    background: "black",
    margin: 0,
    zIndex: theme.zIndex.drawer + 1,
    maxHeight: '7vh'
  },
  menu: {
    color: "tomato",
  },
  title: {
    color: "tan",
  },
  headerText: {
    color: "tomato"
  },
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
}));

const BaseLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appbar}>
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
            spacing={2}
          >
            {
              sidebarRoutes.map((item, index) => {
                return (
                  <Grid item key={index}>
                    <Button
                      variant="outlined"
                      startIcon={item.icon}
                      component={Link}
                      to={item.path}
                    >
                      <Typography variant="body2" className={classes.headerText}>
                        {item.title}
                      </Typography> 
                    </Button>
                  </Grid>
                )
              })
            }
          </Grid>
        </Toolbar>
      </AppBar>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
          <Box className={classes.mainBody}>
              {
                children
              }
          </Box>
      </main>
    </div>
  );
};

export default BaseLayout;

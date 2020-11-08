import React, {useState} from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Chip from '@material-ui/core/Chip';
import Button from "@material-ui/core/Button";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { makeStyles } from "@material-ui/core/styles";

import avatar from "../../assets/images/avatar.png";
import infoConstants from "../../constants/info";
import {TabPanel} from "../../components/Common";

const useStyles = makeStyles((theme) => ({
  card: {
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(6,1,1,1)
    },
    backgroundColor: "black",
    margin: theme.spacing(8,8,8,8)
  },
  avatar: {
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(30),
      height: theme.spacing(30),
    },
    width: theme.spacing(45),
    height: theme.spacing(45),
    margin: theme.spacing(1),
  },
  tanBg: {
    backgroundColor: "tan",
  },
  box: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0),
    },
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
  },
  chip: {
    margin: theme.spacing(0.5)
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  text: {
    color: "tomato"
  },
  whiteText: {
    color: "white"
  },
  whiteBoldText: {
    color: "white",
    fontWeight: "bold"
  },
  title: {
    color: "tomato",
    fontWeight: "bold"
  }
}));

const AboutMe = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Card raised={true} className={classes.card}>
      <Grid 
        container
        direction="column"
        align="center"
        justify="center"
        spacing={3}
      >
        <Grid item>
          <Typography className={classes.title} variant="h4">
            About Me
          </Typography>
        </Grid>
        <Grid item>
          <Box mt={4} mb={4}>
            <Grid container align="center" justify="center">
              <Grid item xs={6}>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <Typography className={classes.whiteText} variant="body1">
                      Hi! I'm Ray Anthony Saavedra, a software engineer based in Davao, Philippines.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.whiteText} variant="body1">
                      7 years of experience in the field of software engineering, particularly in web development; both in front-end and back-end development. Also knowledgable in mobile development; especially on iOS mobile applications and on cross-platform mobile app development. Good management skills for both team and project. At the same time, can work with minimal supervision.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.whiteText} variant="body1">
                      My tech stack:
                    </Typography>
                  </Grid>
                  <Grid item>
                      {
                        infoConstants.techStack.map((item, index) => {
                          return (
                            <Chip className={classes.chip} key={index} label={item} />
                          )
                        })
                      }
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container justify="center">
                  <Avatar className={classes.avatar} src={avatar} alt="raysaavedra" />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item>
          <Typography className={classes.title} variant="h4">
            Where I've Worked
          </Typography>
        </Grid>

        <Grid item>
          <Grid container justify="center" align="start">
            <Grid item>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                className={classes.tabs}
                TabIndicatorProps={{ style: { background: "tomato", color: "white" } }}
              >
                {
                  infoConstants.pastExp.map((item, index) => {
                    return (
                      <Tab key={index} label={item.name} className={value === item.value ? classes.title : classes.whiteBoldText} />
                    )
                  })
                }
              </Tabs>
            </Grid>
            <Grid item>
              {
                infoConstants.pastExp.map((item, index) => {
                  return (
                  <TabPanel value={value} index={item.value}>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography className={classes.whiteBoldText} variant="h6">
                          {item.position? `${item.position} @ ${item.name}` : item.name}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography className={classes.whiteText} variant="caption">
                          {item.years}
                        </Typography>
                      </Grid>

                      <Grid item>
                        <Box mt={2}>
                          {
                            item.description.map((d, index) => {
                              return (
                                <Typography key={index} className={classes.whiteText} variant="body2">
                                  {`- ${d}`}
                                </Typography>
                              )
                            })
                          }
                        </Box>
                      </Grid>
                    </Grid>
                  </TabPanel>
                  )
                })
              }
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Box mt={4} mb={4}>
            <Button 
              variant="contained"
              size="large"
              component={Link}
              to={'/portfolio'}
              style={{backgroundColor: "#222"}}
              endIcon={<NavigateNextIcon className={classes.title} />}
            >
              <Typography className={classes.title} variant="h4">
                Some Things I've Built
              </Typography>
            </Button>
          </Box>
        </Grid>
      
      </Grid>
    </Card>
  )
};

export default AboutMe;

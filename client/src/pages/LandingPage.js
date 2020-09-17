import React from 'react'
import { Redirect } from 'react-router-dom';
import { Button, Typography, Container } from '@material-ui/core';
import CssBaseLine from '@material-ui/core/CssBaseline';
import { makeStyles } from "@material-ui/core/styles";

import isAuthenticated from "../utils/checkAuthToken";

const useStyles = makeStyles((theme) => ({
  landing: {
    width: '50%',
    marginTop: theme.spacing(1),
    margin: "20px",
    textAlign: "center",
  },
  landing_btn: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  btn: {
    marginTop: theme.spacing(1),
    width: "30%",
  },
  block: {
    marginTop: theme.spacing(20),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function LandingPage() {

  const classes = useStyles();

  if (isAuthenticated("Authorization") ){
    return <Redirect to="/user/home" /> 
  }

  return (
   
      <Container component="main" maxwidth="xs">

      <CssBaseLine />
      <div className={classes.block}>

        <div className={classes.landing}>

          <Typography component="h1" variant="h3" color="primary">
            ePortfolio
          </Typography>

          <br />

          <div className={classes.inneralign}>

            <div className={classes.landing_btn}>
              <Button className={classes.btn} color="primary" variant="outlined" href="#">
                See Examples
              </Button>
            </div>

            <div className={classes.landing_btn}>
              <Button className={classes.btn} color="primary" variant="contained" href="/user/signup">
                Start Now
              </Button>
            </div>

          </div>

        </div>

      </div>
    </Container>
  )
}
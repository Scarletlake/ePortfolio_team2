import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import isAuthenticated from "../utils/checkAuthToken";
import {userLogOut} from '../api/userAPI';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles=makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logoButton: {
    marginRight: theme.spacing(2),
    flexGrow: 1,
  },

  userButton: {
    flexGrow: 1,
    float:"right",
  }
}));

const GuestNavBar =()=>{
  const classes = useStyles;
  return (
      <div>
        <AppBar position="static">
          <Toolbar>

            <Button href='/' color="inherit" className={classes.logoButton}>
                <Typography variant="h6">
                  ePortfolio
                </Typography>
            </Button>

            <Grid container direction="row" justify = "flex-end" alignItems="center">
            <ButtonGroup variant="text" color = "inherit" aria-label="text primary button group" className={classes.userButton}>
              <Button href="/user/signin">SignIn</Button>
              <Button href="/user/signup">SignUp</Button>
            </ButtonGroup>
            </Grid>

          </Toolbar>
        </AppBar>
      </div>
)
}

const AuthNavBar =()=> {

  const classes = useStyles;
  return(
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Button href='/user/home' color="inherit">
                ePortfolio
              </Button>
            </Typography>

            <Grid container direction="row" justify = "flex-end" alignItems="center">
            <ButtonGroup variant="text" color = "inherit" aria-label="text primary button group" className={classes.userButton}>
              <Button color="inherit" onClick={userLogOut}>SignOut</Button>
              <Button color="inherit" href="/user/home">DashBoard</Button>
              <Button color="inherit" href="/user/profile">Profile</Button>
              <Button color="inherit" href="/portfolio/template">Create a new portfolio</Button>
            </ButtonGroup>

            </Grid>
          </Toolbar>
        </AppBar>
      </div>
);
}

export default function NavBar() {

  return (
    <div>
      {isAuthenticated("Authorization") ? 
      <AuthNavBar /> : 
      <GuestNavBar />
      }
    </div> 
    );
  
}
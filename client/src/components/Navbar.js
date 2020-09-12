import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import isAuthenticated from "../utils/checkAuthToken";
import {userLogOut} from '../api/userAPI';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const useStyles=makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const loggedOut =()=>{
  const classes = useStyles;
  return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Link href='/' color="inherit">
                ePortfolio
              </Link>
            </Typography>
            <Button color="inherit"  href="/user/signin">SignIn</Button>
            <Button color="inherit"  href="/user/signup">SignUp</Button>
          </Toolbar>
        </AppBar>
      </div>
)
}

const loggedIn =()=> {
  const classes = useStyles;
  return(
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Link href='/user/home' color="inherit">
                ePortfolio
              </Link>
            </Typography>
            <Button onClick={userLogOut}>SignOut</Button>
          </Toolbar>
        </AppBar>
      </div>
);
}

export default function NavBar() {
  if (isAuthenticated("Authorization")) {
    return (
        loggedIn());
  } else {
    return loggedOut();
  }
}
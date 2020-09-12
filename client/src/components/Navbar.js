import React, { useState } from 'react';
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

const GuestNavBar =()=>{
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

const AuthNavBar =()=> {

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
            <Button onClick={userLogOut}>DashBoard</Button>
          </Toolbar>
        </AppBar>
      </div>
);
}

export default function NavBar() {
  const [userAuthenticated, setUserAuthenticated] = useState(isAuthenticated("Authorization"));

  return (
    <div>
      {userAuthenticated ? 
      <AuthNavBar /> : 
      <GuestNavBar />
      }
    </div> 
    );
  
}
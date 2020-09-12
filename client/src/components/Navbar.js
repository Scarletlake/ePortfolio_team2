import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import isAuthenticated from "../utils/checkAuthToken";
import {userLogOut} from '../api/userAPI';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
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
  menuButton: {
    marginLeft: theme.spacing(2),
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
            <Grid container
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
            >
              <Button color="inherit"  href="/user/signin">SignIn</Button>
              <Button color="inherit"  href="/user/signup">SignUp</Button>
            </Grid>
            
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
            <Grid container
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
            >
              <Button className={classes.menuButton} onClick={userLogOut}>SignOut</Button>
              <Button className={classes.menuButton} href="/user/home">DashBoard</Button>
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
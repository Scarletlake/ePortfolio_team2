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
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

const useStyles=makeStyles((theme) => ({
  logoButton: {
    flexGrow: 1,
  },
  userButton: {
    flexGrow: 1,
  },
  title:{
    flexGrow: 1
  },
}));

const GuestNavBar =()=>{
  return (
      <div>
        <AppBar position="static">
          <Toolbar>
              <IconButton href="/" color="inherit">
                <HomeIcon/>
              </IconButton>

                <Typography variant="h6" >
                  ePortfolio
                </Typography>


            <Grid container direction="row" justify = "flex-end" alignItems="center">
            <ButtonGroup variant="text" color = "inherit" aria-label="text primary button group" >
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

  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }
  return(
      <div>
        <AppBar position="static">
          <Toolbar>
              <IconButton href="/user/home" color="inherit">
                <HomeIcon/>
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                ePortfolio
              </Typography>

            <Grid container direction="row" justify = "flex-end" alignItems="center">
                <div>
                  <IconButton aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit">
                    <AccountCircle/>
                  </IconButton>
                  <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{vertical: 'top', horizontal: 'right',}} keepMounted transformOrigin={{vertical: 'top',  horizontal: 'right',}} open={open} onClose={handleClose}>
                    <MenuItem onClick={handleClose} color="inherit"><a href="/user/profile" style={{ color:'black',textDecoration: 'none', backgroundColor: 'none'}}>Profile</a ></MenuItem>
                    <MenuItem onClick={handleClose} color="inherit"><a href="/user/home" style={{ color:'black',textDecoration: 'none', backgroundColor: 'none'}}>Dashboard</a ></MenuItem>
                    <MenuItem onClick={handleClose} color="inherit"><a href="/portfolio/template" style={{ color:'black',textDecoration: 'none', backgroundColor: 'none'}}>Create a new portfolio</a ></MenuItem>
                    <MenuItem onClick={userLogOut}>Sign Out</MenuItem>
                  </Menu>
                </div>
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
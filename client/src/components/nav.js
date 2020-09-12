import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import isAuthenticated from "../utils/checkAuthToken";
import {userLogOut} from '../api/userAPI';
import {Button, AppBar, Toolbar, Link} from '@material-ui/core';

const loggedOut =()=>{
    return (
        <div>
            <Appbar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Link href='/user/home'>
                            ePortfolio
                        </Link>
                    </Typography>
                    <Button color="inherit"  href="/user/signin">SignIn</Button>
                    <Button color="inherit"  href="/user/signup">SignUp</Button>
                </Toolbar>
            </Appbar>
        </div>
    )
}

const loggedIn =()=> {
    return{
        <div>
            <Appbar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Link href='/user/home'>
                            ePortfolio
                        </Link>
                    </Typography>
                    <Button onClick={userLogOut}>SignOut</Button>
                </Toolbar>
            </Appbar>
        </div>
    }
}

export default function NavBar() {
    if (isAuthenticated("Authorization")) {
        return (
            loggedIn());
    } else {
        return loggedOut();
    }
}
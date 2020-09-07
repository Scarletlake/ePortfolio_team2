import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import isAuthenticated from "../utils/checkAuthToken";
import {userLogOut} from '../api/userAPI';

const Navbar = () => {

  // if user has logged in
  const authLinks = (
    <ul>  
      <li>
        <a onClick={userLogOut} href='#!'>
          <span className='hide-sm'>Logout</span>     
        </a> 
      </li>    
      <li>
        <Link to='/user/home'>
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>      
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/user/signin'>SignIn</Link>
      </li>
      <li>
        <Link to='/user/signup'>SignUp</Link>
      </li>
      <li>
        <Link to='/user/home'>Home</Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          ePortfolio
        </Link>
      </h1>
        <Fragment>{isAuthenticated('Authorization') ? authLinks : guestLinks}</Fragment>
    </nav>
  );
};


export default Navbar;
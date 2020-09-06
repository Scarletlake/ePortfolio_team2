import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Fragment>
      <h1 className="landing-title">
      ePortfolio
      </h1>

      <img></img>

      <Link to='/' className="btn" >See Examples</Link>
      <br />
      <Link to='/user/signup' className="btn" >Start Now</Link>
    </Fragment>
  );
};

export default NotFound;

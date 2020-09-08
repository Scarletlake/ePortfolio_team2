import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom';

class LandingPage extends Component {
  render() {
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
    )
  }
}

export default LandingPage

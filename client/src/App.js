<<<<<<< HEAD
import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => {
  return (
    
      <h1>
        E-Portfolio
      </h1>
   
=======
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import PrivateRoute from "./components/PrivateRoute"
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import LandingPage from "./pages/LandingPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/user/signin" component={SignInPage} />
            <Route exact path="/user/signup" component={SignUpPage} />
            <PrivateRoute exact path="/user/home" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
>>>>>>> ouyangh_merge
  );
};

export default App;

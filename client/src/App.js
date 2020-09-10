import React, { Fragment, useEffect } from 'react';
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
            <Route exact path="/user/home" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
  );
};

export default App;

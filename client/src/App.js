import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import PrivateRoute from "./components/PrivateRoute"
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";
import TemplatePage from "./pages/TemplatePage";
import PortfolioPage from "./pages/PortfolioPage";
import PortfolioEditorPage from "./pages/PortfolioEditorPage";
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
            <PrivateRoute exact path="/user/profile" component={ProfilePage} />
            <PrivateRoute exact path="/portfolio/editor" component={PortfolioEditorPage} />
            <PrivateRoute exact path="/portfolio/template" component={TemplatePage} />
            <Route exact path="/portfolio/:id" component={PortfolioPage} />
            <Route component={NotFoundPage} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
  );
};

export default App;

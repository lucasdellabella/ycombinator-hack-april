import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "../Landing";

import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../Session";

const App = () => (
  <Router>
    <div>
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
    </div>
  </Router>
);

export default withAuthentication(App);

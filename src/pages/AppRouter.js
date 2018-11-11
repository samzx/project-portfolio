import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import Landing from "./Landing";
import Projects from "./Projects";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      {/*<Header />*/}
      <Switch>
        <Route path="/" component={Landing} exact={true} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;

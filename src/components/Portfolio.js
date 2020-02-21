import "typeface-roboto";
import React from "react";
import PortfolioToolbar from "./PortfolioToolbar";
import PortfolioFooter from "./PortfolioFooter";
import Projects from "./Projects";
import Resume from "./Resume";
import { Switch, Route } from "react-router-dom";

export default function Portfolio() {
  return (
    <React.Fragment>
      <PortfolioToolbar />
      <main>
        <Switch>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            <Projects />
          </Route>
        </Switch>
      </main>
      <PortfolioFooter />
    </React.Fragment>
  );
}

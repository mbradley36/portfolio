import "typeface-roboto";
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import PortfolioToolbar from "./PortfolioToolbar";
import PortfolioFooter from "./PortfolioFooter";
import Projects from "./Projects";
import Resume from "./Resume";
import { Switch, Route } from "react-router-dom";

export default function Portfolio() {
  return (
    <React.Fragment>
      <CssBaseline />
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

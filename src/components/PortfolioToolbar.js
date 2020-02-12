import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import { Link, withRouter } from "react-router-dom";

class PortfolioToolbar extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar position="fixed">
          <Tabs
            variant="fullWidth"
            value={this.props.history.location.pathname}
            aria-label="tabs"
          >
            <Tab label="Projects" value="/" component={Link} to="/" />
            <Tab label="Resume" value="/resume" component={Link} to="/resume" />
          </Tabs>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default withRouter(PortfolioToolbar);

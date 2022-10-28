import React, { useEffect, useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  toolBar: {
    backgroundColor: "#3a7667",
  },
  indicator: {
    backgroundColor: "rgb(255, 127, 80)",
  },
}));

export default function PortfolioToolbar() {
  const classes = useStyles();
  let history = useHistory({ forceRefresh: true });
  const [path, setPath] = useState(history.location.pathname);

  React.useEffect(() => {
    return history.listen((location) => {
      setPath(location.pathname);
    });
  }, [history]);

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Tabs
          value={path}
          variant="fullWidth"
          classes={{ indicator: classes.indicator, root: classes.toolBar }}
          aria-label="tabs"
        >
          <Tab label="Projects" value="/" component={Link} to="/" />
          <Tab label="Resume" value="/resume" component={Link} to="/resume" />
        </Tabs>
      </AppBar>
    </React.Fragment>
  );
}

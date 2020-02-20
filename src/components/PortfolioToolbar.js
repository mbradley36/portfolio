import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// const useStyles = makeStyles(theme => ({
//   toolBar: {
//     backgroundColor: "#00A896"
//   }
// }));

export default function PortfolioToolbar() {
  // const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Tabs variant="fullWidth" aria-label="tabs">
          <Tab label="Projects" value="/" component={Link} to="/" />
          <Tab label="Resume" value="/resume" component={Link} to="/resume" />
        </Tabs>
      </AppBar>
    </React.Fragment>
  );
}

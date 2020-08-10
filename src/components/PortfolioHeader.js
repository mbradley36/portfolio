import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    overflow: "hidden",
  },
}));

export default function PortfolioHeader() {
  const classes = useStyles();

  return (
    <div id="header-image">
      <div id="header-content">
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h1"
            align="center"
            color="textPrimary"
            gutterBottom
            id="header-text"
          >
            Miranda Huet
          </Typography>
          <Typography
            component="h4"
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
            id="header-sub-text"
          >
            Software Engineer
          </Typography>
        </Container>
      </div>
    </div>
  );
}

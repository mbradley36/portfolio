import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import PortfolioCard from "./PortfolioCard";
import PortfolioHeader from "./PortfolioHeader";

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: 0,
    display: "flex"
  },
  sectionContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 3)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    display: "flex",
    alignItems: "stretch",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: 16
  }
}));

//import json files of portfolio pieces
const devCards = require("../data/devWork.json");
const oldDevCards = require("../data/oldDevWork.json");
const artCards = require("../data/animationAndArt.json");

export default function Projects() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.heroContent}>
        <PortfolioHeader />
      </div>
      <div className={classes.sectionContent}>
        <Container maxWidth="sm">
          <Typography
            component="h2"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Development
          </Typography>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid xs container spacing={4} alignItems="stretch">
          {devCards.map(card => (
            <Grid xs item key={card.id} xs={12} sm={6} md={4}>
              <PortfolioCard card={card} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <div className={classes.sectionContent}>
        <Container maxWidth="sm">
          <Typography
            component="h2"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Older Development Work
          </Typography>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid xs container spacing={4}>
          {oldDevCards.map(card => (
            <Grid xs item key={card.id} xs={12} sm={6} md={4}>
              <PortfolioCard card={card} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <div className={classes.sectionContent}>
        <Container maxWidth="sm">
          <Typography
            component="h2"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Animation & Art
          </Typography>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid xs container spacing={4}>
          {artCards.map(card => (
            <Grid xs item key={card.id} xs={12} sm={6} md={4}>
              <PortfolioCard card={card} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

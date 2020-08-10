import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import PortfolioCard from "./PortfolioCard";
import PortfolioHeader from "./PortfolioHeader";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: 0,
    display: "flex",
  },
  sectionContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 1),
    alignContent: "center",
  },
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
            id="h2-responsive"
          >
            Development
          </Typography>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4} alignItems="stretch">
          {devCards.map((card) => (
            <Grid xs={12} item={true} key={card.id} sm={6} md={4}>
              <PortfolioCard card={card} key={card.id} />
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
            id="h2-responsive"
          >
            Older Development Work
          </Typography>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {oldDevCards.map((card) => (
            <Grid xs={12} item={true} key={card.id} sm={6} md={4}>
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
            id="h2-responsive"
          >
            Animation & Art
          </Typography>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {artCards.map((card) => (
            <Grid xs={12} item={true} key={card.id} sm={6} md={4}>
              <PortfolioCard card={card} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

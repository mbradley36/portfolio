import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import PortfolioCard from "./PortfolioCard";

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(12, 0, 6),
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  sectionContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 3)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
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
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h1"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Miranda Huet
          </Typography>
          <Typography
            component="h4"
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Software Engineer
          </Typography>
        </Container>
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
        <Grid container spacing={4}>
          {devCards.map(card => (
            <Grid item key={card.id} xs={12} sm={6} md={4}>
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
        <Grid container spacing={4}>
          {oldDevCards.map(card => (
            <Grid item key={card.id} xs={12} sm={6} md={4}>
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
        <Grid container spacing={4}>
          {artCards.map(card => (
            <Grid item key={card.id} xs={12} sm={6} md={4}>
              <PortfolioCard card={card} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

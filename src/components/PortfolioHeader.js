import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  headerBackground: {
    backgroundImage: "url(images/headerImage.gif)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: theme.spacing(100, 0, 0),
    width: "100%"
  },
  headerContent: {
    width: "100%",
    top: "50%",
    left: "50%",
    position: "absolute",
    transform: "translate(-50%, -50%)"
  },
  headerContainer: {
    overflow: "hidden"
  }
}));

export default function PortfolioHeader() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.headerBackground} />
      <div className={classes.headerContent}>
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
    </React.Fragment>
  );
}

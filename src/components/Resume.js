import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ResumeStepper from "./ResumeStepper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(16, 0, 3)
    },
    header: {
      textAlign: "center",
      alignItems: "flex-end"
    }
  })
);

export default function Resume() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} className={classes.header}>
        <Grid item xs={6}>
          <Typography variant="h2" style={{ textAlign: "right" }}>
            Miranda Huet
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography style={{ display: "flex" }}>
            // Product-minded software engineer, woodworker and adventurer.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Austin, Texas • mirandajhuet@gmail.com • 678-982-1748
          </Typography>
        </Grid>
      </Grid>

      <ResumeStepper />
    </div>
  );
}

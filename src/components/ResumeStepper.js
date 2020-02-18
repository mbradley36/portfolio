import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      spacing: 2,
      maxWidth: "50%"
    },
    resumeContent: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    },
    sectionContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(12, 0, 3)
    }
  })
);

export default function ResumeStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const resumeContent = require("../data/resumeContent.json");

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <Grid container className={classes.sectionContent}>
      <Grid item className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {resumeContent.map((label, index) => {
            const labelProps: { optional?: React.ReactNode } = {};
            return (
              <Step key={label}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Grid>
      <Grid item>
        <Typography className={classes.resumeContent}>content here</Typography>
      </Grid>
    </Grid>
  );
}

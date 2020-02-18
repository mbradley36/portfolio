import React, { useEffect, useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import { ScrollPercentage } from "react-scroll-percentage";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      padding: theme.spacing(4, 0, 3)
    }
  })
);

function getSteps() {
  return ["1", "2", "3", "1", "2", "3", "1", "2", "3"];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return [
        {
          title: "Senior Software Engineer",
          company: "AT&T Design Technology"
        }
      ];
    case 1:
      return [
        {
          title: "Senior Software Engineer",
          company: "AT&T Design Technology"
        }
      ];
    case 2:
      return [
        {
          title: "Senior Software Engineer",
          company: "AT&T Design Technology"
        }
      ];
    case 3:
      return [
        {
          title: "Senior Software Engineer",
          company: "AT&T Design Technology"
        }
      ];
    case 4:
      return [
        {
          title: "Senior Software Engineer",
          company: "AT&T Design Technology"
        }
      ];
    case 5:
      return [
        {
          title: "Senior Software Engineer",
          company: "AT&T Design Technology"
        }
      ];
    case 6:
      return [
        {
          title: "Senior Software Engineer",
          company: "AT&T Design Technology"
        }
      ];
    case 7:
      return [
        {
          title: "Senior Software Engineer",
          company: "AT&T Design Technology"
        }
      ];
    case 8:
      return [
        {
          title: "Senior Software Engineer",
          company: "AT&T Design Technology"
        }
      ];
    default:
      return "";
  }
}

export default function Resume() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleScroll = percentage => {
    console.log(percentage);
  };

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <ScrollPercentage
      as="div"
      onChange={(percentage, entry) => {
        handleScroll(percentage);
      }}
    >
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>
              {getStepContent(index).map(position => {
                return (
                  <React.Fragment key={index}>
                    <Typography variant="h4">{position.title}</Typography>
                    <Typography variant="h6">{position.company}</Typography>
                  </React.Fragment>
                );
              })}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </ScrollPercentage>
  );
}

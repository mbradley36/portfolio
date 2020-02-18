import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import { ScrollPercentage } from "react-scroll-percentage";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(4, 0, 3)
    }
  })
);

function getSteps() {
  return ["1", "2", "3", "4"];
}

function getStepTitle(step: number) {
  switch (step) {
    case 0:
      return [
        {
          title: "Senior Software Engineer",
          company: "AT&T Design Technology",
          description:
            "Past Positions as Software Engineer and Associate Applications Developer. Lead developer on internal vacation-scheduling chatbot. Responsible for NLP, database design and development, experience flow, testing, requirements definition, maintenance and handoff. Helped establish chatbot platform needs and collaborated with platform developers on issues. Resulting product provided 3M/yr savings in returned work time. Develop prototypes and support the research process through technical evaluations and data Investigations. Promote customer-centric mentality across various projects in partnership with User Experience Designers and User Researchers. Mentor developer new hires, volunteer mentor with Girls Who Code. Panelist in company-wide event discussing the intersection of design and AI. Drafted eight patents, currently in various stages of patent submission system. Spearheaded volunteer team for Keep Austin Fed."
        }
      ];
    case 1:
      return [
        {
          title: "Game Developer",
          company: "SideFX Software",
          description:
            "Conceptualized, coordinated and programmed demo highlighting Houdini core features within Unreal Game Engine. Acted as company representative at various convention demos."
        }
      ];
    case 2:
      return [
        {
          title: "Quality Assurance Intern",
          company: "Adult Swim Games, Turner",
          description:
            "Spearheaded testing of unreleased games in development, including regression testing, bug report logging, and collaborating with developers to effectively identify bug sources."
        }
      ];
    case 3:
      return [
        {
          title: "Generalist",
          company: "Georgia Tech Game Studio",
          description:
            "Conceptualized, coordinated and programmed prototypes. Stepped in on artistic tasks as needed and served as an intermediary between art and development needs. Developer on the team’s first IOS and Android release."
        }
      ];
    default:
      return "";
  }
}

export default function Resume() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(2);
  const steps = getSteps();

  const handleScroll = (percentage, entry) => {
    console.log(entry, " ", percentage);
  };

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <ScrollPercentage
        as="div"
        onChange={(percentage, entry) => {
          handleScroll(percentage, entry);
        }}
      >
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label} completed={false}>
              <StepLabel>
                {getStepTitle(index).map(position => {
                  return (
                    <Grid container spacing={3}>
                      <Grid item xs={6} key={index}>
                        <Typography variant="h4">{position.title}</Typography>
                        <Typography variant="h6">{position.company}</Typography>
                      </Grid>
                      <Grid item xs={6} key={index}>
                        <Typography variant="h6">
                          {position.description}
                        </Typography>
                      </Grid>
                    </Grid>
                  );
                })}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </ScrollPercentage>
    </div>
  );
}

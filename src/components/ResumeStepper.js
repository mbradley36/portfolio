import React, { useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { InView } from "react-intersection-observer";
import grey from "@material-ui/core/colors/grey";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(4, 0, 3),
    },
    active: {
      color: grey[900],
    },
    inactive: {
      color: grey[500],
    },
    company: {
      color: "#882400",
    },
  })
);

function getSteps() {
  return ["1", "2", "3", "4"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return [
        {
          title: "Senior Software Engineer",
          company: "Flyhomes",
          description:
            "Responsible for developing and maintaining customer-facing site and internal tools (prior). Rebuilt internal Bookings front-end to improve code structure and UX, utilizing Typescript and Functional components while prioritizing test coverage. Lead Developer on rebuilding customer-facing tours experience. Drove conversion of testing to React Testing Library to encourage a user-focused testing strategy. Spearheaded collaboration with Design and Product teams to ensure product quality and capture shifting requirements in a dynamic environment. Launched and led the Volunteering ERG, organized a local volunteer day with Habitat for Humanity.",
        },
      ];
    case 1:
      return [
        {
          title: "Lead Software Engineer",
          company: "QD Solutions",
          description:
            "Responsible for developing and maintaining multiple applications, including an existing Django-based patient screener tool with dashboards for different user types. Designed and developed MERN storefront for clinics to order supplies needed for studies. Developed React-based static informational sites on studies. Collaborated with vendor Cloudnexa to deploy and manage applications on AWS.",
        },
      ];
    case 2:
      return [
        {
          title: "Senior Software Engineer",
          company: "AT&T Design Technology",
          description:
            "Past Positions as Software Engineer and Associate Applications Developer. Lead developer on internal vacation-scheduling chatbot. Responsible for NLP, database design and development, experience flow, testing, requirements definition, maintenance and handoff. Helped establish chatbot platform needs and collaborated with platform developers on issues. Resulting product provided 3M/yr savings in returned work time. Develop prototypes and support the research process through technical evaluations and data Investigations. Promote customer-centric mentality across various projects in partnership with User Experience Designers and User Researchers. Mentor developer new hires, volunteer mentor with Girls Who Code. Panelist in company-wide event discussing the intersection of design and AI. Drafted eight patents, currently in various stages of patent submission system. Spearheaded volunteer team for Keep Austin Fed.",
        },
      ];
    case 3:
      return [
        {
          title: "Game Development Intern",
          company: "SideFX Software",
          description:
            "Conceptualized, coordinated and programmed demo highlighting Houdini core features within Unreal Game Engine. Acted as company representative at various convention demos.",
        },
      ];
    default:
      return "";
  }
}

export default function ResumeStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleScroll = (inView, entry, { index }) => {
    if (inView) setActiveStep(index);
    else if (activeStep === index) setActiveStep(index - 1);
  };
  const renderCompany = (name) => {
    return <span className={classes.company}> {name}</span>;
  };

  return (
    <div className={classes.root}>
      {steps.map((label, index) =>
        getStepContent(index).map((position) => {
          return (
            <Grid
              container
              spacing={3}
              key={position.title}
              className={
                index === activeStep ? classes.active : classes.inactive
              }
            >
              <Grid item md={2} sm={12} />
              <Grid item sm={3} xs={12}>
                <Typography>{position.title}</Typography>
                <Typography variant="h6">
                  {renderCompany(position.company)}
                </Typography>
              </Grid>
              <Grid item md={6} sm={8} xs={12} key={index} id="resume-content">
                <InView
                  as="div"
                  threshold="0.75"
                  onChange={(inView, entry) =>
                    handleScroll(inView, entry, { index })
                  }
                >
                  <Typography variant="h6">{position.description}</Typography>
                </InView>
              </Grid>
            </Grid>
          );
        })
      )}
    </div>
  );
}

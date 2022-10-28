import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ResumeStepper from "./ResumeStepper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 3),
    },
    header: {
      textAlign: "center",
      alignItems: "flex-end",
      padding: theme.spacing(4, 0, 0),
    },
    divider: {
      backgroundColor: "#ff7f50",
      marginLeft: "10%",
      marginRight: "10%",
    },
    miniDividerL: {
      backgroundColor: "#ff7f50",
      width: "2.5%",
      display: "inline-block",
      marginBottom: "0.5%",
      marginRight: "0.5%",
    },
    miniDividerR: {
      backgroundColor: "#ff7f50",
      width: "2.5%",
      display: "inline-block",
      marginBottom: "0.5%",
      marginLeft: "0.5%",
    },
    company: {
      color: "#882400",
    },
    comment: {
      textAlign: "left",
    },
  })
);

export default function Resume() {
  const classes = useStyles();
  const dot = () => {
    return <span style={{ color: "#ff7f50" }}>•</span>;
  };

  const renderCompany = (name) => {
    return <span className={classes.company}> {name}</span>;
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={1} className={classes.header}>
          <Grid item sm={6} xs={12}>
            <Typography variant="h3" id="resume-name">
              Miranda Bradley
            </Typography>
          </Grid>
          <Grid
            item
            sm={6}
            xs={12}
            id="comment-container"
            className={classes.comment}
          >
            <Typography variant="h6" id="comment-slashes">
              {
                //eslint-disable-next-line
              }
              //&nbsp;
            </Typography>
            <Typography variant="h6" id="resume-comment">
              Product-Minded Software Engineer
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Seattle, WA {dot()} mirandajbradley@gmail.com {dot()} 678-982-1748
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider className={classes.divider} />
          </Grid>
        </Grid>

        <ResumeStepper renderCompany={renderCompany()} />
      </Container>

      <Container maxWidth="md">
        <Grid container spacing={1} className={classes.header}>
          <Grid item xs={12}>
            <Typography variant="h6">
              <Divider className={classes.miniDividerL} />
              Additional Experience
              <Divider className={classes.miniDividerR} />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography id="resume-sub-category">
              <i>
                <b>Quality Assurance Intern</b>
                {renderCompany("Adult Swim Games, Turner")}(2015),
                <b> Game Development TA</b> for
                {renderCompany("Georgia Institute of Technology")}(2014),
                <b> 3D Freelance Artist</b> for
                {renderCompany("Interlaced Productions")}
                (2011-2012), and <b>Maya Tutor</b> for
                {renderCompany("Savannah College of Art and Design")}{" "}
                (2008-2010).
              </i>
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={1} className={classes.header}>
          <Grid item xs={12}>
            <Divider className={classes.divider} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4">Technical Proficiencies</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography id="resume-sub-category">
              Java {dot()} C# {dot()} Python {dot()} MySQL {dot()} React {dot()}{" "}
              NodeJS {dot()} JavaScript {dot()} Angular {dot()} Natural Language
              Processing {dot()} Git {dot()} The Adobe Suite {dot()} Unity{" "}
              {dot()} Unreal {dot()}
              Autodesk Maya {dot()} Side FX Houdini
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={1} className={classes.header}>
          <Grid item xs={12}>
            <Divider className={classes.divider} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4">Education and Organizations</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Georgia Institute of Technology {dot()}{" "}
              <b>Master of Science Degree</b> in Computer Science
            </Typography>
            <Typography>
              Savannah College of Art & Design {dot()}{" "}
              <b>Bachelor of Fine Arts Degree</b> in Animation
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">
              <Divider className={classes.miniDividerL} />
              Continuing Education
              <Divider className={classes.miniDividerR} />
            </Typography>
            <Typography>
              Udacity {dot()} <b>AI Nanodegree</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">
              <Divider className={classes.miniDividerL} />
              Volunteer Organizations
              <Divider className={classes.miniDividerR} />
            </Typography>
            <Typography>
              Broads and Boards {dot()} Board Member {dot()} Present
            </Typography>
            <Typography>
              Move Food {dot()} Software Development {dot()} Present
            </Typography>
            <Typography>
              Keep Austin Fed {dot()} Food Runner {dot()} Present
            </Typography>
            <Typography>
              Girls Who Code {dot()} Mentor {dot()} 2016, 2018, 2019
            </Typography>
            <Typography>Texas Mission Of Mercy {dot()} 2018</Typography>
            <Typography>
              We Teach Science {dot()} Mentor {dot()} 2016
            </Typography>
            <Typography>
              Trade THEM for STEM {dot()} Event organization and competition
              judging {dot()}
              2016
            </Typography>
            <Typography>
              CoderDojo {dot()} Curriculum Developer {dot()} 2015
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

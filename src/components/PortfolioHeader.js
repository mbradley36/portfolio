import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function PortfolioHeader() {
  return (
    <div
      id="header-image"
      alt={
        "image of a desk with a keyboard, lamp, sticky notes, glasses, coffee mug and a cross stitch of cactuses"
      }
    >
      <div id="header-content">
        <Container>
          <Typography
            component="h1"
            variant="h1"
            align="center"
            color="textPrimary"
            gutterBottom
            id="header-text"
          >
            Miranda Bradley
          </Typography>
          <Typography
            component="h4"
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
            id="header-sub-text"
          >
            Software Engineer
          </Typography>
        </Container>
      </div>
    </div>
  );
}

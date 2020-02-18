import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import CardModal from "./CardMoal";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    height: "100%"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  }
}));

export default function PortfolioCard({ card }) {
  const classes = useStyles();

  const renderCard = card => {
    const cardContent = (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.cardMedia}
            image={card.image}
            title={card.title}
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {card.title}
            </Typography>
            <Typography>{card.description}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );

    //if the card has a valid link, link it
    //otherwise use a popup modal with further description
    if (card.link === "") {
      return (
        <CardModal
          cardContent={cardContent}
          modalTitle={card.title}
          modalContent={card.longDescription}
        />
      );
    } else {
      return (
        <Link to={card.link} style={{ textDecoration: "none" }}>
          {cardContent}
        </Link>
      );
    }
  };

  return <React.Fragment>{renderCard(card)}</React.Fragment>;
}

import React from "react";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import CardModal from "./CardModal";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function PortfolioCard({ card }) {
  const classes = useStyles();

  const renderCard = (card) => {
    const cardContent = (
      <CardActionArea>
        <CardMedia
          className={classes.cardMedia}
          image={card.image}
          title={card.title}
          alt={`${card.title} image`}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2" id="card-title">
            {card.title}
          </Typography>
          <Typography>{card.description}</Typography>
        </CardContent>
      </CardActionArea>
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
        <Link href={card.link} class="card-link" id={card.title}>
          {cardContent}
        </Link>
      );
    }
  };

  return renderCard(card);
}

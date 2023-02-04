import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "../../../static/css/cards.css";
import { height } from "@mui/system";
import Chip from "@mui/material";
import Divider from "@mui/material/Divider";
import {FcLike} from "react-icons/fc"

function PetCardComp() {
  return (
    <Card sx={{ width: 200, height: 300 }}>
      <div id="like--area">
        <FcLike />
      </div>
      <CardActionArea>
        <CardMedia
          component="img"
          image="../../../static/images/puppy1.jpg"
          alt="Rotweiler pup"
        />
        <div id="pet--card--text--div">
          <h4 className="pet--card--name">Brudder</h4>
          <p className="pet--card--text">Rotweiler | 2 months | Male</p>
        </div>
      </CardActionArea>
    </Card>
  );
}

export default PetCardComp;

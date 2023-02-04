import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { FaCat } from "react-icons/fa";
import { GiSittingDog } from "react-icons/gi";
import "../../../static/css/cards.css";
import { useNavigate,redirect } from "react-router-dom";

export default function AnimalCard(props) {
  const navigate = useNavigate()
  const navigateToPuppiesAndDogs = () =>{
    navigate("/puppies-and-dogs-for-sale" , { replace: true });
  }
  return (
    <Card sx={{ maxWidth: 345 }} className="animal--card">
      <CardActionArea className="animal--card" onClick={navigateToPuppiesAndDogs}>
        <Grid container direction="column" alignItems="center">
          {props.dog ? (
            <GiSittingDog size={80} color="burlywood" />
          ) : (
            <FaCat size={80} color="burlywood" />
          )}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" textAlign="center">
              {props.petType}
            </Typography>
            <Typography variant="body2" color="text.secondary" textAlign="center">
              {props.bodyText}
            </Typography>
          </CardContent>
        </Grid>
      </CardActionArea>
    </Card>
  );
}

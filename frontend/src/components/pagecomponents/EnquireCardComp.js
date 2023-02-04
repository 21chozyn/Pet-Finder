import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function EnquireCardComp(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          Considering {props.name} for adoption?
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex", flexDirection:"column"}}>
        <Button size="large" sx={{width:300}} variant="contained">Start your enquiry</Button>
        <Button size="large" sx={{width:300, marginTop:2}} variant="outlined">Read FAQs</Button>        
      </CardActions>
      <CardActions >
        <Button size="small" sx={{margin:"auto"}}>Sponsor</Button>
        <Button size="small" sx={{margin:"auto"}}>
          <FavoriteBorderIcon />
          Favorite
        </Button>
      </CardActions>
    </Card>
  );
}

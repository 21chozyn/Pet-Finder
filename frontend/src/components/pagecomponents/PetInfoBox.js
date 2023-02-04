import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

function PetInfoBox(props) {
  return (
    <div id="pet--info--box">
      <Paper elevation={1} sx={{padding:2}}>
        <Typography variant="h3" align="center">
          {props.name}
        </Typography>
        <br />
        <Typography variant="body1" align="justify">
          {props.breed} | {props.location}
        </Typography>
        <br />
        <div className="line--break" />
        <br />

        <Typography variant="body1" align="justify">
          {props.age} | {props.sex} | {props.size}
        </Typography>
        <br />
        <div className="line--break" />
        <br />
        <Typography variant="h4" align="center">About {props.name}</Typography>
        <br/>
        <Typography variant="body1" align="justify">{props.about}</Typography>
      </Paper>
    </div>
  );
}

export default PetInfoBox;

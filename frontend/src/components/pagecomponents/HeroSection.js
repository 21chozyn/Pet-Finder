import React from "react";
import "../../../static/css/home.css";
import SearchComp from "./SearchComp";
import AnimalCard from "./AnimalCard";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/system";


export default function HeroSection() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      {!isMatch ? (
        <div className="hero--section--div">
          <div className="search--section--div">
            <SearchComp direction="row" spacing={0}/>
            <br />
            <br />
            <Typography variant="h3" color="burlywood">
              Find your perfect match
            </Typography>
            <br />
            <Typography variant="body1" color="burlywood">
              Browse from our huge Zimbabwean network
            </Typography>
            <Grid
              container
              direction="row"
              alignItems="center"
              width={700}
              paddingTop={5}
              style={{ gap: 15 }}
            >
              <AnimalCard
                dog={true}
                petType="VIEW DOGS"
                bodyText="Germn Sheppherd, American Pitbull terrior and more"
              />
              <AnimalCard
                dog={false}
                petType="VIEW KITTENS"
                bodyText="Wide selection to choose from. Take a look!"
              />
            </Grid>
          </div>
        </div>
      ) : (<>
        <div className="hero--section2--div" />
        <Grid container direction="column" alignItems="center">
            <SearchComp direction="column" spacing={2}/>
            <br />
            <br />
            <Typography variant="h3" color="burlywood" textAlign="center">
              Find your perfect match
            </Typography>
            <br />
            <Typography variant="body1" color="burlywood" textAlign="center">
              Browse from our huge Zimbabwean network
            </Typography>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
              paddingTop={5}
              paddingLeft="auto"
              paddingRight="auto"
              style={{ gap: 15 }}
            >
              <AnimalCard
                dog={true}
                petType="VIEW DOGS"
                bodyText="Germn Sheppherd, American Pitbull terrior and more"
              />
              <AnimalCard
                dog={false}
                petType="VIEW KITTENS"
                bodyText="Wide selection to choose from. Take a look!"
              />
            </Grid>
          </Grid>
        </>
      )}
    </React.Fragment>
  );
}

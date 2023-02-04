import React from "react";
import {
  Button,
  Chip,
  Grid,
  Typography,
  Stack,
  useTheme,
  useMediaQuery,
  FormGroup,
} from "@mui/material";
import PetCardComp from "../pagecomponents/PetCardComp";
import "../../../static/css/salePage.css";
import DropDownComp from "../pagecomponents/DropDownComp";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function PuppiesAndDogs() {
  const sorts = ["Nearest", "furthest"];
  const breeds = [
    "German shepphard",
    "Boxer",
    "Doberman pfinscher",
    "American Bully",
  ];
  const ages = ["Puppy", "young", "Adult"];
  const sizes = ["small", "large", "medium"];
  const colors = ["Black", "White", "Bi-color"];
  const names = ["Top", "Brudder", "Ginger"];
  const DropDownCompWidth = 200; //this is width of dropdown menu
  const smallDropDownCompWidth = 100;

  const theme = useTheme(); //this is to be used in identifying breakpoints
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <div id="puppies--and--dogs">
      <div id="background--picture"></div>
      <br />
      {isMatch ? (
        <>
          <div id="main--section">
            <Grid
              container
              direction="row"
              gap={1}
              justifyContent="center"
              alignItems="center"
            >
              <DropDownComp
                label="Breed"
                items={breeds}
                width={smallDropDownCompWidth}
              />

              <DropDownComp
                label="Age"
                items={ages}
                width={smallDropDownCompWidth}
              />

              <DropDownComp
                label="Size"
                items={sizes}
                width={smallDropDownCompWidth}
              />
              <DropDownComp
                label="Color"
                items={colors}
                width={smallDropDownCompWidth}
              />
              <DropDownComp
                label="Pet Name"
                items={names}
                width={smallDropDownCompWidth}
              />
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="
Include out-of-town pets that can be transported to your area
"
                />
              </FormGroup>
            </Grid>
            <br />
            <div className="line--break" />
            <Grid
              container
              direction="row"
              justifyContent="space-around"
              alignItems="center"
            >
              <div id="enabled--filters">
                <Typography variant="body1">Filters applied:</Typography>
                <br />
                <Stack>
                  <Chip label="American Bully" onDelete={handleDelete} />
                </Stack>
                <Button variant="text" size="small">
                  Clear All
                </Button>
              </div>
              <DropDownComp
                label="Sort by"
                items={sorts}
                width={smallDropDownCompWidth}
              />
            </Grid>
            <br />
            <div className="line--break" />
            <br />
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap={1}
            >
              <PetCardComp />
              <PetCardComp />
              <PetCardComp />
              <PetCardComp />
            </Grid>
          </div>
        </>
      ) : (
        <>
          <Grid container direction="row" xs={12}>
            <Grid
              container
              direction="column"
              xs={3}
              justifyContent="flex-start"
              alignItems="flex-end"
              gap={3}
            >
              <DropDownComp
                label="Breed"
                items={breeds}
                width={DropDownCompWidth}
              />

              <DropDownComp
                label="Age"
                items={ages}
                width={DropDownCompWidth}
              />

              <DropDownComp
                label="Size"
                items={sizes}
                width={DropDownCompWidth}
              />
              <DropDownComp
                label="Color"
                items={colors}
                width={DropDownCompWidth}
              />
              <DropDownComp
                label="Pet Name"
                items={names}
                width={DropDownCompWidth}
              />
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="
Include out-of-town pets that can be transported to your area
"
                />
              </FormGroup>~
            </Grid>
            <Grid
              container
              direction="row"
              xs={9}
              columnGap={2}
              rowGap={1}
              justifyContent="center"
            >
              <Grid
                container
                xs={12}
                direction="row"
                justifyContent="space-between"
                alignContent="center"
              >
                <div id="enabled--filters">
                  <Typography variant="body1">Filters applied:</Typography>
                  <br />
                  <Stack>
                    <Chip label="American Bully" onDelete={handleDelete} />
                  </Stack>
                  <Button variant="text" size="small">
                    Clear All
                  </Button>
                </div>
                <DropDownComp label="Sort by" items={sorts} width={250} />
              </Grid>
              <PetCardComp />
              <PetCardComp />
              <PetCardComp />
              <PetCardComp />
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
}

export default PuppiesAndDogs;

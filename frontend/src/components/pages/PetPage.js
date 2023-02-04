import React from "react";
import "../../../static/css/petPage.css";
import PetGallery from "../pagecomponents/PetGallery";
import PetInfoBox from "../pagecomponents/PetInfoBox";
import EnquireCardComp from "../pagecomponents/EnquireCardComp";
import PetCardComp from "../pagecomponents/PetCardComp";
import { Typography } from "@mui/material";

function PetPage() {
  const galleryImages = [
    { img: "../../../static/images/example1.jpg" },
    { img: "../../../static/images/example2.jpg" },
    { img: "../../../static/images/example3.jpg" },
  ];
  const petInfo = {
    name: "Brudder",
    isDog: true,
    location: "Zimbabwe, Harare",
    breed: "German Sheppherd",
    sex: "Male",
    size: "Large",
    age: "1 year",
    color: "Brown",
    health: "Vaccinated",
    about:
      " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  };

  return (
    <div id="pet--page">
      <PetGallery galleryImages={galleryImages} />
      <div id="division">
        <PetInfoBox
          name={petInfo.name}
          location={petInfo.location}
          breed={petInfo.breed}
          sex={petInfo.sex}
          size={petInfo.size}
          age={petInfo.age}
          about={petInfo.about}
        />
        <EnquireCardComp name={petInfo.name} />
      </div>
      <br />
      <div id="more--section">
        <br/>
        <Typography variant="h3" gutterBottom textAlign="center">
          Find more {petInfo.isDog ? "dogs" : "cats"} like {petInfo.name}
        </Typography>
        <br />
        <div id="more--section--div">
          <PetCardComp />
          <PetCardComp />
          <PetCardComp />
          <PetCardComp />
        </div>
      </div>
    </div>
  );
}

export default PetPage;

import React, { useState } from "react";
import "../../../static/css/gallery.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { height } from "@mui/system";

const PetGallery = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openFullscreen, setOpenFullscreen] = useState(false);

  const handleOpenFullscreen = (index) => {
    setSlideNumber(index);
    setOpenFullscreen(true);
  };
  const handleCloseFullscreen = () => {
    setOpenFullscreen(false);
  };
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };
  return (
    <div>
      {openFullscreen && (
        <div className="slider--wrap">
          <div
            className="full--screen--image"
            style={{ width: window.innerWidth, height: window.innerHeight }}
          >
            <img src={galleryImages[slideNumber].img} alt="" />
          </div>
          <div
            id="backdrop--1"
            style={{ width: window.innerWidth, height: window.innerHeight }}
          >
            <img src={galleryImages[slideNumber].img} alt="" />
          </div>
          <div className="btn--close" onClick={handleCloseFullscreen}>
            <HighlightOffIcon />
          </div>
          <div className="btn--prev" onClick={prevSlide}>
            <ArrowBackIosIcon />
          </div>
          <div className="btn--next" onClick={nextSlide}>
            <ArrowForwardIosIcon />
          </div>
        </div>
      )}
      <div className="gallery--wrap">
        {galleryImages &&
          galleryImages.map((slide, index) => {
            return (
              <div
                className="single"
                key={index}
                onClick={() => handleOpenFullscreen(index)}
              >
                <img src={slide.img} alt="" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PetGallery;

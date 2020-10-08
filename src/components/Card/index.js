import React, { useLayoutEffect } from "react";
import { BackCard, CardFlipper, FrontCard } from "./card.styles";

const THRESHOLD_TO_FLIP_CARD = 400;
const resetAnimation = `
    translateX(-50%) 
    translateY(-50%) 
    translate3d(0px, 0px, 0px) 
    rotate3d(0, 1, 0, 180deg`;

const Card = () => {
  const rotatePositions = {
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    rotateAlpha: 0
  };

  useLayoutEffect(() => {
    const card = document.getElementById("card");

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 1000) {
        return (card.style.transform = resetAnimation);
      }

      if (scrollTop > THRESHOLD_TO_FLIP_CARD) {
        // TODO: Refactor calculations
        rotatePositions.rotateX =
          Math.abs(Math.abs(scrollTop - 700) / 60 - 5) / 10;
        rotatePositions.rotateY = (scrollTop - 400) / 600;
        rotatePositions.rotateZ =
          Math.abs(Math.abs(scrollTop - 700) / 100 - 3) / 10;
        rotatePositions.rotateAlpha = ((scrollTop - 400) / 600) * 180;
      } else {
        rotatePositions.rotateX = 0;
        rotatePositions.rotateY = 0;
        rotatePositions.rotateZ = 0;
        rotatePositions.rotateAlpha = 0;
      }

      const translateY = Math.abs(scrollTop - 500) / 4 - 125;

      card.style.transform = `translateX(-50%)
          translateY(-50%) 
          translate3d(0px, ${translateY}px, 0px)
          rotate3d(
            ${rotatePositions.rotateX}, 
            ${rotatePositions.rotateY}, 
            ${rotatePositions.rotateZ}, 
            ${rotatePositions.rotateAlpha}deg`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div>
      <CardFlipper id="card" {...rotatePositions}>
        <FrontCard>This is the Front Card</FrontCard>
        <BackCard>This is the Back Card</BackCard>
      </CardFlipper>
    </div>
  );
};

export default Card;

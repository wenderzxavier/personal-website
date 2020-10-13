import React, { useLayoutEffect } from "react";
import BackCard from "./Back";
import { CardFlipper } from "./card.styles";
import FrontCard from "./Front";

const THRESHOLD_TO_FLIP_CARD = 400;
const FINAL_POSITION_ANIMATION = 1000;
const IS_MOBILE_THRESHOLD = 780;
const animationFinalPosition = (screenSize) => `
    translateX(-50%) 
    translateY(-50%) 
    translate3d(0px, 0px, 0px) 
    rotate3d(${screenSize <= IS_MOBILE_THRESHOLD ? 1 : 0}, 1, 0, 180deg)
    scale(${screenSize <= IS_MOBILE_THRESHOLD ? 1.5 : 1})`;

const Card = () => {
  const rotatePositions = {
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    rotateAlpha: 0,
    scale: 1
  };

  useLayoutEffect(() => {
    const card = document.getElementById("card");

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const screenSize = window.innerWidth;

      if (scrollTop > FINAL_POSITION_ANIMATION) {
        return (card.style.transform = animationFinalPosition(screenSize));
      }

      if (scrollTop > THRESHOLD_TO_FLIP_CARD) {
        // TODO: Refactor calculations
        rotatePositions.rotateX =
          Math.abs(Math.abs(scrollTop - 700) / 60 - 5) / 10;
        rotatePositions.rotateY = (scrollTop - 400) / 600;
        rotatePositions.rotateZ =
          Math.abs(Math.abs(scrollTop - 700) / 100 - 3) / 10;
        rotatePositions.rotateAlpha = ((scrollTop - 400) / 600) * 180;
        rotatePositions.scale = 1 + ((scrollTop - 400) / 600) * 0.5;
      } else {
        rotatePositions.rotateX = 0;
        rotatePositions.rotateY = 0;
        rotatePositions.rotateZ = 0;
        rotatePositions.rotateAlpha = 0;
        rotatePositions.scale = 1;
      }

      const translateY = Math.abs(scrollTop - 500) / 4 - 125;

      card.style.transform = `translateX(-50%)
          translateY(-50%) 
          translate3d(0px, ${translateY}px, 0px)
          rotate3d(
            ${
              screenSize <= IS_MOBILE_THRESHOLD
                ? rotatePositions.rotateY
                : rotatePositions.rotateX
            }, 
            ${rotatePositions.rotateY}, 
            ${rotatePositions.rotateZ}, 
            ${rotatePositions.rotateAlpha}deg)
            
          scale(${
            screenSize <= IS_MOBILE_THRESHOLD ? rotatePositions.scale : 1
          })`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <CardFlipper id="card" {...rotatePositions}>
      <FrontCard />
      <BackCard />
    </CardFlipper>
  );
};

export default Card;

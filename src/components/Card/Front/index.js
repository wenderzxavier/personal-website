import React from "react";
import { SUBHEADER, TITLE } from "../../constants";
import { FrontWrapper, Heading, SubHeader } from "./cardFront.styles";

const FrontCard = () => (
  <FrontWrapper>
    <Heading name={TITLE}>{TITLE}</Heading>
    <SubHeader>{SUBHEADER}</SubHeader>
  </FrontWrapper>
);

export default FrontCard;

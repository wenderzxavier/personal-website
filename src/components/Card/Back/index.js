import React from "react";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CARD_CONTENT } from "../../constants";
import {
  BackWrapper,
  FlexContent,
  LabelContainer,
  ContentTitle,
  ContentSubtitle,
  InfoContainer
} from "./cardBack.styles";

const BackCard = () => {
  const handleCardClick = (element) => {
    const sections = document.getElementsByClassName("flex-content");
    Array.prototype.forEach.call(sections, (section) =>
      section.classList.remove("active")
    );
    element.classList.add("active");
  };

  return (
    <BackWrapper>
      {CARD_CONTENT.map((content, index) => (
        <FlexContent
          key={index}
          order={index}
          onClick={(evt) => handleCardClick(evt.currentTarget)}
          className={`flex-content ${index === 0 ? "active" : ""}`}
        >
          <InfoContainer className="content-wrapper">
            {content.content}
          </InfoContainer>
          <LabelContainer>
            <div className="label icon-wrapper">
              <FontAwesomeIcon className="content-icon" icon={faFileAlt} />
            </div>
            <div className="label label-wrapper">
              <ContentTitle className="label--title">
                {content.title}
              </ContentTitle>
              <ContentSubtitle className="label--subtitle">
                {content.subtitle}
              </ContentSubtitle>
            </div>
          </LabelContainer>
        </FlexContent>
      ))}
    </BackWrapper>
  );
};

export default BackCard;

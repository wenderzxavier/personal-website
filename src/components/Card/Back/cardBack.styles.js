import styled from "styled-components";
import { CARD_CONTENT } from "../../constants";
import { Card } from "../card.styles";

const colors = [
  "EC5B5B",
  "F9A060",
  "D7EC21",
  "00ACAE",
  "2BD2FF",
  "1A16A0",
  "B345A9",
  "EE6E70",
  "30374C"
];

export const BackWrapper = styled(Card)`
  position: absolute;
  top: 0;
  left: 0;
  transform: rotateY(-180deg);
  padding: 10px;
  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);

  @media screen and (max-width: 780px) {
    transform: rotateY(-180deg) rotateZ(180deg) translateY(5%);
  }
`;

export const FlexContent = styled.section`
  position: relative;
  width: min(50px, 5vw);
  height: 100%;
  margin: 0 2px;
  border-radius: 1em;
  cursor: pointer;
  flex-grow: 1;
  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
  background-image: ${(props) =>
    `linear-gradient(45deg, #${colors[props.order]} 0%, #${
      colors[props.order + 1]
    } 100%)`};

  &.active {
    flex-grow: 100;
    transform: scale(1);
    background-clip: padding-box;
    border: solid 3px #${(props) => colors[props.order]};
    background-image: unset;
    transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);

    .content-wrapper {
      box-sizing: border-box;
      height: 80%;
      margin: 1%;
      padding: 10px;
      border-radius: 1em;
      font-size: min(2vw, 1rem);
      font-family: "Raleway", sans-serif;
      overflow: scroll;
      transform: translateY(0px);
      transition: 0.6s cubic-bezier(0.05, 0.61, 0.41, 0.95);
      transition-delay: 0.3s;
      opacity: 1;
      white-space: pre-wrap;
    }

    & > div {
      left: 2%;
      transform: rotate(0) translateY(0);
      transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);

      .icon-wrapper {
        background-color: #28282b;
        color: white;
      }
      .label--title {
        color: #28282b;
      }

      .label--subtitle {
        display: block;
      }
    }

    @media screen and (max-width: 780px) {
      & > div {
        left: 95%;
        width: 100%;
        transform: rotate(-90deg) translateY(-50%);
      }

      .content-wrapper {
        width: 38vw;
        height: calc(${160 - CARD_CONTENT.length * 10}%);
        transform-origin: top left;
        transform: rotate(-90deg) translateX(-100%);
        transition: opacity 0.5s ease-in-out;
        transition-delay: 0.3s;
      }
    }
  }
`;

export const InfoContainer = styled.div`
  flex-grow: 1;
  transform: translateY(-10px);
  height: 80%;
  opacity: 0;
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform-origin: min(2.5vw, 18px) min(2.5vw, 18px);
  transform: rotate(-90deg) translateY(-50%);
  transition: 0.5s ease-in-out;

  .icon-wrapper {
    display: flex;
    align-items: center;
    background-color: white;
    clip-path: circle(50.2% at 50% 50%);
    width: min(5vw, 36px);
    height: min(5vw, 36px);
  }

  .content-icon {
    font-size: min(3vw, 1.5rem);
    margin: 0 auto;
  }
`;

export const ContentTitle = styled.h3`
  font-family: "Archivo Black", sans-serif;
  white-space: nowrap;
  letter-spacing: 1px;
  font-size: min(3vw, 1.5rem);
  color: white;
  margin: 0 10px;
`;

export const ContentSubtitle = styled.p`
  display: none;
  font-family: "Anonymous Pro", Helvetica, sans-serif;
  font-size: min(2vw, 1rem);
  color: #28282b;
  margin: 0 10px;
`;

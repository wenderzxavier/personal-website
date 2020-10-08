import styled from "styled-components";
import { Card } from "../card.styles";

export const FrontWrapper = styled(Card)`
  flex-direction: column;
  background-image: linear-gradient(to left, #434343 0%, black 100%);
  z-index: 1;
`;

export const Heading = styled.h1`
  font-size: min(5vw, 3rem);
  position: relative;
  color: white;
  text-transform: uppercase;
  font-family: "Archivo Black", sans-serif;
  animation: glitch 3s linear infinite;

  @keyframes glitch {
    2%,
    64% {
      transform: translate(2px, 0) skew(0deg);
    }
    4%,
    60% {
      transform: translate(-2px, 0) skew(0deg);
    }
    62% {
      transform: translate(0, 0) skew(5deg);
    }
  }

  &:before,
  &:after {
    content: "${(props) => props.name}";
    position: absolute;
    left: 0;
  }

  &:before{
  animation: glitchTop 2s linear infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}

@keyframes glitchTop{
  2%,64%{
    transform: translate(2px,-2px);
  }
  4%,60%{
    transform: translate(-2px,2px);
  }
  62%{
    transform: translate(13px,-1px) skew(-13deg); 
  }
}

&:after{
  animation: glitchBotom 4s linear infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}

@keyframes glitchBotom{
  2%,64%{
    transform: translate(-2px,0);
  }
  4%,60%{
    transform: translate(-2px,0);
  }
  62%{
    transform: translate(-22px,5px) skew(21deg); 
  }
}
`;

export const SubHeader = styled.h2`
  font-size: min(3vw, 1.5rem);
  font-family: "Anonymous Pro", monospace;
  letter-spacing: 4px;
  color: white;
  text-align: center;
  overflow: hidden;
  margin: 0;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  animation: blinkTextCursor 600ms infinite normal;

  @keyframes blinkTextCursor {
    from {
      border-right-color: rgba(255, 255, 255, 0.75);
    }
    to {
      border-right-color: transparent;
    }
  }
`;

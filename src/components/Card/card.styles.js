import styled from "styled-components";

export const CardFlipper = styled.div`
  transform-style: preserve-3d;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%) translate3d(0px, 0px, 0px)
    rotate3d(0, 0, 0, 0deg);
`;

const Card = styled.div`
  backface-visibility: hidden;
  background-color: white;
  width: 80vw;
  max-width: 700px;
  height: 40vw;
  max-height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FrontCard = styled(Card)`
  flex-direction: column;
  z-index: 1;
`;

export const BackCard = styled(Card)`
  position: absolute;
  top: 0;
  left: 0;
  transform: rotateY(-180deg);
`;

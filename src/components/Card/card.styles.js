import styled from "styled-components";

export const CardFlipper = styled.div`
  transform-style: preserve-3d;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%) translate3d(0px, 0px, 0px)
    rotate3d(0, 0, 0, 0deg);
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80vw;
  max-width: 700px;
  height: 40vw;
  max-height: 350px;
  border-radius: 5px;
  backface-visibility: hidden;
`;

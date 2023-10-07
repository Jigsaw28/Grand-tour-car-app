import styled from "styled-components";
import image from "../images/hero.jpg";

export const Hero = styled.section`
  width: 100vw;
  height: 100vh;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${image});
`;

export const Title = styled.h1`
  color: #121417;
  font-family: ManropeMedium;
  font-size: 35px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
export const WrapperTitle = styled.div`
  position: absolute;
  top: 40%;
  right: 20%;
  background-color: #fff;
  border-radius: 10px;
  animation-name: titleAnimation;
  animation-duration: 3000ms;
  animation-timing-function: linear;

  @keyframes titleAnimation {
    0% {
      position: absolute;
      top: 40%;
      right: -100%;
    }

    100% {
      position: absolute;
      top: 40%;
      right: 20%;
    }
  }
`;

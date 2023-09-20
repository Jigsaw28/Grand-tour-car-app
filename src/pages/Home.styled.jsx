import styled from "styled-components";
import image from "../images/hero.jpg";

export const Hero = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${image});
`;

export const Title = styled.h1`
  color: #fff;
  font-family: Manrope;
  font-size: 35px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-around;
`;

export const Link = styled(NavLink)`
  color: #121417;
  font-family: Manrope;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;

  &:focus {
    color: #3470ff;
    text-decoration: underline;
  }
`;

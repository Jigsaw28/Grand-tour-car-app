import styled from "styled-components";
import { ReactComponent as LikeStyle } from "../../images/like.svg";

export const Card = styled.li`
  width: 274px;
  height: 426px;
  position: relative;
`;
export const ListWrraper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px 30px;
  justify-content: center;
`;

export const LikeSvg = styled(LikeStyle)`
  fill: currentColor;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.liked {
    stroke: currentColor;
  }
  &.no-liked {
    stroke: rgba(255, 255, 255, 0.8);
  }
  &:focus,
  &:hover {
    fill: rgba(52, 112, 255, 1);
    stroke: currentColor;
  }
`;

export const LikeBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  background-color: transparent;
  border: none;

  &:focus,
  &:hover {
    background-color: transparent;
  }
  &.liked {
    color: rgba(52, 112, 255, 1);
  }
  &.no-liked {
    color: transparent;
  }
`;
export const Image = styled.img`
  border-radius: 14px;
  object-fit: cover;
  width: 100%;
  height: 268px;
`;
export const NameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 14px;
  color: #121417;
  font-size: 16px;
  font-family: ManropeMedium;
  font-weight: 500;
  line-height: 1.5; /* 150% */
`;
export const ItemWrapper = styled.div`
  white-space: pre-wrap;
  overflow: hidden;
  padding-top: 8px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-family: ManropeRegular;
  font-weight: 400;
  line-height: 1.5; /* 150% */
`;

export const Model = styled.span`
  color: #3470ff;
`;

export const BtnLearnMore = styled.button`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 12px;
  background-color: #3470ff;
  border: none;
  color: #fff;
  font-size: 14px;
  font-family: ManropeSemiBold;
  font-weight: 600;
  line-height: 1.42; /* 142.857% */
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);;

  &:hover,
  &:focus {
    background-color: #0B44CD;
  }
`;
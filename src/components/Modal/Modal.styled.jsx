import styled from "styled-components";
import { ReactComponent as CloseStyle } from "../../images/close.svg";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(18, 20, 23, 0.5);
`;

export const ModalWindow = styled.div`
  position: relative;
  width: 541px;
  height: 752px;
  padding: 40px;
  border-radius: 24px;
  background: #fff;
`;

export const ModalImg = styled.img`
  width: 461px;
  height: 248px;
  border-radius: 14px;
  margin-bottom: 14px;
  object-fit: cover;
`;

export const NameWrapper = styled.div`
  color: #121417;
  font-size: 18px;
  font-family: ManropeMedium;
  font-weight: 500;
  line-height: 1.33; /* 150% */
`;
export const CloseSvg = styled(CloseStyle)`
  stroke: #121417;

  &:focus,
  &:hover {
    stroke: rgba(52, 112, 255, 1);
  }
`;
export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  background-color: transparent;
  border: none;

  &:focus,
  &:hover {
    background-color: transparent;
  }
`;

export const ItemWrapper = styled.div`
  padding-top: 8px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-family: ManropeRegular;
  font-weight: 400;
  line-height: 1.5; /* 150% */ /* 150% */
`;

export const WrapperProp = styled.ul`
  display: flex;
  ::after {
    content: "|";
    padding-left: 6px;
    padding-right: 6px;
  }
`;

export const Accessories = styled.div`
  margin-top: 24px;
`;
export const Title = styled.p`
  margin-bottom: 8px;
  display: block;
  color: #121417;
  font-size: 14px;
  font-style: normal;
  font-family: ManropeMedium;
  font-weight: 500;
  line-height: 20px;
`;

export const Description = styled.p`
  margin-top: 14px;
  color: #121417;
  font-size: 14px;
  font-style: normal;
  font-family: ManropeRegular;
  font-weight: 400;
  line-height: 1.42; /* 142.857% */
`;

export const AccessoriesWrap = styled.div`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-style: normal;
  font-family: ManropeRegular;
  font-weight: 400;
  line-height: 1.5;
`;
export const RentalConditions = styled.div`
  margin-top: 24px;
`;

export const TitleRentalCond = styled.span`
  margin-bottom: 8px;
  color: #121417;
  font-size: 14px;
  font-style: normal;
  font-family: ManropeMedium;
  font-weight: 500;
  line-height: 1.5; /* 142.857% */
`;

export const WrappConditions = styled.div`
  padding-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const TextConditions = styled.span`
  font-family: MontserratRegular;
  font-size: 12px;
  font-weight: 400;
  padding: 7px 14px;
`;

export const Link = styled.a`
  position: absolute;
  bottom: 40px;
  padding: 12px 50px;
  border-radius: 12px;
  background-color: #3470ff;

  color: #fff;
  font-size: 14px;
  font-family: ManropeSemiBold;
  font-weight: 600;
  line-height: 1.42857;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;

export const TextConditionsAccent = styled.span`
  font-family: MontserratSemiBold;
  color: #3470ff;
  font-weight: 600;
`;

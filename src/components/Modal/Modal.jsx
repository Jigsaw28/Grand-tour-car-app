import { useEffect } from "react";
import { createPortal } from "react-dom";
import {
  Accessories,
  AccessoriesWrap,
  CloseBtn,
  CloseSvg,
  Description,
  ItemWrapper,
  Link,
  ModalImg,
  ModalWindow,
  NameWrapper,
  Overlay,
  RentalConditions,
  TextConditions,
  Title,
  TitleRentalCond,
  WrappConditions,
  WrapperProp,
} from "./Modal.styled";
import { useSelector } from "react-redux";
import { stringCut, stringSlice } from "../../utils/carInfo";
import { nanoid } from "nanoid";
import { Model } from "../List/List.styled";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ closeModal }) => {
  const { car } = useSelector((state) => state.cars);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <CloseBtn type="button" onClick={closeModal}>
          <CloseSvg width={24} height={24} />
        </CloseBtn>
        <ModalImg src={car.img} alt={car.make} />
        <NameWrapper>
          <p>
            {car.make} <Model>{car.model}</Model>, {car.year}
          </p>
          <p>{car.rentalPrice}</p>
        </NameWrapper>
        <ItemWrapper>
          <p>
            {stringSlice(car.address)} | Id: {car.id} | Year: {car.year} | Type:{" "}
            {car.type}
          </p>
          <p>
            Fuel Consumption: {car.fuelConsumption} | Engine Size:{" "}
            {car.engineSize}
          </p>
        </ItemWrapper>
        <Description>{car.description}</Description>
        <Accessories>
          <Title>Accessories and functionalities:</Title>
          <AccessoriesWrap>
            <p>
              {car.accessories
                .map((elem) => {
                  const string = elem.split(" ");
                  const firstThreeWords = string.slice(0, 3).join(" ");
                  return firstThreeWords;
                })
                .join(" | ")}
            </p>
            <p>
              {car.functionalities
                .map((elem) => {
                  const string = elem.split(" ");
                  const firstThreeWords = string.slice(0, 3).join(" ");
                  return firstThreeWords;
                })
                .join(" | ")}
            </p>
          </AccessoriesWrap>
        </Accessories>
        <RentalConditions>
          <TitleRentalCond>Rental Conditions:</TitleRentalCond>
          <WrappConditions>
            <TextConditions>{stringCut(car.rentalConditions)[0]}</TextConditions>
            <TextConditions>{stringCut(car.rentalConditions)[1]}</TextConditions>
            <TextConditions>{stringCut(car.rentalConditions)[2]}</TextConditions>
            <TextConditions>Mileage:{car.mileage} </TextConditions>
            <TextConditions>Price:{car.rentalPrice}</TextConditions>
          </WrappConditions>
        </RentalConditions>
        <Link href="tel:+380730000000">Rental car</Link>
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

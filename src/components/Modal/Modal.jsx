import { useEffect } from "react";
import { createPortal } from "react-dom";
import {
  Accessories,
  AccessoriesWrap,
  CloseBtn,
  CloseSvg,
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
  WrapperProp,
} from "./Modal.styled";
import { useSelector } from "react-redux";
import { Model } from "../../pages/Catalog.styled";
import { stringCut, stringSlice } from "../../utils/carInfo";
import { nanoid } from "nanoid";

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
          <div>
            {car.make} <Model>{car.model}</Model>, {car.year}
          </div>
          <span>{car.rentalPrice}</span>
        </NameWrapper>
        <ItemWrapper>
          <WrapperProp>
            <li>{stringSlice(car.address)}</li>
            <li>Id: {car.id}</li>
            <li>Year: {car.year}</li>
            <li>Type: {car.type}</li>
          </WrapperProp>
          <WrapperProp>
            <li>Fuel Consumption: {car.fuelConsumption}</li>
            <li>Engine Size: {car.engineSize}</li>
          </WrapperProp>
        </ItemWrapper>
        <Accessories>
          <Title>Accessories and functionalities:</Title>
          <AccessoriesWrap>
            {car.accessories.map((elem) => (
              <li key={nanoid()}>{elem}</li>
            ))}
          </AccessoriesWrap>
        </Accessories>
        <AccessoriesWrap>
          {car.functionalities.map((elem) => (
            <li key={nanoid()}>{elem}</li>
          ))}
        </AccessoriesWrap>
        <RentalConditions>
          <TitleRentalCond>Rental Conditions:</TitleRentalCond>
          <TextConditions>{stringCut(car.rentalConditions)} Mileage:{car.mileage} Price:{car.rentalPrice}</TextConditions>
        </RentalConditions>
        <Link href="tel:+380730000000">Rental car</Link>
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import {
  BtnLearnMore,
  Card,
  Image,
  ItemWrapper,
  LikeBtn,
  LikeSvg,
  ListWrraper,
  Model,
  NameWrapper,
} from "./List.styled";
import { filteredItems, stringSlice } from "../../utils/carInfo";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export const List = ({ handleClick, openModal, filteredArr }) => {
  const location = useLocation();
  const { favorite, items, filterCar } = useSelector((state) => state.cars);

  const filteredFavoriteCar = useMemo(() => {
    let filteredArr = [];
    return filteredItems(favorite, filterCar, filteredArr);
  }, [favorite, filterCar]);

  const onChangePageFilter = () => {
    if (location.pathname === "/favorites" && filterCar) {
      return filteredFavoriteCar;
    } else if (location.pathname !== "/favorites" && filterCar) {
      return filterCar;
    } else {
      return items;
    }
  }

  return (
    <ListWrraper>
      {onChangePageFilter().map(
        (item) => (
          <Card key={nanoid()}>
            <LikeBtn
              type="button"
              onClick={() => handleClick(item.id)}
              className={favorite.includes(item.id) ? "liked" : "no-liked"}
            >
              <LikeSvg
                width={18}
                height={18}
                className={favorite.includes(item.id) ? "liked" : "no-liked"}
              />
            </LikeBtn>
            <Image src={item.img} alt="car" />
            <NameWrapper>
              <div>
                {item.make} <Model>{item.model}</Model>, {item.year}
              </div>
              <span>{item.rentalPrice}</span>
            </NameWrapper>
            <ItemWrapper>
              {stringSlice(item.address)} | {item.rentalCompany} | {item.type} |{" "}
              {item.model} | {item.id} | {item.functionalities[0]}
            </ItemWrapper>
            <BtnLearnMore onClick={() => openModal(item)}>
              Learn more
            </BtnLearnMore>
          </Card>
        )
      )}
    </ListWrraper>
  );
};

import { useEffect, useState } from "react";
import { fetchAdvert } from "../api/fetchAdvert";
import { nanoid } from "nanoid";
import {
  BtnLearnMore,
  Card,
  ContainerCatalog,
  Image,
  ItemWrapper,
  LikeBtn,
  LikeSvg,
  List,
  Model,
  NameWrapper,
} from "./Catalog.styled";
import { LoadMore } from "../components/LoadMore/LoadMore";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setCar, setFavorite, setPage } from "../redux/carSlice";
import {  stringSlice } from "../utils/carInfo";
import { Modal } from "../components/Modal/Modal";
import { Container } from "../App.styled";

const Catalog = () => {
  const dispatch = useDispatch();
  const { items, favorite, page} = useSelector((state) => state.cars);
  const [showModal, setShowModal] = useState(false);

  const onLoadMore = () => {
    dispatch(setPage(page))
  };

  const openModal = (item) => {
    dispatch(setCar(item));
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleClick = (id) => {
    dispatch(setFavorite(id));
  };
  

  return (
    <Container>
    <ContainerCatalog>
      {showModal && <Modal closeModal={closeModal} />}
      <List>
        {items &&
          items.map((item) => (
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
                <span>{stringSlice(item.address)}</span>
                <span>{item.rentalCompany}</span>
                <span>{item.type}</span>
                <span>{item.model}</span>
                <span>{item.id}</span>
                <span>{item.functionalities[0]}</span>
              </ItemWrapper>
              <BtnLearnMore onClick={() => openModal(item)}>
                Learn more
              </BtnLearnMore>
            </Card>
          ))}
      </List>
      <LoadMore onLoadMoreClick={onLoadMore} />
      <ToastContainer />
      </ContainerCatalog>
      </Container>
  );
};

export default Catalog;

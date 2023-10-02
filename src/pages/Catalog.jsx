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
  Model,
  NameWrapper,
} from "./Catalog.styled";
import { LoadMore } from "../components/LoadMore/LoadMore";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setCar, setFavorite, setPage } from "../redux/carSlice";
import { stringSlice } from "../utils/carInfo";
import { Modal } from "../components/Modal/Modal";
import { Container } from "../App.styled";
import { useLocation } from "react-router-dom";
import { List } from "../components/List/List";

const Catalog = () => {
  const dispatch = useDispatch();
  const { items, favorite, page, isLoading } = useSelector(
    (state) => state.cars
  );
  const [showModal, setShowModal] = useState(false);

  const onLoadMore = () => {
    dispatch(setPage(page));
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
        <List handleClick={handleClick} openModal={openModal} />
        {!isLoading && items.length && (
          <LoadMore onLoadMoreClick={onLoadMore} />
        )}
        <ToastContainer />
      </ContainerCatalog>
    </Container>
  );
};

export default Catalog;

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  Text,
} from "./Catalog.styled";
import { Modal } from "../components/Modal/Modal";
import { setCar, setFavorite, setPage } from "../redux/carSlice";
import { filteredItems, stringSlice } from "../utils/carInfo";
import { LoadMore } from "../components/LoadMore/LoadMore";
import { ToastContainer } from "react-toastify";
import { Container } from "../App.styled";
import { List } from "../components/List/List";

const Favorite = () => {
  const dispatch = useDispatch();

  const { favorite } = useSelector((state) => state.cars);
  const [showModal, setShowModal] = useState(false);

  // const onLoadMore = () => {
  //   dispatch(setPage(page));
  // };

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
        {favorite.length > 0 ? (
          <List handleClick={handleClick} openModal={openModal} />
        ) : (
          <Text>You don't have favorite cars</Text>
        )}

        {/* <LoadMore onLoadMoreClick={onLoadMore} /> */}
        <ToastContainer />
      </ContainerCatalog>
    </Container>
  );
};

export default Favorite;

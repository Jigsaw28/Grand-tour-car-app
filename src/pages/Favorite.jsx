import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContainerCatalog, Text } from "./Catalog.styled";
import { Modal } from "../components/Modal/Modal";
import { setCar, setFavorite, setItems } from "../redux/carSlice";
import { filteredItems } from "../utils/carInfo";
import { LoadMore } from "../components/LoadMore/LoadMore";
import { ToastContainer } from "react-toastify";
import { Container } from "../App.styled";
import { List } from "../components/List/List";
import { FilterWrapper } from "../components/FilterWrapper/FilterWrapper";
import { useLocation } from "react-router-dom";

const Favorite = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { favorite, allAdverts, filterCar, items } = useSelector(
    (state) => state.cars
  );
  const [showModal, setShowModal] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 8;

  const filteredFavoriteCar = useMemo(() => {
    let filteredArr = [];
    return filteredItems(favorite, allAdverts, filteredArr);
  }, [allAdverts, favorite]);

  useEffect(() => {
    filterCar?.length > 0
      ? dispatch(setItems(filterCar.slice(0, startIndex + itemsPerPage)))
      : dispatch(
          setItems(filteredFavoriteCar.slice(0, startIndex + itemsPerPage))
        );
  }, [dispatch, filterCar, filteredFavoriteCar, startIndex]);

  const onLoadMore = () => {
    setStartIndex(startIndex + itemsPerPage);
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
      <FilterWrapper filteredFavoriteCar={filteredFavoriteCar} />
      <ContainerCatalog>
        {showModal && <Modal closeModal={closeModal} />}
        {favorite.length > 0 ? (
          <List
            handleClick={handleClick}
            openModal={openModal}
            filteredArr={filteredFavoriteCar}
          />
        ) : (
          <Text>You don't have favorite cars</Text>
        )}

        {(filterCar
          ? items.length < filterCar?.length
          : items.length < favorite.length) && (
          <LoadMore onLoadMoreClick={onLoadMore} />
        )}
        <ToastContainer />
      </ContainerCatalog>
    </Container>
  );
};

export default Favorite;

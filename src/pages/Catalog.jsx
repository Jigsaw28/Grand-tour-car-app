import { useEffect, useState } from "react";
import { ContainerCatalog } from "./Catalog.styled";
import { LoadMore } from "../components/LoadMore/LoadMore";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setCar, setFavorite, setItems, setPage } from "../redux/carSlice";
import { Modal } from "../components/Modal/Modal";
import { Container } from "../App.styled";
import { List } from "../components/List/List";
import { FilterWrapper } from "../components/FilterWrapper/FilterWrapper";
import { useLocation } from "react-router-dom";

const Catalog = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { items, allAdverts, isLoading, filterCar } = useSelector(
    (state) => state.cars
  );
  const [startIndex, setStartIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const itemsPerPage = 8;

  useEffect(() => {
    filterCar?.length > 0
      ? dispatch(setItems(filterCar.slice(0, startIndex + itemsPerPage)))
      : dispatch(setItems(allAdverts.slice(0, startIndex + itemsPerPage)));
  }, [allAdverts, dispatch, filterCar, startIndex]);

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
      <FilterWrapper />
      <ContainerCatalog>
        {showModal && <Modal closeModal={closeModal} />}
        <List handleClick={handleClick} openModal={openModal} />
        {(filterCar
          ? items.length < filterCar?.length
          : items.length < allAdverts.length) &&
          !isLoading && <LoadMore onLoadMoreClick={onLoadMore} />}
        <ToastContainer />
      </ContainerCatalog>
    </Container>
  );
};

export default Catalog;

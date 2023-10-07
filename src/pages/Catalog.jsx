import { useState } from "react";
import { ContainerCatalog,} from "./Catalog.styled";
import { LoadMore } from "../components/LoadMore/LoadMore";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setCar, setFavorite, setPage } from "../redux/carSlice";
import { Modal } from "../components/Modal/Modal";
import { Container } from "../App.styled";
import { List } from "../components/List/List";
import { FilterWrapper } from "../components/FilterWrapper/FilterWrapper";

const Catalog = () => {
  const dispatch = useDispatch();
  const { items, page, isLoading } = useSelector(
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
      <FilterWrapper />
      <ContainerCatalog>
        {showModal && <Modal closeModal={closeModal} />}
        <List handleClick={handleClick} openModal={openModal} />
        {items.length > 0 && !isLoading && (
          <LoadMore onLoadMoreClick={onLoadMore} />
        )}
        <ToastContainer />
      </ContainerCatalog>
    </Container>
  );
};

export default Catalog;

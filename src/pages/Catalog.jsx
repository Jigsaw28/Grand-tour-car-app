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
import { FilterWrapper } from "../components/FilterWrapper/FilterWrapper";
import { LoadMore } from "../components/LoadMore/LoadMore";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getCarThunk } from "../redux/carThunk";
import { setCar, setCarId, setFavorite, setPage } from "../redux/carSlice";
import { firstElemOfArr, stringSlice } from "../utils/carInfo";
import { Modal } from "../components/Modal/Modal";
import { Container } from "../App.styled";

const Catalog = () => {
  const dispatch = useDispatch();
  const { items, favorite } = useSelector((state) => state.cars);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const promise = dispatch(getCarThunk(page));
    return () => promise.abort();
  }, [dispatch, page]);

  const onLoadMore = () => {
    setPage((prevState) => prevState + 1);
  };

  const openModal = (item) => {
    dispatch(setCar(item));
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const handleClick = (id) => {
      // const index = favorite.findIndex((item) => item === id);
      // if (index>=0) {
      //   setLike(prevState=> prevState)
      // } else {
      //  setLike(prevState=> !prevState)
      // }
    
    dispatch(setFavorite(id));
  };

  return (
    <Container>
    <ContainerCatalog>
      {/* <FilterWrapper /> */}
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

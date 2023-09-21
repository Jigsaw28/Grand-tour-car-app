import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { Modal } from "../components/Modal/Modal";
import { setCar, setFavorite, setPage } from "../redux/carSlice";
import { stringSlice } from "../utils/carInfo";
import { LoadMore } from "../components/LoadMore/LoadMore";
import { ToastContainer } from "react-toastify";
import { Container } from "../App.styled";

const Favorite = () => {
  const dispatch = useDispatch();
  const { favorite, items, page } = useSelector((state) => state.cars);
  const [showModal, setShowModal] = useState(false);

  let filteredArr = [];
  // const [page, setPage] = useState(1);
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

  const filteredItems = () => {
    for (let i = 0; i < favorite.length; i += 1) {
      items.filter((item) => item.id === favorite[i] && filteredArr.push(item));
    }
  };
  filteredItems()

  const limit = () => {
    
  }

  return (
    <Container>
      <ContainerCatalog>
      {showModal && <Modal closeModal={closeModal} />}
      <List>
        {filteredArr ? (
          filteredArr.map((item) => (
            <Card key={item.id}>
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
          ))
        ) : (
          <p>You don't have favorite car</p>
        )}
      </List>
      <LoadMore onLoadMoreClick={onLoadMore} />
        <ToastContainer />
        </ContainerCatalog>
    </Container>
  );
};

export default Favorite;

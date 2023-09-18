import { useEffect, useState } from "react";
import { fetchAdvert } from "../api/fetchAdvert";
import { nanoid } from "nanoid";
import { Card, List } from "./Catalog.styled";
import { FilterWrapper } from "../components/FilterWrapper/FilterWrapper";
import { LoadMore } from "../components/LoadMore/LoadMore";
import { ToastContainer } from "react-toastify";

const Catalog = () => {
  const [page, setPage] = useState(1);
  const [advert, setAdvert] = useState([]);

  useEffect(() => {
    fetchAdvert(page)
      .then((data) => {
        if (page === 1) {
          setAdvert(data)
        } else {
          setAdvert(prevState=> [...prevState, ...data])
        }
      })
      .catch((error) => console.log(error));
  }, [page]);

  

  const onLoadMore = () => {
    setPage((prevState) => prevState + 1)
  };

  return (
    <>
      {/* <FilterWrapper /> */}
      <List>
        {advert &&
          advert.map((item) => (
            <Card key={nanoid()}>
              <img src={item.img} alt="car" width={274} height={268} />
              <div>
                <span>{item.make}</span>
                <span>{item.model}</span>
                <span>{item.year}</span>
                <span>{item.rentalPrice}</span>
                <span>{item.address}</span>
                <span>{item.rentalCompany}</span>
                <span>{item.type}</span>
                <span>{item.model}</span>
                <span>{item.id}</span>
                <span>{item.functionalities}</span>
                <button type="button">Learn more</button>
              </div>
            </Card>
          ))}
      </List>
      <LoadMore onLoadMoreClick={onLoadMore} />
      <ToastContainer />
    </>
  );
};

export default Catalog;

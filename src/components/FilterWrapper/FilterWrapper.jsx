import { useEffect, useState } from "react";
import Select from "react-select";
import { Formik, Field } from "formik";
import { fetchMakes } from "../../api/fetchAdvert";
import {
  BtnSearch,
  ContainerFilter,
  Form,
  Label,
} from "./FilterWrapper.styled";
import { useDispatch, useSelector } from "react-redux";
import { setFilterCar, setItems } from "../../redux/carSlice";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Notiflix from "notiflix";

export const FilterWrapper = ({ filteredFavoriteCar }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { allAdverts, items, favorite } = useSelector((state) => state.cars);
  const [makes, setMakes] = useState([]);
  const [carBrand, setCarBrand] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    fetchMakes().then((data) => setMakes(data));
  }, []);

  let options = [];
  const priceOptions = [];

  makes.map((item) => options.push({ value: item, label: item }));

  for (let i = 30; i <= 500; i += 10) {
    priceOptions.push({ value: i, label: i });
  }

  const onChangeCarBrand = (e) => {
    setCarBrand(e.value);
  };

  const onChangeCarPrice = (e) => {
    setPrice(e.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const inputMileageFrom = form.elements.from.value;
    const inputMileageTo = form.elements.to.value;
    // const carBrand = form.elements.name.value;
    // const price = form.elements.price.value;

    const findCarMileage = allAdverts.filter(
      (item) => item.mileage > inputMileageFrom && item.mileage < inputMileageTo
    );
    // console.log(findCarMileage);
    // dispatch(setFilterCar({ findCarMileage }));

    if (carBrand && price) {
      let findCar = [];
      location.pathname === "/favorites"
        ? (findCar = filteredFavoriteCar.filter(
            (favItem) =>
              favItem.make === carBrand &&
              favItem.rentalPrice.slice(1, favItem.rentalPrice.length) <= price
          ))
        : (findCar = allAdverts.filter(
            (item) =>
              item.make === carBrand &&
              item.rentalPrice.slice(1, item.rentalPrice.length) <= price
          ));

      if (findCar.length === 0) {
        Notiflix.Notify.failure("This car was not found");
      } else {
        dispatch(setFilterCar(findCar));
      }
    } else if (carBrand) {
      let findCar = [];
      location.pathname === "/favorites"
        ? (findCar = filteredFavoriteCar.filter(
            (favItem) => favItem.make === carBrand
          ))
        : (findCar = allAdverts.filter((item) => item.make === carBrand));
      console.log(findCar);
      if (findCar.length === 0) {
        Notiflix.Notify.failure("This car was not found");
      } else {
        dispatch(setFilterCar(findCar));
      }
    } else if (price) {
      let findCar = [];
      location.pathname === "/favorites"
        ? (findCar = filteredFavoriteCar.filter(
            (favItem) =>
              favItem.rentalPrice.slice(1, favItem.rentalPrice.length) <= price
          ))
        : (findCar = allAdverts.filter(
            (item) =>
              item.rentalPrice.slice(1, item.rentalPrice.length) <= price
          ));

      if (findCar.length === 0) {
        Notiflix.Notify.failure("This car was not found");
      } else {
        console.log(findCar);
        dispatch(setFilterCar(findCar));
      }
    } else if (findCarMileage.length) {
      
        dispatch(setFilterCar(findCarMileage));
      
    } else if (price && findCarMileage.length) {
      let findCar = [];
      location.pathname === "/favorites"
        ? (findCar = filteredFavoriteCar.filter(
            (favItem) =>
              favItem.rentalPrice.slice(1, favItem.rentalPrice.length) <=
                price &&
              favItem.mileage > inputMileageFrom &&
              favItem.mileage < inputMileageTo
          ))
        : (findCar = allAdverts.filter(
            (item) =>
              item.mileage > inputMileageFrom && item.mileage < inputMileageTo
        ));
      
      if (findCar.length === 0) {
        Notiflix.Notify.failure("This car was not found");
      } else {
        console.log(findCar);
        dispatch(setFilterCar(findCar));
      }
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Label>
        Car brand
        <Select
          options={options}
          name="name"
          onChange={onChangeCarBrand}
          placeholder="Enter the text"
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              width: "224px",
              height: "48px",
              borderRadius: "14px",
              background: "#F7F7FB",
              padding: "14px 18px",
            }),
            indicatorSeparator: (baseStyles) => ({
              display: "none",
            }),
            placeholder: (baseStyles) => ({
              ...baseStyles,
              margin: "0",
              color: "#121417",
              fontFamily: "ManropeMedium",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "1.11",
            }),
            valueContainer: (baseStyles) => ({
              ...baseStyles,
              padding: "0",
              fontFamily: "ManropeMedium",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "20px",
            }),
            input: (baseStyles, state) => ({
              ...baseStyles,
              margin: "0",
              padding: "0",
            }),
            dropdownIndicator: (baseStyles, { isFocused }) => ({
              ...baseStyles,
              padding: "0",
              color: isFocused ? "#3470FF" : "#121417",
              transform: isFocused && "rotate(180deg)",
            }),
            menu: (baseStyles, { isFocused }) => ({
              ...baseStyles,
              width: "224px",
            }),
            option: (baseStyles, { isFocused }) => ({
              ...baseStyles,
              color: isFocused ? "black" : "rgba(18, 20, 23, 0.2)",
              fontFamily: "ManropeMedium",
            }),
          }}
        />
      </Label>
      <Label>
        Price/ 1 hour
        <Select
          options={priceOptions}
          name="price"
          onChange={onChangeCarPrice}
          placeholder="To $"
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              width: "125px",
              height: "48px",
              borderRadius: "14px",
              background: "#F7F7FB",
              padding: "14px 18px",
            }),
            indicatorSeparator: (baseStyles) => ({
              display: "none",
            }),
            placeholder: (baseStyles) => ({
              ...baseStyles,
              margin: "0",
              color: "#121417",
              fontFamily: "ManropeMedium",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "1.11",
            }),
            valueContainer: (baseStyles) => ({
              ...baseStyles,
              padding: "0",
              fontFamily: "ManropeMedium",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "20px",
            }),
            input: (baseStyles) => ({
              ...baseStyles,
              margin: "0",
              padding: "0",
            }),
            dropdownIndicator: (baseStyles, { isFocused }) => ({
              ...baseStyles,
              padding: "0",
              color: isFocused ? "#3470FF" : "#121417",
              transform: isFocused && "rotate(180deg)",
            }),
            menu: (baseStyles, { isFocused }) => ({
              ...baseStyles,
              width: "224px",
            }),
            option: (baseStyles, { isFocused }) => ({
              ...baseStyles,
              color: isFocused ? "black" : "rgba(18, 20, 23, 0.2)",
              fontFamily: "ManropeMedium",
            }),
          }}
        />
      </Label>
      <Label>Сar mileage / km</Label>
      <input type="number" name="from"></input>
      <input type="number" name="to"></input>
      <BtnSearch type="submit">Search</BtnSearch>
    </Form>
  );
};

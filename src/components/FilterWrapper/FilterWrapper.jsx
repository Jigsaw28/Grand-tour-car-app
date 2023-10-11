import { useEffect, useState } from "react";
import Select from "react-select";
import { fetchMakes } from "../../api/fetchAdvert";
import { Label } from "./FilterWrapper.styled";

export const FilterWrapper = () => {
  const [makes, setMakes] = useState([]);
  useEffect(() => {
    fetchMakes().then((data) => setMakes(data));
  }, []);
  let options = [];

  makes.map((item) => options.push({ value: item, label: item }));

  return (
    <div>
      <Label htmlFor="carModel">Car brand</Label>
      <Select
        id="carModel"
        options={options}
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
    </div>
  );
};

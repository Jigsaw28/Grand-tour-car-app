import axios from "axios";

export const fetchAdvert = async (page) => {
  const { data } = await axios(
    `https://650804ab56db83a34d9b96a3.mockapi.io/api/advert?page=${page}&limit=8` );
  return data;
};

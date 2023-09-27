import { lazy, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";

import { useDispatch, useSelector } from "react-redux";
import { getCarThunk } from "./redux/carThunk";
import { setPage } from "./redux/carSlice";

const Home = lazy(() => import("./pages/Home"));
const Catalog = lazy(() => import("./pages/Catalog"));
const Favorite = lazy(() => import("./pages/Favorite"));

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { page } = useSelector((state) => state.cars);
 
  useEffect(() => {
    const promise=dispatch(getCarThunk(page));
    return () => {
      promise.abort()
    };
  }, [dispatch,page]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorite />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

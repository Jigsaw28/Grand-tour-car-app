import { Suspense, lazy, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";

import { useDispatch, useSelector } from "react-redux";
import { getCarThunk } from "./redux/carThunk";
import { setPage } from "./redux/carSlice";
import { Loader } from "./components/Loader/Loader";

const Home = lazy(() => import("./pages/Home"));
const Catalog = lazy(() => import("./pages/Catalog"));
const Favorite = lazy(() => import("./pages/Favorite"));

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { page, isLoading } = useSelector((state) => state.cars);

  useEffect(() => {
    const promise = dispatch(getCarThunk());
    return () => {
      promise.abort();
    };
  }, [dispatch]);

  return isLoading ? (
    <Loader />
  ) : (
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

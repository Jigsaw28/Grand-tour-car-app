import { lazy, useEffect } from "react";
import { Route, Routes} from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
 
import { useDispatch, useSelector } from "react-redux";
import { getCarThunk } from "./redux/carThunk";

const Home = lazy(() => import("./pages/Home"));
const Catalog = lazy(() => import("./pages/Catalog"));
const Favorite = lazy(() => import("./pages/Favorite"));

const App = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.cars);

  useEffect(() => {
    const promise = dispatch(getCarThunk(page));
    return () => promise.abort();
  }, [dispatch, page]);

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

import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";

const Home = lazy(() => import("./pages/Home"));
const Catalog = lazy(() => import("./pages/Catalog"));
const Favorite = lazy(() => import("./pages/Favorite"));

const App = () => {
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

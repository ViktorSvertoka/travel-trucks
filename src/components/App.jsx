import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Loader from "./Loader/Loader";

const Home = lazy(() => import("../pages/Home/Home"));
const Catalog = lazy(() => import("../pages/Catalog/Catalog"));
const Favorites = lazy(() => import("../pages/Favorites/Favorites"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
const Details = lazy(() => import("../pages/Details/Details"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/catalog" element={<Catalog />}></Route>
            <Route path="/catalog/:id/*" element={<Details />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

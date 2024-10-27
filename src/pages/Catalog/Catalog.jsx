import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrucks } from "../../redux/truck/operations";
import TruckList from "../../components/TruckList/TruckList";
import Filters from "../../components/Filters/Filters";
import { selectFilteredTrucks } from "../../redux/filters/selectors";
import { isLoading } from "../../redux/truck/selectors";

const Catalog = () => {
  const dispatch = useDispatch();
  const filteredTrucks = useSelector(selectFilteredTrucks);
  const loading = useSelector(isLoading);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);

  useEffect(() => {
    setVisibleCount(4);
  }, [filteredTrucks]);

  const onClickButton = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <>
      <Helmet>
        <title>Catalog</title>
      </Helmet>
      <div className="container">
        <section className="flex gap-16 py-12">
          <Filters />
          <TruckList filteredTrucks={filteredTrucks.slice(0, visibleCount)} />
        </section>
        {!loading && visibleCount < filteredTrucks.length && (
          <button
            className="block border border-grayLight hover:border-buttonHover w-36 h-14 mx-auto mt-8 mb-12 bg-transparent rounded-full text-main font-medium text-lg leading-6 tracking-tight transition-colors duration-250 ease-in-out"
            type="button"
            onClick={onClickButton}
          >
            Load more
          </button>
        )}
      </div>
    </>
  );
};

export default Catalog;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selectors";
import { selectTrucks, isLoading } from "../../redux/truck/selectors";
import { fetchTrucks } from "../../redux/truck/operations";
import TruckList from "../../components/TruckList/TruckList";
import Loader from "../../components/Loader/Loader";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const allTrucks = useSelector(selectTrucks);
  const loading = useSelector(isLoading);

  useEffect(() => {
    if (allTrucks.length === 0) {
      dispatch(fetchTrucks());
    }
  }, [allTrucks, dispatch]);

  if (loading) {
    return <Loader />;
  }

  const favoriteTrucks = allTrucks.filter((truck) =>
    favorites.includes(truck.id)
  );

  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center my-8">
        <h2 className="font-semibold text-2xl leading-tight text-main">
          Your Favorites
        </h2>
        <div className="mt-[20px]">
          <TruckList filteredTrucks={favoriteTrucks} />
        </div>
      </div>
    </div>
  );
};
export default Favorites;

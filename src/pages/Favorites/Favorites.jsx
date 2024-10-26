import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import { selectFavorites } from "../../redux/favorites/selectors";
import { selectTrucks } from "../../redux/truck/selectors";
import TruckList from "../../components/TruckList/TruckList";

const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  const allTrucks = useSelector(selectTrucks);

  const favoriteTrucks = allTrucks.filter((truck) =>
    favorites.includes(truck.id)
  );

  return (
    <>
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center my-8 pl-7">
        <h2 className="font-semibold text-2xl leading-tight text-main">
          Your Favorites
        </h2>
        <div className="mt-[20px]">
          <TruckList filteredTrucks={favoriteTrucks} />
        </div>
      </div>
    </>
  );
};

export default Favorites;

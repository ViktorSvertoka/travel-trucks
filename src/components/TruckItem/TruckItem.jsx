import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import icons from "../../icons/sprite.svg";
import Features from "../Features/Features";
import { selectFavorites } from "../../redux/favorites/selectors";
import { toggleFavorite } from "../../redux/favorites/slice";

const TruckItem = ({ truck }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = Array.isArray(favorites) && favorites.includes(truck.id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(truck.id));
  };

  const { id, name, price, rating, reviews, location, description, gallery } =
    truck;

  return (
    <div className="flex gap-6 min-h-[368px]">
      {gallery?.[0]?.thumb && (
        <img
          className="w-[292px] h-[320px] rounded-[10px] object-cover"
          src={gallery[0].thumb}
          alt={name}
        />
      )}
      <div className="flex flex-col w-full justify-between">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-[24px] leading-[1.33] text-main max-w-[360px]">
            {name}
          </h2>
          <div className="flex items-center gap-3">
            <p className="font-semibold text-[24px] leading-[1.33] text-main">{`€ ${Number(
              price
            ).toFixed(2)}`}</p>
            <svg
              width="26"
              height="24"
              onClick={handleToggleFavorite}
              fill={isFavorite ? "#e44848" : "#101828"}
              className="cursor-pointer"
            >
              <use href={`${icons}#black-heart`} />
            </svg>
          </div>
        </div>
        <div className="flex items-center gap-1 text-main text-[16px] font-normal leading-[1.5]">
          <svg width="16" height="16">
            <use href={`${icons}#yellow-star`} />
          </svg>
          <p className="underline decoration-2 underline-offset-2 mr-4">
            {rating} ({reviews.length} Reviews)
          </p>
          <svg width="20" height="20">
            <use href={`${icons}#black-map`} />
          </svg>
          {location}
        </div>
        <p className="text-[16px] font-normal leading-[1.5] text-text">
          {description.length > 60
            ? `${description.substring(0, 60)}...`
            : description}
        </p>
        <Features truck={truck} />
        <Link to={`/catalog/${id}`} target="_blank" rel="noopener noreferrer">
          <button
            type="button"
            className="rounded-full w-[166px] h-[56px] bg-button transition-colors duration-250 ease-in-out font-medium text-[16px] leading-[1.5] tracking-[-0.01em] text-white hover:bg-buttonHover"
          >
            Show more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TruckItem;

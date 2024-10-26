import { useSelector } from "react-redux";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import clsx from "clsx";
import icons from "../../icons/sprite.svg";
import { selectTruck } from "../../redux/truck/selectors";
import TruckFeatures from "../TruckFeatures/TruckFeatures";
import TruckReviews from "../TruckReviews/TruckReviews";

const activeLink = ({ isActive }) => {
  return clsx(
    "text-main no-underline",
    isActive &&
      "underline decoration-buttonHover decoration-4 underline-offset-[25px]"
  );
};

const TruckCard = () => {
  const truck = useSelector(selectTruck);
  const { name, rating, reviews, location, price, gallery, description } =
    truck;

  return (
    <>
      <h2 className="font-semibold text-[24px] leading-[1.33] text-main max-w-[360px]">
        {name}
      </h2>
      <div className="flex gap-[4px] font-normal text-[16px] leading-[1.5] text-main items-center mb-[16px]">
        <svg className="w-[16px] h-[16px]">
          <use href={`${icons}#yellow-star`} />
        </svg>
        <p className="underline underline-offset-2 mr-[16px]">
          {rating} ({reviews ? reviews.length : 0} Reviews)
        </p>
        <svg className="w-[20px] h-[20px]">
          <use href={`${icons}#black-map`} />
        </svg>
        {location}
      </div>
      <p className="font-semibold text-[24px] leading-[1.33] text-main">{`€ ${Number(
        price
      ).toFixed(2)}`}</p>

      {gallery.length > 0 ? (
        <ul className="flex gap-[48px] flex-wrap my-[28px]">
          {gallery.map((item, index) => (
            <li key={index}>
              <img
                className="rounded-[10px] w-[292px] h-[312px] object-cover"
                src={item.thumb}
                alt={`Gallery image ${index + 1}`}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No images available.</p>
      )}
      <p className="font-normal text-[16px] leading-[1.5] text-text">
        {description}
      </p>

      <ul className="flex gap-[40px] font-semibold text-[20px] leading-[1.2] mt-[60px] relative">
        <li className="after:content-[''] after:absolute after:left-0 after:bottom-[-24px] after:w-full after:h-[1px] after:grayLight">
          <NavLink className={activeLink} to="features">
            Features
          </NavLink>
        </li>
        <li className="after:content-[''] after:absolute after:left-0 after:bottom-[-24px] after:w-full after:h-[1px] after:grayLight">
          <NavLink className={activeLink} to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="" element={<Navigate to="features" />} />
        <Route path="features" element={<TruckFeatures />} />
        <Route path="reviews" element={<TruckReviews />} />
      </Routes>
    </>
  );
};

export default TruckCard;

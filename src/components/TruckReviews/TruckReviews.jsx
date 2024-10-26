import { useSelector } from "react-redux";
import ClientForm from "../Forms/Forms";
import { selectTruck } from "../../redux/truck/selectors";
import icons from "../../icons/sprite.svg";
import { nanoid } from "nanoid";

const TruckReviews = () => {
  const truck = useSelector(selectTruck);
  const totalStars = 5;
  return (
    <div className="flex mt-[50px] gap-[40px]">
      <ul className="flex flex-col w-[631px] h-[588px] gap-[44px]">
        {truck.reviews.length === 0 ? (
          <p>Sorry, there are no reviews!</p>
        ) : (
          truck.reviews.map((item) => (
            <li className="flex flex-col" key={nanoid()}>
              <div className="flex gap-[16px] items-center mb-[16px]">
                <div className="rounded-full w-[60px] h-[60px] bg-badges flex justify-center items-center font-semibold text-[24px] leading-[1.3] text-button">
                  {item.reviewer_name.charAt(0)}
                </div>
                <div>
                  <h3>{item.reviewer_name}</h3>
                  <div className="flex items-center">
                    {[...Array(totalStars)].map((_, starIndex) => (
                      <svg
                        width="16"
                        height="16"
                        fill={
                          starIndex < item.reviewer_rating
                            ? "#ffc531"
                            : "#f2f4f7"
                        }
                        key={nanoid()}
                      >
                        <use href={`${icons}#gray-star`} />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="font-normal text-[16px] leading-[1.5] text-text">
                {item.comment}
              </p>
            </li>
          ))
        )}
      </ul>
      <ClientForm />
    </div>
  );
};

export default TruckReviews;

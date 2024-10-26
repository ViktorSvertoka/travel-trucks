import TruckItem from "../TruckItem/TruckItem";
import { useSelector } from "react-redux";
import { isLoading } from "../../redux/truck/selectors";
import Loader from "../Loader/Loader";

const TruckList = ({ filteredTrucks }) => {
  const loading = useSelector(isLoading);
  if (loading) {
    return <Loader />;
  }

  if (filteredTrucks.length === 0) {
    return (
      <p className="font-semibold text-[20px] leading-[1.2] text-main mt-[100px]">
        Your favorites list is empty!
      </p>
    );
  }
  return (
    <ul className="flex flex-col gap-8">
      {filteredTrucks.map((item) => (
        <li
          className="border border-grayLight rounded-[20px] p-6 w-[888px]"
          key={item.id}
        >
          <TruckItem truck={item} />
        </li>
      ))}
    </ul>
  );
};

export default TruckList;

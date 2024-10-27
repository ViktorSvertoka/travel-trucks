import { useSelector } from "react-redux";
import ClientForm from "../Forms/Forms";
import Features from "../Features/Features";
import { selectTruck } from "../../redux/truck/selectors";
import { truckDetails } from "../../data/truckDetails";

const TruckFeatures = () => {
  const truck = useSelector(selectTruck);

  const capitalizeFirstLetter = (text) => {
    if (typeof text === "string" && text.length > 0) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    }
    return text;
  };

  return (
    <div className="flex mt-12 gap-10">
      <div className="bg-inputs rounded-lg p-11 w-[631px]">
        <Features truck={truck} />
        <h3 className="font-semibold text-xl leading-snug text-main mt-24 relative">
          Vehicle details
          <span className="absolute left-[260px] bottom-[-24px] translate-x-[-50%] w-full h-px bg-grayLight"></span>
        </h3>
        <div className="flex flex-col gap-4 mt-12">
          {truckDetails.map(({ label, key }) => (
            <div
              key={key}
              className="flex justify-between font-medium text-base leading-6 text-main text-center"
            >
              <p>{label}</p>
              <p>{capitalizeFirstLetter(truck[key])}</p>
            </div>
          ))}
        </div>
      </div>
      <ClientForm />
    </div>
  );
};

export default TruckFeatures;

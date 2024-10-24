import { features } from "../../data/featuresData";
import icons from "../../icons/sprite.svg";

const Features = ({ truck }) => {
  return (
    <div className="flex flex-wrap gap-[8px]">
      {features.map(({ key, label, svg, value }) => {
        const isFeatureAvailable = truck[key] === true || truck[key] === value;
        return isFeatureAvailable ? (
          <div
            className="rounded-full py-[12px] px-[18px] max-w-[143px] h-[48px] bg-badges flex items-center gap-[3px] font-medium text-[16px] leading-[1.5] text-main"
            key={key}
          >
            <svg className="w-[20px] h-[20px]">
              <use href={`${icons}#${svg}`} />
            </svg>
            <span>{label}</span>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default Features;

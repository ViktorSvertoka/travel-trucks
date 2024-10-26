import { Field } from "formik";
import icons from "../../icons/sprite.svg";

const RadioFilter = ({ name, value, icon, label }) => (
  <label>
    <Field
      className="radioGroup hidden"
      type="radio"
      name={name}
      value={value}
    />
    <p className="paragraph border border-grayLight hover:border-buttonHover rounded-xl w-[112px] h-[96px] cursor-pointer flex items-center flex-col justify-center transition-all duration-300 ease-in-out font-medium text-[16px] leading-6 tracking-tight text-center text-main">
      <svg className="pb-[8px]" width="32" height="32">
        <use href={`${icons}#${icon}`} />
      </svg>
      {label.split(" ").map((word, index) => (
        <span key={index} className={index === 1 ? "block" : ""}>
          {word}
        </span>
      ))}
    </p>
  </label>
);

export default RadioFilter;

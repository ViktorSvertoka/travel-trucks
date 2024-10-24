import { Field } from "formik";
import icons from "../../icons/sprite.svg";

const CheckboxFilter = ({ name, value, icon, label }) => (
  <label>
    <Field
      className="checkGroup hidden"
      type="checkbox"
      name={name}
      value={value}
    />
    <p className="paragraph border border-grayLight rounded-xl w-[112px] h-[96px] cursor-pointer flex items-center flex-col justify-center transition-all duration-300 ease-in-out font-medium text-[16px] leading-6 tracking-tight text-center text-main">
      <svg width="20" height="30">
        <use href={`${icons}#${icon}`} />
      </svg>
      {label}
    </p>
  </label>
);

export default CheckboxFilter;

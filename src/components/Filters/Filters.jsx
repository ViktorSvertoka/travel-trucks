import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import icons from "../../icons/sprite.svg";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilters } from "../../redux/filters/selectors";
import CheckboxFilter from "../CheckboxFilter/CheckboxFilter";
import RadioFilter from "../RadioFilter/RadioFilter";
import { featuresOptions } from "../../data/featuresOptions";
import { vehicleTypes } from "../../data/vehicleTypes";

const LocationSchema = Yup.object().shape({
  location: Yup.string(),
});

const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const [hasText, setHasText] = useState(false);

  useEffect(() => {
    dispatch(changeFilter({ location: "", form: "", features: [] }));
  }, [dispatch]);

  return (
    <div className="flex flex-col">
      <Formik
        enableReinitialize={true}
        initialValues={{
          location: filters.location || "",
          form: filters.form || "",
          features: filters.features || [],
        }}
        validationSchema={LocationSchema}
        onSubmit={(values) => {
          dispatch(changeFilter(values));
        }}
      >
        {({ errors, setFieldValue }) => (
          <Form>
            <div className="relative flex flex-col justify-start mb-10">
              <label
                className="font-medium text-[16px] leading-6 text-gray mb-2"
                htmlFor="location"
              >
                Location
              </label>
              <Field
                className={`rounded-xl px-12 py-4 w-[360px] h-14 bg-inputs outline-none focus:border-black focus:border placeholder:font-normal placeholder:text-[16px] placeholder:leading-6 ${
                  hasText
                    ? "placeholder:text-main"
                    : "placeholder:text-gray-600"
                }`}
                name="location"
                type="text"
                placeholder="City"
                onInput={(e) => {
                  setHasText(e.target.value !== "");
                  setFieldValue("location", e.target.value);
                }}
              />
              <svg
                className="absolute left-5 bottom-5 pointer-events-none"
                width="20"
                height="20"
                style={{
                  fill: hasText ? "#101828" : "#6c717b",
                }}
              >
                <use href={`${icons}#black-map`} />
              </svg>
            </div>
            {errors.location && (
              <div className="text-button">{errors.location}</div>
            )}

            <p className="font-medium text-[16px] leading-6 text-text mb-2">
              Filters
            </p>

            <h3 className="relative font-semibold text-[20px] leading-[1.2] text-main mt-8 after:content-[''] after:absolute after:left-1/2 after:bottom-[-24px] after:translate-x-[-50%] after:w-[360px] after:h-[1px] after:bg-grayLight">
              Vehicle equipment
            </h3>
            <div
              className="flex flex-wrap gap-3 mt-12 max-w-[360px]"
              role="group"
              aria-labelledby="features-group"
            >
              {featuresOptions.map((feature) => (
                <CheckboxFilter
                  key={feature.value}
                  name="features"
                  {...feature}
                />
              ))}
            </div>

            <h3 className="relative font-semibold text-[20px] leading-[1.2] text-main mt-8 after:content-[''] after:absolute after:left-1/2 after:bottom-[-24px] after:translate-x-[-50%] after:w-[360px] after:h-[1px] after:bg-grayLight">
              Vehicle type
            </h3>
            <div
              className="flex flex-wrap gap-3 mt-12 max-w-[360px]"
              role="group"
              aria-labelledby="form-group"
            >
              {vehicleTypes.map((type) => (
                <RadioFilter key={type.value} name="form" {...type} />
              ))}
            </div>

            <button
              className="rounded-full w-[173px] h-14 bg-[#e44848] transition-colors duration-250 ease-in-out font-medium text-[16px] leading-6 tracking-tight text-white mt-8 hover:bg-[#d84343]"
              type="submit"
            >
              Search
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Filters;

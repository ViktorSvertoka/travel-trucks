import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import enGB from "date-fns/locale/en-GB";
import toast from "react-hot-toast";
import { useState } from "react";

registerLocale("en-GB", enGB);

const Schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  comment: Yup.string(),
  dateRange: Yup.object({
    start: Yup.date().nullable().required("Please select a start date"),
    end: Yup.date().nullable().required("Please select an end date"),
  }),
});

const Forms = () => {
  const handleSubmit = async (values, { resetForm }) => {
    toast.loading("Sending...");

    const formData = new FormData();
    formData.append("access_key", "10ad8243-f9c1-4ae4-ade9-aea832e9e732");
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("message", values.comment || "No comment provided");
    formData.append("start_date", values.dateRange.start);
    formData.append("end_date", values.dateRange.end);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.dismiss();
      toast.success("Form Submitted Successfully");
      resetForm();
    } else {
      toast.dismiss();
      toast.error(`Error: ${data.message}`);
    }
  };

  return (
    <div className="flex flex-col border border-grayLight rounded-lg p-11 w-full max-w-[641px] mx-auto">
      <h3 className="font-semibold text-xl text-main mb-2">
        Book your campervan now
      </h3>
      <p className="font-normal text-base text-gray mb-6">
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={{
          name: "",
          email: "",
          dateRange: { start: null, end: null },
          comment: "",
        }}
        validationSchema={Schema}
        onSubmit={handleSubmit}
      >
        {({ errors, values, touched, setFieldValue }) => (
          <Form>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <Field
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name*"
                  className="border-none rounded-lg p-4 w-full bg-inputs focus:outline-none focus:ring-2 focus:ring-main"
                />
                {touched.name && errors.name && (
                  <div className="text-buttonHover text-sm mt-1">
                    {errors.name}
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email*"
                  className="border-none rounded-lg p-4 w-full bg-inputs focus:outline-none focus:ring-2 focus:ring-main"
                />
                {touched.email && errors.email && (
                  <div className="text-buttonHover text-sm mt-1">
                    {errors.email}
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="date" className="sr-only">
                  Booking Date
                </label>
                <DatePicker
                  id="date"
                  selected={values.dateRange?.start}
                  onChange={(dates) => {
                    const [start, end] = dates;
                    setFieldValue("dateRange", { start, end });
                  }}
                  startDate={values.dateRange?.start}
                  endDate={values.dateRange?.end}
                  selectsRange
                  closeOnScroll={true}
                  minDate={new Date()}
                  locale="en-GB"
                  dateFormat="d MMMM, yyyy"
                  placeholderText="Booking date*"
                  className="border-none rounded-lg p-4 w-full bg-inputs focus:outline-none focus:ring-2 focus:ring-main"
                />
                {touched.dateRange?.start && errors.dateRange?.start && (
                  <div className="text-buttonHover text-sm mt-1">
                    {errors.dateRange.start}
                  </div>
                )}
                {touched.dateRange?.end && errors.dateRange?.end && (
                  <div className="text-buttonHover text-sm mt-1">
                    {errors.dateRange.end}
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="comment" className="sr-only">
                  Comment
                </label>
                <Field
                  id="comment"
                  name="comment"
                  as="textarea"
                  placeholder="Comment"
                  className="border-none rounded-lg p-4 w-full h-[118px] bg-inputs resize-none focus:outline-none focus:ring-2 focus:ring-main"
                />
              </div>
            </div>
            <button
              type="submit"
              className="block mx-auto mt-8 rounded-full w-[173px] h-14 bg-button transition-colors duration-200 ease-in-out font-medium text-base text-white hover:bg-buttonHover"
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Forms;

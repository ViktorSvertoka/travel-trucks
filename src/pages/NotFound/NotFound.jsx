import { Helmet } from "react-helmet-async";
import NotFoundImage from "../../images/404.svg?react";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page 404</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center text-4xl font-semibold mt-[100px]">
        <p>Oops! Page not found...</p>
        <NotFoundImage
          className="mt-[50px]"
          width={400}
          height={400}
          aria-label="Page not found 404"
        />
      </div>
    </>
  );
};

export default NotFound;

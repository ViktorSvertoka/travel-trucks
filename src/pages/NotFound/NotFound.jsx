import notFoundImage from "../../images/404.png";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center text-4xl font-semibold mt-[100px]">
      <p>Oops! Page not found...</p>
      <img
        className="mt-[50px]"
        src={notFoundImage}
        alt="Page 404"
        width={400}
        height={400}
      />
    </div>
  );
};

export default NotFound;

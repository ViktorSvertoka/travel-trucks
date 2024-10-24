import { BallTriangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-[1]">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="rgb(228, 72, 72)"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;

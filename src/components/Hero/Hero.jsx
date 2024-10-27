import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-heroDesktop bg-no-repeat bg-cover w-[100%] h-[93vh] flex justify-start items-center pl-[64px]">
      <div className="container">
        <h1 className="font-semibold text-[48px] leading-[0.67] text-inputs mb-[16px]">
          Campers of your dreams
        </h1>
        <p className="font-semibold text-[24px] leading-[1.33] text-inputs mb-[40px]">
          You can find everything you want in our catalog
        </p>
        <Link to="/catalog">
          <button
            type="button"
            className="rounded-full w-[173px] h-[56px] bg-button transition-colors duration-250 ease-in-out font-medium text-[16px] leading-[1.5] tracking-[-0.01em] text-white hover:bg-buttonHover"
          >
            View Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;

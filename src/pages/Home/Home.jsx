import { Helmet } from "react-helmet-async";
import Hero from "../../components/Hero/Hero";
const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero />
    </>
  );
};

export default HomePage;

import { Helmet } from "react-helmet-async";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { fetchTruckDetails } from "../../redux/truck/operations";
import TruckCard from "../../components/TruckCard/TruckCard";

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchTruckDetails(id));
  }, [dispatch, id]);

  return (
    <>
      <Helmet>
        <title>Details</title>
      </Helmet>
      <Toaster position="top-center" reverseOrder={false} />
      <section className="py-12 flex flex-col">
        <div className="container">
          <TruckCard />
        </div>
      </section>
    </>
  );
};

export default Details;

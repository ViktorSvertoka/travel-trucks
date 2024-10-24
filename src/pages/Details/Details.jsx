import { Helmet } from "react-helmet-async";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { fetchTruckDetails } from "../../redux/truck/operations";
import Card from "../../components/Card/Card";

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
      <section className="py-12 px-16 flex flex-col">
        <Card />
      </section>
    </>
  );
};

export default Details;

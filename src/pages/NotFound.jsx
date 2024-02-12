import { Link, useRouteError } from "react-router-dom";
import HeaderBanner from "../components/Commons/Header/HeaderBanner/HeaderBanner";

const NotFound = () => {
  const { error } = useRouteError();
  console.log(error);
  return (
    <>
      <header>
        <HeaderBanner />
      </header>
      <section className="text-center text-white  mx-auto w-fit mt-4 text-lg">
        <h1 className="mb-4">Oops, it seems you are lost</h1>
        <Link className="p-2 bg-green-500 rounded-md" to={'/'}>Go to home</Link>
      </section>
    </>
  );
};

export default NotFound;
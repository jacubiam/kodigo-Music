import { Link } from "react-router-dom";

const HeaderBanner = () => {
  return (

    <div className="flex justify-center items-center mb-7 mt-5">
      <img className="w-12 mr-2" src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" alt="" />
      <Link to={'/'}>
        <h1 className="text-center text-4xl text-gray-800 font-medium">Spotify&apos;s Album Checker</h1>
      </Link>
    </div>
  );
};

export default HeaderBanner;
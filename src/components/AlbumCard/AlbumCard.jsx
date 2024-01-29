import { Link } from "react-router-dom";

const AlbumCard = ({album}) => {


  return (
    <>
      <div className="relative flex w-auto mx-2 min-[425px]:w-96 md:w-80 lg:w-90 xl:w-96 flex-col rounded-xl bg-purple-200 bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img
            className="hover:scale-110"
            src={album.images[0].url}
            alt="album"
          />
        </div>
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {album.name}
          </h5>
        </div>
        <div className="p-6 pt-0">
          <Link
            to={`/album/${album.id}`}
            className="select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
          >
            See tracks
          </Link>
        </div>
      </div>
    </>
  );
};

export default AlbumCard;
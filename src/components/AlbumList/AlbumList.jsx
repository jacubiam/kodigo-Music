import { useContext } from "react";
import AlbumCard from "../AlbumCard/AlbumCard";
import AlbumsContext from "../../context/ArtistContext/AlbumsContext";

const AlbumList = () => {
  const { albums } = useContext(AlbumsContext);
  console.log(albums);

  return (
    <>
      <ul className="mt-12 list-none flex flex-wrap max-w-screen-xl mx-auto justify-evenly items-end">
        { 
          albums.length > 0 &&
          albums.map((album) => {
            return (<li key={album.id} className="flex justify-center mt-12">
              <AlbumCard album={album} />
            </li>);
          })
        }
      </ul>

    </>
  );
};

export default AlbumList;
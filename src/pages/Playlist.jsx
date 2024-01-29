import HeaderBanner from '../components/HeaderBanner/HeaderBanner';
import SearchBar from '../components/SearchBar/SearchBar';
import PlaylistTracks from "../components/PlaylistTracks/PlaylistTracks";
import Player from '../components/Player/Player';

const Playlist = () => {

  return (
    <>
      <header className='flex flex-wrap items-start justify-center'>
        <HeaderBanner />
        <SearchBar />
      </header>
      <main>
        <PlaylistTracks />
      </main>
      <footer>
        <Player/>
      </footer>
    </>
  );
};

export default Playlist;
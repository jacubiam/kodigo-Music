import HeaderBanner from '../components/Commons/Header/HeaderBanner/HeaderBanner';
import SearchBar from '../components/Commons/Header/SearchBar/SearchBar';
import PlaylistTracks from '../components/Playlist/PlaylistTracks/PlaylistTracks';
import Player from '../components/Playlist/Player/Player';

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
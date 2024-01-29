import { useState } from "react";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/HomePage";
import useToken from "./adapters/token";
import TokenContext from "./context/TokenContext/TokenContext";
import AlbumsContext from "./context/ArtistContext/AlbumsContext";
import Playlist from "./pages/Playlist";
import NotFound from "./pages/NotFound";
import PlayerContext from "./context/PlayerContex/PlayerContext";


const routes = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/album/:albumID', element: <Playlist /> },
  { path: '*', element: <NotFound /> }
]);

const queryClient = new QueryClient();

const playerInfo = {
  display: "none",
  artist: "",
  track: "",
  src: "",
  full: "",
  previous: "",
  play: false,
  button: {},
};

function App() {
  const tokenID = useToken();
  const [albums, setAlbums] = useState([]);
  const [player, setPlayer] = useState(playerInfo);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <TokenContext.Provider value={tokenID}>
          <AlbumsContext.Provider value={{ albums, setAlbums }}>
            <PlayerContext.Provider value={{ player, setPlayer }}>
              <RouterProvider router={routes} />
            </PlayerContext.Provider>
          </AlbumsContext.Provider>
        </TokenContext.Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;

import { useContext, useRef } from "react";
import PlayerContext from "../../../../context/PlayerContex/PlayerContext";

const Track = ({ track, image }) => {
  const trackBtn = useRef(null);
  const { player, setPlayer } = useContext(PlayerContext);

  const handlePlay = (e) => {
    const element = e.target;
    let prev = player.previous;

    if (prev === "") {
      prev = element.id;
    } else if (element.id !== prev) {
      document.getElementById(player.previous).src = "https://res.cloudinary.com/dk2oxzxoo/image/upload/v1706330723/kodigo-React-SPA/player-play-filled_tzzyta.png";
      prev = element.id;
    }

    if (player.play) {
      if (element.id === player.previous || player.previous === "") {
        element.src = "https://res.cloudinary.com/dk2oxzxoo/image/upload/v1706330723/kodigo-React-SPA/player-play-filled_tzzyta.png";
        setPlayer({ ...player, display: "block", artist: track.artists[0].name, track: track.name, src: track.preview_url, full: track.external_urls.spotify, previous: prev, play: false, button: element });
      } else {
        element.src = "https://res.cloudinary.com/dk2oxzxoo/image/upload/v1706334396/kodigo-React-SPA/player-pause-filled_cwgbkh.png";
        setPlayer({ ...player, display: "block", artist: track.artists[0].name, track: track.name, src: track.preview_url, full: track.external_urls.spotify, previous: prev, play: true, button: element });
      }
    } else {
      element.src = "https://res.cloudinary.com/dk2oxzxoo/image/upload/v1706334396/kodigo-React-SPA/player-pause-filled_cwgbkh.png";
      setPlayer({ ...player, display: "block", artist: track.artists[0].name, track: track.name, src: track.preview_url, full: track.external_urls.spotify, previous: prev, play: true, button: element });
    }

  };

  return (
    <>
      <div className="flex items-center">
        <p className="text-lg mr-2 w-5 text-center">{track.track_number}</p>
        <img src={image} alt="#" className="w-11 rounded-[12%] mr-2" />
        <div>
          <h3 className="text-gray-800">{track.name}</h3>
          <h4 className="text-sm text-gray-700">{track.artists[0].name}</h4>
        </div>
      </div>
      <div className="flex items-center">
        <span className="max-[425px]:hidden">{(Number(track.duration_ms) / 1000 / 60).toFixed(2)}</span>
        <button type="button">
          <img id={track.id} ref={trackBtn} src="https://res.cloudinary.com/dk2oxzxoo/image/upload/v1706330723/kodigo-React-SPA/player-play-filled_tzzyta.png"
            alt="" className="w-8"
            onClick={handlePlay} />
        </button>
      </div>
    </>
  );
};

export default Track;
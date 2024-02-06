import { useContext, useEffect, useRef } from "react";
import PlayerContext from "../../../context/PlayerContex/PlayerContext";

const Player = () => {
    const { player, setPlayer } = useContext(PlayerContext);
    const audioRef = useRef();
    const sectionRef = useRef();

    useEffect(() => {
        const audio = audioRef.current;
        const container = sectionRef.current;

        if (player.play) {
            container.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
            audio.play();
        } else {
            audio.pause();
        }

    }, [player.play]);

    const handlePlay = () => {
        player.button.src = "https://res.cloudinary.com/dk2oxzxoo/image/upload/v1706334396/kodigo-React-SPA/player-pause-filled_cwgbkh.png";
        setPlayer({ ...player, play: true });
    };

    const handlePause = () => {
        player.button.src = "https://res.cloudinary.com/dk2oxzxoo/image/upload/v1706330723/kodigo-React-SPA/player-play-filled_tzzyta.png";
        setPlayer({ ...player, play: false });
    };

    return (
        <section ref={sectionRef} style={{ display: player.display }} className="mx-auto max-w-3xl max-md:mx-1 p-2 bg-purple-200 border rounded-md mt-4">
            <div className="flex justify-between items-center max-w-2xl mx-auto">
                <div>
                    <p className="text-center mb-1 max-[425px]:text-sm">{`${player.track} - ${player.artist}`}</p>
                    <audio className="max-[425px]:w-full" ref={audioRef} controls src={player.src} autoPlay onPlay={handlePlay} onPause={handlePause}></audio>
                </div>
                <div>
                    <p className="text-gray-800 mb-1 max-[425px]:text-sm text-center">Full song on</p>
                    <a className="select-none rounded-lg bg-green-500 block py-3 px-6 text-center align-middle font-sans text-xs font-bold
                    text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 
                    focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none 
                    disabled:opacity-50 disabled:shadow-none" href={player.full} target="_blank" rel="noreferrer">Spotify</a>
                </div>
            </div>
        </section>
    );
};

export default Player;
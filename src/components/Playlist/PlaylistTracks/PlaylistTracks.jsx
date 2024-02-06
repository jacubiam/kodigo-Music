import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getPlaylist from "../../../adapters/Playlist/getPlaylist";
import useToken from "../../../adapters/token";
import TokenContext from "../../../context/TokenContext/TokenContext";
import Track from "./Track/Track";
import PlaylistHeader from "./PlaylistHeader/PlaylistHeader";

const PlaylistTracks = () => {
    const { albumID } = useParams();
    const tokenID = useToken(TokenContext);
    const { data } = useQuery({ queryKey: ['Tracks', albumID, tokenID], queryFn: () => getPlaylist(albumID, tokenID) });

    return (
        <>
            <section>
                <PlaylistHeader/>
                <ul className="mx-auto max-w-2xl max-md:mx-1 p-2 bg-purple-200 border rounded-md mt-1">
                    {
                        data &&
                        data.tracks.items.map((track) => {
                            return (
                                <li key={track.id} className="flex justify-between mt-2 border-b border-gray-400 pb-1">
                                    <Track track={track} image={data.images[2].url} />
                                </li>
                            );
                        })
                    }
                </ul>
            </section>
        </>
    );
};

export default PlaylistTracks;
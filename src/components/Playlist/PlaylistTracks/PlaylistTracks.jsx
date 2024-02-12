import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getPlaylist from "../../../adapters/Playlist/getPlaylist";
import useToken from "../../../adapters/token";
import TokenContext from "../../../context/TokenContext/TokenContext";
import Track from "./Track/Track";
import PlaylistHeader from "./PlaylistHeader/PlaylistHeader";

const PlaylistTracks = () => {
    const { albumID } = useParams();
    const tokenID = useToken(TokenContext);

    const { data, isLoading } = useQuery({ queryKey: ['Tracks', albumID, tokenID], queryFn: () => getPlaylist(albumID, tokenID) });

    if (data == "The access token expired") {       
        return (
            <div className="mt-5 mx-auto w-fit text-center">
                <h1 className="text-white text-lg mb-2">Internal Error, go to home or search again</h1>
                <Link to={'/'} className="p-2 text-white bg-green-500 rounded-md" type="button">Go to Home</Link>
            </div>
        );
    }

    if (data == "invalid id") {   
        return (
            <div className="mt-5 mx-auto w-fit text-center">
                <h1 className="text-white text-lg mb-2">This album doesn&apos;t exits, check the url or search again</h1>
                <Link to={'/'} className="p-2 text-white bg-green-500 rounded-md">Go to Home</Link>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div
                className="flex mx-auto mt-4 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-success motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span>
            </div>
        );
    }

    return (
        <>
            <section>
                <PlaylistHeader />
                <ul className="mx-auto max-w-2xl max-md:mx-1 p-2 bg-purple-200 border rounded-md mt-1">
                    {
                        typeof data === typeof {} &&
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
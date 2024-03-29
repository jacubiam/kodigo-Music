import { useContext, useRef, useState } from "react";
import AlbumsContext from "../../../../context/AlbumsContext/AlbumsContext";
import TokenContext from "../../../../context/TokenContext/TokenContext";
import search from "./search";
import { useNavigate } from "react-router-dom";

const errorInfo = {
    message:'',
    active:false,
    errorAPI: false,
};

const SearchBar = () => {
    const [searchText, setSearchText] = useState("");
    const [error, setError] = useState(errorInfo);
    const btnRef = useRef(null);
    const { setAlbums } = useContext(AlbumsContext);
    const { tokenID, setPulse } = useContext(TokenContext);
    const navigator = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const button = btnRef.current;
        const text = searchText.trim().split(" ");
        const textWords = text.map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        });
        const textCleanWords = textWords.filter(word => word !== "");
        search(textCleanWords.join(" "), tokenID, setAlbums, error, setError, setPulse, button);
        navigator('/');
    };

    return (
        <>
            <div className="flex w-full rounded bg-white max-w-screen-md mx-auto ">
                <input className=" w-full border-none bg-transparent px-4 py-1 text-gray-400 outline-none focus:outline-none "
                    type="search" name="search" placeholder="Search an artist..."
                    onChange={e => setSearchText(e.target.value)}
                    onKeyDown={e => { if (e.key == "Enter") { handleSubmit(e); } }} />
                <button ref={btnRef} type="submit" className="m-2 rounded bg-blue-600 px-4 py-2 text-white" onClick={handleSubmit}>
                    <svg className="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style={{ enableBackground: 'new 0 0 56.966 56.966' }} xmlSpace="preserve" width="512px" height="512px">
                        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                </button>
            </div>
            <p className="w-fit text-center bg-white mt-4 mx-auto p-3 rounded-md text-gray-700" style={error.active ? { display: "block" } : { display: "none" }}>{error.message}</p>
        </>
    );
};

export default SearchBar;
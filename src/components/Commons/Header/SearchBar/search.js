import getAlbums from "../../../../adapters/SearchBar/getAlbums";

const search = async (searchedText, tokenID, setAlbums, setError) => {
    try {
        const albumsRes = await getAlbums(searchedText, tokenID);
        const albumsArray = await albumsRes.json();
        setError(false);
        setAlbums(albumsArray.items);
    } catch (error) { setError(true);}
};

export default search;

import getAlbums from "../../adapters/SearchBar/getAlbums";

const search = async (searchedText, tokenID, setAlbums) => {
    console.log(searchedText);

    const albumsRes = await getAlbums(searchedText, tokenID);
    const albumsArray = await albumsRes.json();
    setAlbums(albumsArray.items);

    console.log(albumsArray.items);

};

export default search;

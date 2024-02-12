import getAlbums from "../../../../adapters/SearchBar/getAlbums";

const errorInfo = {
    message: '',
    active: false,
    errorAPI: false,
};

const search = async (searchedText, tokenID, setAlbums, error, setError, setPulse, button) => {
    try {
        const albumsRes = await getAlbums(searchedText, tokenID);
        console.log(albumsRes);
        if (albumsRes === "API error") {
            throw new Error('API error');
        }
        if (albumsRes === "User error") {
            throw new Error('User error');
        }

        const albumsArray = await albumsRes.json();
        setError(errorInfo);
        setAlbums(albumsArray.items);

    } catch (err) {
        if (err.message === "API error") {
            if (error.errorAPI) {
                setError({ ...error, message: "Sorry, we have an internal error... Come back later" });
            } else {
                setError({ ...error, active: true, errorAPI: true });
                setPulse(Math.random());
                button.click();
            }
        }

        if (err.message === "User error") {
            setError({ message: "Something is wrong, check the input and try again", active: true, errorAPI: false });
        }

    }
};

export default search;

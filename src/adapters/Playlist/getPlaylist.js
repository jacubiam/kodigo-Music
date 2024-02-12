const getPlaylist = async(albumID, tokenID) =>{
    const searchParams = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenID
        }
    };
    try {
        const tracks = await fetch('https://api.spotify.com/v1/albums/' + albumID, searchParams);
        if (!tracks.ok) {
            const errorAPI = await tracks.json();
            throw new Error(errorAPI.error.message);
        }
        
        const tracksResponse = await tracks.json();
        return tracksResponse;
        
    } catch (error) {
        return error.message;

    }
};

export default getPlaylist;
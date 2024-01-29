const getPlaylist = async(albumID, tokenID) =>{
    const searchParams = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenID
        }
    };

    const tracks = await fetch('https://api.spotify.com/v1/albums/' + albumID, searchParams);
    const tracksResponse = await tracks.json();
    return tracksResponse;
};

export default getPlaylist;
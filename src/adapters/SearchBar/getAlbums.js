const getAlbums = async(searchedText, tokenID) =>{
    const searchParams = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenID
        }
    };
    try {
        const artist = await fetch('https://api.spotify.com/v1/search?q=' + searchedText + '&type=artist', searchParams);
        const artistResponse = await artist.json();
        const artistID = artistResponse.artists.items[0].id;
    
        const albumsArray = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=50', searchParams);
        return albumsArray;
        
    } catch (error) { /* empty */ }
};

export default getAlbums;
const getAlbums = async (searchedText, tokenID) => {
    const searchParams = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenID
        }
    };

    try {
        const artist = await fetch('https://api.spotify.com/v1/search?q=' + searchedText + '&type=artist', searchParams);
        if (!artist.ok) {
            throw new Error('API error');
        }

        const artistResponse = await artist.json();
        if (!artistResponse.artists.items.length) {
            throw new Error('User error');
        }

        const artistID = artistResponse.artists.items[0].id;

        const albumsArray = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=50', searchParams);
        return albumsArray;

    } catch (err) {
        const typeErr = err.message;
        return typeErr;
    }
};

export default getAlbums;
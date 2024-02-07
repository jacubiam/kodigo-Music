import HeaderBanner from '../components/Commons/Header/HeaderBanner/HeaderBanner';
import SearchBar from '../components/Commons/Header/SearchBar/SearchBar';
import AlbumList from '../components/HomePage/AlbumList/AlbumList';

const HomePage = () => {
    return (
        <>
            <header>
                <HeaderBanner />
                <SearchBar />
            </header>
            <main>
                <AlbumList />
            </main>
        </>

    );
};

export default HomePage;
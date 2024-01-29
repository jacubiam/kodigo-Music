import HeaderBanner from '../components/HeaderBanner/HeaderBanner';
import SearchBar from '../components/SearchBar/SearchBar';
import AlbumList from "../components/AlbumList/AlbumList";

const HomePage = () => {
    return (
        <>
            <header className='flex flex-wrap items-start justify-center'>
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
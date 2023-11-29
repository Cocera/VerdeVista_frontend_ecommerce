import HomeBanner from './HomeBanner/HomeBanner.jsx';
import ProductCollection from './ProductCollection/ProductCollection.jsx';

const Home = () => {
    return(
        <>
            < HomeBanner />
            < ProductCollection collectionTitle="Most popular plants" />
        </>
    );
};

export default Home;
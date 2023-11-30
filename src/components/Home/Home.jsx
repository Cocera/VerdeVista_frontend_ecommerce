import HomeBanner from './HomeBanner/HomeBanner.jsx';
import ProductCollection from './ProductCollection/ProductCollection.jsx';

const Home = () => {
    return (
        <>
            < HomeBanner />
            < ProductCollection collectionTitle="Nuestros productos más populares &#127793;" />
        </>
    );
};

export default Home;
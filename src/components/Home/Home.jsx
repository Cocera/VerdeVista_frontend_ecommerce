import ProductCollection from './ProductCollection/ProductCollection.jsx';

// const products = [
//     {
//         id: crypto.randomUUID(),
//         name: "Product 1",
//         description: "Very good product, excellent product",
//         img: "https://images.pexels.com/photos/5858235/pexels-photo-5858235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//     },
//     {
//         id: crypto.randomUUID(),
//         name: "Product 2",
//         description: "Very good product, excellent product",
//         img: "https://images.pexels.com/photos/1029596/pexels-photo-1029596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//     },
//     {
//         id: crypto.randomUUID(),
//         name: "Product 3",
//         description: "Very good product, excellent product",
//         img: "https://images.pexels.com/photos/2215534/pexels-photo-2215534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//     }
// ]

const Home = () => {
    return(
        <>
            < ProductCollection collectionTitle="Most popular plants" />
        </>
    );
};

export default Home;
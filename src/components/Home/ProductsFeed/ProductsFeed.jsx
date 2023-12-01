import { useContext, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductsFeed.scss';
import { ProductContext } from '../../../context/ProductContext/ProductState';

const ProductsFeed = () => {
    const { products, getProducts } = useContext(ProductContext)
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <>
            <main className='products-main'>
                <h1 className='txt-center'>Bueno, bonito y barato</h1>
                <p className='txt-center'>¡Bienvenido a tu nuevo paraíso botánico!</p>
                <section className='products-feed'>
                    {products.map((product) => {
                        return <ProductCard cardClassName="cardProductFeed"
                            name={product.name}
                            description={product.description}
                            img={product.img}
                            second_img={product.second_img}
                            id={product.id}
                            category={product.Category.name}
                            price={product.price} />
                    })}
                </section>
            </main>
        </>
    );
};

export default ProductsFeed

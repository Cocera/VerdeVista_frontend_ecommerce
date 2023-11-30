import { useContext, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductCollection.scss';
import { ProductContext } from '../../../context/ProductContext/ProductState';

const ProductCollection = (props) => {
    const { products, getProducts } = useContext(ProductContext)
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <>
            <section className='product-section'>
                <h2>{props.collectionTitle}</h2>
                <div className='product-section-cards'>
                    {products.map((product) => {
                        return <ProductCard cardClassName="cardHome" name={product.name} description={product.description} img={product.img} second_img={product.second_img} id={product.id} />
                    })}
                </div>
            </section>
        </>
    );
};

export default ProductCollection;
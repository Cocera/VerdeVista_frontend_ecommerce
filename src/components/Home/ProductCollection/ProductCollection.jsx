import { useContext, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductCollection.scss';
import { ProductContext } from '../../../context/ProductContext/ProductState';

const ProductCollection = (props) => {
    const {products,getProducts} = useContext(ProductContext)
    useEffect(()=>{
        getProducts()
    },[])
    return (
        <>
            <section className='ProductSection'>
                <h2>{props.collectionTitle}</h2>
                <div className='ProductSectionCards'>
                    {products.map((product) => {
                        return <ProductCard name={product.name} description={product.description} img={product.img} second_img={product.second_img} id={product.id}/>
                    })}
                </div>
            </section>
        </>
    );
};

export default ProductCollection;
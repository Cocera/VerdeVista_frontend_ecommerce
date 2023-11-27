import { useContext, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductCollection.scss';
import { ProductContext } from '../../../context/ProductContext/ProductState';

const linkPrueba = 'https://images.pexels.com/photos/5858235/pexels-photo-5858235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';


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
                        return <ProductCard name={product.name} description={product.description} img={linkPrueba} id={product.id}/>
                    })}
                </div>
            </section>
        </>
    );
};

export default ProductCollection;
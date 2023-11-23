import ProductCard from '../ProductCard/ProductCard';
import './ProductCollection.scss';

const ProductCollection = (props) => {
    return (
        <>
            <section key={props.id} className='ProductSection'>
                <h2>{props.collectionTitle}</h2>
                <div className='ProductSectionCards'>
                    {props.arrProducts.map((product) => {
                        return <ProductCard name={product.name} description={product.description} img={product.img} id={product.id}/>
                    })}
                </div>
            </section>
        </>
    );
};

export default ProductCollection;
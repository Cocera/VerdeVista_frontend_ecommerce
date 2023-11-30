import './ProductCard.scss';
import { useContext } from 'react';
import { ProductContext } from '../../../context/ProductContext/ProductState';

const ProductCard = (product) => {

    const { addCart } = useContext(ProductContext);

    return (
        <>
            <article key={product.id} className={product.cardClassName}>
                <div className='cardImgCont'>
                    <div className='product-price'>
                        <span>{product.price}€</span>
                        <span>{product.category}</span>
                    </div>
                    <div onClick={() => addCart(product)} className='material-symbols-outlined product-add-cart'>add_shopping_cart</div>
                    <img className='first_img' src={product.img} />
                    <img src={product.second_img} />
                </div>
                <div className='cardTxtCont'>
                    <h6>{product.name}</h6>
                    <p>{product.description}</p>
                </div>
            </article>
        </>
    );
};

export default ProductCard;
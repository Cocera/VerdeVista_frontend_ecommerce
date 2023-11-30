import './ProductCardCart.scss'

const ProductCardCart = (product) => {
    return (
        <>
            <article key={product.id} className='cart-product-card'>
                <div className='material-symbols-outlined remove-cart'>remove_shopping_cart</div>
                <div className='cart-img'>
                    <img src={product.img} />
                </div>
                <div className='cart-txt'>
                    <h6>{product.name}</h6>
                    <p>{product.price}€</p>
                </div>
            </article>
        </>
    );
};

export default ProductCardCart;
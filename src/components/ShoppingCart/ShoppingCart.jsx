import { useContext } from 'react';
import ProductCardCart from './ProductCardCart/ProductCardCart';
import './ShoppingCart.scss';
import { ProductContext } from '../../context/ProductContext/ProductState';

const ShoppingCart = () => {
    const { cart } = useContext(ProductContext);
    const data = cart.map(product => product.name)
    return (
        <>
            <main className='cart-main'>
            <h2 className='txt-center'>Aquí tienes tu pedido</h2>
            <p className='txt-center'>Si no te das prisa, puede que se agote :O</p>
            <section className='cart-feed '>
                {cart.map((product) => {
                    return < ProductCardCart 
                    name={product.name}
                    price={product.price}
                    img={product.img}
                    id={product.id}
                    />
                })}
                </section>
            </main>
        </>
    );
};

export default ShoppingCart;
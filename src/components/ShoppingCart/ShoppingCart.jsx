import { useContext } from 'react';
import ProductCardCart from './ProductCardCart/ProductCardCart';
import './ShoppingCart.scss';
import { ProductContext } from '../../context/ProductContext/ProductState';

const ShoppingCart = () => {
    const { cart, clearCart } = useContext(ProductContext);

    if (cart.length == 0) {
        return (
            <>
                <main className='cart-main'>
                    <h1 className='txt-center main-color'>¡Oh no!</h1>
                    <h1 className='txt-center'>Aun no le has echado el ojo a nada &#127797;&#128064;</h1>
                </main>
            </>
        );
    } else {
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
                    <section className='cart-buttons'>
                        <button onClick={clearCart}>Borrar carrito</button>
                        <button>Realizar pedido</button>
                    </section>
                </main>
            </>
        );
    };
};

export default ShoppingCart;
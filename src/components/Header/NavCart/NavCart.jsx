import { useContext } from 'react';
import './NavCart.scss'
import { ProductContext } from '../../../context/ProductContext/ProductState';

const NavCart = (props) => {

    const { cart } = useContext(ProductContext);

    if (cart.length == 0) {
        return (
            <>
                <div className='cartCont'>
                    <span className='material-symbols-outlined shoppingCart'>shopping_cart</span>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className='cartCont'>
                    <span className='material-symbols-outlined shoppingCart'>shopping_cart</span>
                    <span className='stickerPriceCart'>{props.counter}</span>
                </div>
            </>
        )
    }
};

export default NavCart;
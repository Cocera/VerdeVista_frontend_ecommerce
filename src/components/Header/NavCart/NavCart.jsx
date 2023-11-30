import { useContext, useEffect } from 'react';
import './NavCart.scss'
import { ProductContext } from '../../../context/ProductContext/ProductState';

const NavCart = () => {

    const { cart } = useContext(ProductContext);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    },[cart]);

    return (
        <>
            <div className='cartCont'>
                <span className='material-symbols-outlined shoppingCart'>shopping_cart</span>
                <span className='stickerPriceCart'>3</span>
            </div>
        </>
    )
};

export default NavCart;
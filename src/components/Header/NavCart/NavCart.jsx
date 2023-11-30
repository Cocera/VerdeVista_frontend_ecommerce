import './NavCart.scss'

const NavCart = (props) => {

    return (
        <>
            <div className='cartCont'>
                <span className='material-symbols-outlined shoppingCart'>shopping_cart</span>
                <span className='stickerPriceCart'>{props.counter}</span>
            </div>
        </>
    )
};

export default NavCart;
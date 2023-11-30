import { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './Nav.scss';
import NavCart from '../NavCart/NavCart.jsx';
import NavUserProfile from '../NavUserProfile/NavUserProfile.jsx';
import SearchBar from '../SearchNavBar/SearchBar.jsx';
import logo from "../../../assets/logo_verdeVista.png"
import { ProductContext } from '../../../context/ProductContext/ProductState.jsx';

const Nav = () => {

    const { cart } = useContext(ProductContext);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart]);

    const [menuIsClosed, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuIsClosed);
    };

    return (
        <>
            <nav>
                <Link to="/">
                    <ul className='navLeft'>
                        <li>
                            <img src={logo} />
                        </li>
                        <li className='only-desktop'>
                            <Link to="/products">
                                Nuestros productos
                            </Link>
                        </li>
                        <li className='only-desktop'>¿Quienes somos?</li>
                        <li className='only-desktop'>Contacto</li>

                    </ul>
                </Link>
                <ul className='navRight'>
                    <li className={`${menuIsClosed ? 'hide' : ''}`}>
                        < NavUserProfile />
                    </li>
                    <li className={`${menuIsClosed ? 'hide' : ''}`}>
                        < Link to="/cart">
                            < NavCart counter={cart.length} />
                        </Link>
                    </li>
                    <li className="material-symbols-outlined menuIcon" onClick={toggleMenu}>{menuIsClosed ? 'close' : 'menu'}</li>
                </ul>
                <ul className={`navDropDown ${menuIsClosed ? 'open' : ''}`}>
                    <li>
                        < SearchBar />
                    </li>
                    <li>
                        <Link to="/products">
                            Nuestros productos
                        </Link>
                    </li>
                    <li>¿Quienes somos?</li>
                    <li>Suscripción anual</li>
                    <li>¿Necesitas ayuda?</li>
                </ul>
            </nav>
        </>
    );
};

export default Nav;
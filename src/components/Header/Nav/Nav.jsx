import { useState } from 'react';
import { Link } from "react-router-dom";
import './Nav.scss';
import NavCart from '../NavCart/NavCart.jsx';


const Nav = () => {

    const [menuIsClosed, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuIsClosed);
    };

    return (
        <>
            <nav>
                <ul className='navLeft'> 
                    <li className='bold'><Link to="/">VerdeVista</Link></li>
                </ul>
                <ul className='navRight'>
                    <li className={`material-symbols-outlined ${menuIsClosed ? 'hide' : ''}`}>face</li>
                    <li className={`material-symbols-outlined ${menuIsClosed ? 'hide' : ''}`}>shopping_cart</li>
                    < NavCart/>
                    <li className="material-symbols-outlined menuIcon" onClick={toggleMenu}>{menuIsClosed ? 'close' : 'menu'}</li>
                </ul>
                <ul className={`navDropDown ${menuIsClosed ? 'open' : ''}`}>
                    <li>Link</li>
                    <li>Link</li>
                    <li>Link</li>
                    <li>Link</li>
                    <li>Link</li>
                </ul>
            </nav>
        </>
    );
};

export default Nav;
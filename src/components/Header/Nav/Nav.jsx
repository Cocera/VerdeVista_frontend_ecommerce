import { useState } from 'react';
import { Link } from "react-router-dom";
import './Nav.scss';
import NavCart from '../NavCart/NavCart.jsx';
import NavUserProfile from '../NavUserProfile/NavUserProfile.jsx';
import SearchBar from '../SearchNavBar/SearchBar.jsx';
import img from "../../../assets/logo_verdeVista.png"

const Nav = () => {

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
                            <img src={img} />
                        </li>
                    </ul>
                </Link>
                <ul className='navRight'>
                    <li className={`${menuIsClosed ? 'hide' : ''}`}>
                        < NavUserProfile />
                    </li>
                    <li className={`${menuIsClosed ? 'hide' : ''}`}>
                        < NavCart />
                    </li>
                    <li className="material-symbols-outlined menuIcon" onClick={toggleMenu}>{menuIsClosed ? 'close' : 'menu'}</li>
                </ul>
                <ul className={`navDropDown ${menuIsClosed ? 'open' : ''}`}>
                    <li>
                        < SearchBar />
                    </li>
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
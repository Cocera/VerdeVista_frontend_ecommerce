import { useState } from 'react';
import { Link } from "react-router-dom";
import './Nav.scss';
import NavCart from '../NavCart/NavCart.jsx';
import NavUserProfile from '../NavUserProfile/NavUserProfile.jsx';
import SearchBar from '../SearchNavBar/SearchBar.jsx';


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
                    <li className={`${menuIsClosed ? 'hide' : ''}`}>
                        <Link to ="/login">
                            < NavUserProfile />
                        </Link>
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
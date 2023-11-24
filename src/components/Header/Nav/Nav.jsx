import { useState } from 'react';
import './Nav.scss';


const Nav = () => {

    const [menuIsClosed, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuIsClosed);
    };

    return (
        <>
            <nav>
                <ul className='navLeft'> 
                    <li className='bold'>VerdeVista</li>
                </ul>
                <ul className='navRight'>
                    <li className={`material-symbols-outlined ${menuIsClosed ? 'hide' : ''}`}>face</li>
                    <li className={`material-symbols-outlined ${menuIsClosed ? 'hide' : ''}`}>shopping_bag</li>
                    <li className="material-symbols-outlined menuIcon" onClick={toggleMenu}>{'menu'}</li>
                </ul>
                <ul className={`navDropDown ${menuIsClosed ? 'open' : ''}`}>
                    <li>Link</li>
                    <li>Link</li>
                    <li>Link</li>
                </ul>
            </nav>
        </>
    );
};

export default Nav;
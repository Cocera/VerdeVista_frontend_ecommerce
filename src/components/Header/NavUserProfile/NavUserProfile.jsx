// NO FUNCIONA BIEN LA IMG DEL USER
// la 'ul' es el menu que aparecera al hacer hover sobre el icon de menu en desktop

import { useContext, useState } from 'react';
import './NavUserProfile.scss';
import { UserContext } from '../../../context/UserContext/UserState';
import { Link } from 'react-router-dom';

const NavUserProfile = () => {

    const [menuIsOpen, setMenuOpen] = useState(false);
    const { token, user, logout } = useContext(UserContext);

    const toggleMenu = () => {
        setMenuOpen(!menuIsOpen);
    };

    const logoutUser = () => {
        logout();
    };

    const defaultImg = 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
    const userImg = user?.img

    if (token) {
        return (
            <>
                <div className='cont-nav-user'>
                    <button onClick={toggleMenu} className='profile-thumbnail-img'>
                        <img src={userImg == null ? defaultImg : user.img} alt="user-thumbnail" />
                    </button>
                    <ul className={`${menuIsOpen ? '' : 'hide'} nav-user-dropdown`}>
                        <li>
                            <span className="material-symbols-outlined">person</span>
                            <span>Profile</span>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">settings</span>
                            <span>Settings</span>
                        </li>
                        <li onClick={logoutUser}>
                            <Link to='/'>
                                <span className="material-symbols-outlined">logout</span>
                                <span>Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </>
        )
    } else if (!token) {
        return (
            <>
                <Link to="/login">
                    <div className='cont-nav-user'>
                        <button onClick={toggleMenu}>
                            <div className='material-symbols-outlined'>account_circle</div>
                        </button>
                    </div>
                </Link>
            </>
        )
    }
};

export default NavUserProfile;
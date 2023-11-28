// NO FUNCIONA BIEN LA IMG DEL USER
// la 'ul' es el menu que aparecera al hacer hover sobre el icon de menu en desktop

import { useContext, useState } from 'react';
import './NavUserProfile.scss';
import { UserContext } from '../../../context/UserContext/UserState';

const NavUserProfile = () => {

    const [ menuIsOpen, setMenuOpen ] = useState(false);
    const { token, user } = useContext(UserContext)
    const toggleMenu = () => {
        setMenuOpen(!menuIsOpen);
    };

    if (token) {
        return (
        <>
        <div className='cont-nav-user'>
            <button onClick={toggleMenu} className='profile-thumbnail-img'>
                <img src={user?.img} alt="user-thumbnail" />
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
                <li>
                    <span className="material-symbols-outlined">logout</span>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        </>
        )
    } else if (!token) {
        return (
            <>
            <div className='cont-nav-user'>
                <button onClick={toggleMenu}>
                    <div className='material-symbols-outlined'>account_circle</div>
                </button>
            </div>
            </>
        )
    }
};


//     return (
//         <>  
//         <div className='cont-nav-user'>
//             <button onClick={toggleMenu}>
//                 <div className={`${token ? 'hide' : ''} material-symbols-outlined`}>account_circle</div>
//             </button>
//             <button onClick={toggleMenu} className={`${token ? '' : 'hide'} profile-thumbnail-img`}>
//                 <img src={token ? user?.img : 'hide'} alt="user-thumbnail" />
//             </button>
//             <ul className={`${menuIsOpen && token? '' : 'hide'} nav-user-dropdown`}>
//                 <li>
//                     <span className="material-symbols-outlined">person</span>
//                     <span>Profile</span>
//                 </li>
//                 <li>
//                     <span className="material-symbols-outlined">settings</span>
//                     <span>Settings</span>
//                 </li>
//                 <li>
//                     <span className="material-symbols-outlined">logout</span>
//                     <span>Logout</span>
//                 </li>
//             </ul>
//         </div>
//         </>
//     );
// };

export default NavUserProfile;
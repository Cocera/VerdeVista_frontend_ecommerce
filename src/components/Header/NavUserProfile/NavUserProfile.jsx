// Conteneder que se rellene con la imagen del usuario que inicie sesion, si no hay sesion iniciada aparecera el icon
// la 'ul' es el menu que aparecera al hacer hover sobre el icon de menu en desktop

const NavUserProfile = () => {
    return (
        <>
            <div className='material-symbols-outlined'>account_circle</div>
            <div className="hide">
                <img src="" />
            </div>
            <ul className="hide">
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
        </>
    );
};

export default NavUserProfile;
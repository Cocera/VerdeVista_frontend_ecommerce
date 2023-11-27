// Conteneder que se rellene con la imagen del usuario que inicie sesion, si no hay sesion iniciada aparecera el icon

const NavUserProfile = () => {
    return (
        <>
            <div className='material-symbols-outlined'>face</div>
            <div className="hide">
                <img src="" />
            </div>
        </>
    );
};

export default NavUserProfile;
import './Nav.scss';

const Nav = () => {
    return(
        <>
            <nav>
                <ul className='navLeft'>
                    <li>VerdeVista</li>
                    <li>Link</li>
                    <li>Link</li>
                    <li>Link</li>
                </ul>
                <ul className='navRight'>
                    <li>Login</li>
                    <li>Cesta</li>
                </ul>
            </nav>
        </>
    );
};

export default Nav;
import Nav from './Nav/Nav.jsx';
import './Header.scss';
import NavBannerPromo from './NavBannerPromo/NavBannerPromo.jsx';

const Header = () => {
    return (
        <>
            <header>
                < Nav />
                < NavBannerPromo title="BLACK FRIDAY 50% &#128561;" />
            </header>
        </>
    );
};

export default Header;
import './NavBannerPromo.scss';

// HAY UNO QUE AL HACER RECARGA SE QUEDA PARADO
// REVISAR TIEMPOS

const NavBannerPromo = (props) => {
    return(
        <>
        <div id='rssBlock'>
            <p className="cnnContents">
                <span className="marqueeStyle">{props.title}</span>
                <span className="marqueeStyle2">{props.title}</span>
            </p>
        </div>
        </>
    );
};

export default NavBannerPromo;
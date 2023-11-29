import './NavBannerPromo.scss';

// HAY UNO QUE AL HACER RECARGA SE QUEDA PARADO
// REVISAR TIEMPOS

const NavBannerPromo = (props) => {
    return(
        <>
        <div id='rssBlock'>
            <p className="cnnContents">
                <span className="marqueeStyle">{props.title} &#128561;</span>
                <span className="marqueeStyle2">{props.title} &#128561;</span>
            </p>
        </div>
        </>
    );
};

export default NavBannerPromo;
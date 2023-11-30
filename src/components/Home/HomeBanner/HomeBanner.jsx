import './HomeBanner.scss';
import video from "../../../assets/BannerMonstera.mp4"

const HomeBanner = () => {
    return (
        <>
            <div className="banner">
                <div>
                    <div>
                        <h1>Pon una planta en tu vida</h1>
                        <h3>Descubre nuestras ofertas verdes</h3>
                    </div>
                </div>
                <video id="videoFondo" autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                </video>
            </div>
        </>
    );
};

export default HomeBanner;
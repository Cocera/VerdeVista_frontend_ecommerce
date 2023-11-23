import './ProductCard.scss';
const imgLinkEx = 'https://images.pexels.com/photos/5858235/pexels-photo-5858235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

const ProductCard = () => {
    return(
        <>
            <article>
                <div>
                    <img src={imgLinkEx} />
                </div>
                <div>
                    <h3>Nombre producto</h3>
                    <p>Descripción producto</p>
                </div>
            </article>
        </>
    );
};

export default ProductCard;
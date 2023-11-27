import './ProductCard.scss';

const ProductCard = (product) => {
    return(
        <>
            <article key={product.id} className='card'>
                <div className='cardImgCont'>
                    <img src={product.img} />
                </div>
                <div className='cardTxtCont'>
                    <h6>{product.name}</h6>
                    <p>{product.description}</p>
                </div>
            </article>
        </>
    );
};

export default ProductCard;
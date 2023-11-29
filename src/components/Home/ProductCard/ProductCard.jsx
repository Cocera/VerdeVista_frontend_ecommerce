import './ProductCard.scss';

const ProductCard = (product) => {
    return (
        <>
            <article key={product.id} className='cardHome'>
                <div className='cardImgCont'>
                    <img className='first_img' src={product.img} />
                    <img src={product.second_img} />
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
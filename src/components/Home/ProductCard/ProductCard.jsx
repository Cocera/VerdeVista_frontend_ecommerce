import './ProductCard.scss';

const ProductCard = (props) => {
    return(
        <>
            <article key={props.id} className='card'>
                <div className='cardImgCont'>
                    <img src={props.img} />
                </div>
                <div className='cardTxtCont'>
                    <h6>{props.name}</h6>
                    <p>{props.description}</p>
                </div>
            </article>
        </>
    );
};

export default ProductCard;
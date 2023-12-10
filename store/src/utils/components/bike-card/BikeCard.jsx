import './_bike-card.scss';
const BikeCard = ({ bike }) => {
    const {productName, productPrice, productImageUrl} = bike;

    return (
        <article className="bike-card">
            <img
                className="bike-card__img"
                src={productImageUrl}
                alt={productName}
                width="279.52"
                height="250"
            />
            <p className="bike-card__name">{productName}</p>
            <p className="bike-card__price">{productPrice} грн</p>
        </article>
    );
};

export default BikeCard;

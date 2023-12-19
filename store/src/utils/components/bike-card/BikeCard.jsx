import { useState } from 'react';
import './_bike-card.scss';

const BikeCard = ({ bike, addOrder}) => {
    const { productName, productPrice, productImageUrl} = bike;
    // const [isAddedToCart, setIsAddedToCart] = useState(false);
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
            <div className="bike-card__inner">
                <p className="bike-card__price">{productPrice} грн</p>
                <button
                    className="bike-card__cart"
                    type="button"
                    onClick={()=>{addOrder(bike)}}
                ></button>
            </div>
        </article>
    );
};

export default BikeCard;

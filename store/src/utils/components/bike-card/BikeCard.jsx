import { useState } from 'react';
import './_bike-card.scss';

const BikeCard = ({ bike, addOrder }) => {
    const { productName, productPrice, productImageUrl, amount, discount } =
        bike;
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
                <div className="bike-card__price price">
                    {discount > 0 ? (
                        <div className="price__inner">
                            <p className="price__to-discount">
                                {productPrice}грн
                            </p>
                            <p className="price__discount-percentage">
                                -{discount}%
                            </p>
                        </div>
                    ) : null}
                    <p className="price__after-discount">
                        {discount > 0
                            ? productPrice -
                              Math.floor((productPrice * discount) / 100)
                            : productPrice}
                        грн
                    </p>
                </div>
                {amount === 0 ? (
                    <button
                        className="bike-card__btn bike-card__btn--unselected"
                        type="button"
                        onClick={() => {
                            addOrder(bike);
                        }}
                    ></button>
                ) : (
                    <button
                        className="bike-card__btn bike-card__btn--selected"
                        type="button"
                        // onClick={handleToggleCart}
                    >
                        <span className="bike-card__btn-mark"></span>
                    </button>
                )}
            </div>
        </article>
    );
};

export default BikeCard;
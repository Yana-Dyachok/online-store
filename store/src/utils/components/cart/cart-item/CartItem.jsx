import { useState, useEffect } from 'react';
import bikes from '../../../mockAPI/bike-data';
import './_cart-item.scss';
const CartItem = () => {
    const {productName, productPrice, productImageUrl} = bikes;
    const [quantity, setQuantity] = useState(1);
    const decreaseQuantity = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
    };

    const increaseQuantity=()=> {
        setQuantity((prev)=>prev+1);
    }
    return (
        <article className="cart__item cart-goods">
            <img
                className="cart-goods__img"
                src={productImageUrl}
                alt={productName}
                width="196"
                height="196"
            />
            <div className="cart-goods__info">
                <p className="cart-goods__name">{productName}</p>
                <p className="cart-goods__price">{productPrice}грн</p>
            </div>
            <div className="cart-goods__quantity quantity-control">
                <button className="quantity-control__item quantity-control__item--decrease" type='button' onClick={decreaseQuantity}>-</button>
                <div className="quantity-control__item quantity-control__item--display">{quantity}</div>
                <button className="quantity-control__item quantity-control__item--increase" type='button' onClick={increaseQuantity}>+</button>
            </div>
            <button className='cart-goods__btn cart-goods__btn--del' type='button'></button>
        </article>
    );
};
export default CartItem;

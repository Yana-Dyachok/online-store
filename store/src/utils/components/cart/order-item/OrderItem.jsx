import { useState, useEffect } from 'react';
import bikes from '../../../mockAPI/bike-data';
import './_order-item.scss';
const OrderItem = () => {
    const {productName, productPrice, productImageUrl} = bikes;
    const [quantity, setQuantity] = useState(1);
    const decreaseQuantity = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
    };

    const increaseQuantity=()=> {
        setQuantity((prev)=>prev+1);
    }

    const onDelete=()=>{

    }

    return (
        <article className="order__item">
            <img
                className="order__img"
                src={productImageUrl}
                alt={productName}
                width="196"
                height="196"
            />
            <div className="order__info">
                <p className="order__name">{productName}</p>
                <p className="order__price">{productPrice}грн</p>
            </div>
            <div className="order__quantity quantity">
                <button className="quantity__item quantity__item--decrease" type='button' onClick={decreaseQuantity}>-</button>
                <div className="quantity__item quantity__item--display">{quantity}</div>
                <button className="quantity__item quantity__item--increase" type='button' onClick={increaseQuantity}>+</button>
            </div>
            <button className='order__btn order__btn--del' type='button' onClick={onDelete}></button>
        </article>
    );
};
export default OrderItem;

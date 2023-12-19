import { useState, useEffect } from 'react';
import './_order-item.scss';
const OrderItem = ({ orderArray, changeAmount, onDelete}) => { 

    return (
        <>
            {orderArray.map((order) => (
                <article className="order__item" key={order.id}>
                    <img
                        className="order__img"
                        src={order.productImageUrl}
                        alt={order.productName}
                        width="196"
                        height="196"
                    />
                    <div className="order__info">
                        <p className="order__name">{order.productName}</p>
                        <p className="order__price">{order.productPrice}грн</p>
                    </div>
                    <div className="order__quantity quantity">
                        <button
                            className="quantity__item quantity__item--decrease"
                            type="button"
                            onClick={() =>changeAmount(order,-1)}
                        >
                            -
                        </button>
                        <div className="quantity__item quantity__item--display">{order.amount}</div>
                        <button
                            className="quantity__item quantity__item--increase"
                            type="button"
                            onClick={() =>changeAmount(order,1)}
                        >
                            +
                        </button>
                    </div>
                    <button
                        className="order__btn order__btn--del"
                        type="button"
                        onClick={() => onDelete(order.id)}
                    ></button>
                </article>
            ))}
        </>
    );
};

export default OrderItem;

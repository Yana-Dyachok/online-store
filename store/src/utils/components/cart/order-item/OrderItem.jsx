import { useState, useEffect } from 'react';
import './_order-item.scss';
const OrderItem = ({ orderArray, changeAmount, onDelete }) => {
    const getPriceAfterDiscount = (order) => {
        return (
            order.productPrice * order.amount -
            Math.floor((order.productPrice * order.discount) / 100) *
                order.amount
        );
    };

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
                        {order.discount > 0 ? (
                            <p className="order__price  order__price--before">
                                {order.productPrice * order.amount}грн
                            </p>
                        ) : null}
                        <p className="order__price order__price--after">
                            {order.discount > 0
                                ? getPriceAfterDiscount(order)
                                : order.productPrice * order.amount}
                            грн
                        </p>
                    </div>
                    <div className="order__quantity quantity">
                        <button
                            className="quantity__item quantity__item--increase"
                            type="button"
                            onClick={() => changeAmount(order, 1)}
                        >
                        </button>
                        <div className="quantity__item quantity__item--display">
                            {order.amount}
                        </div>
                        <button
                            className="quantity__item quantity__item--decrease"
                            type="button"
                            onClick={() => changeAmount(order, -1)}
                        >
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

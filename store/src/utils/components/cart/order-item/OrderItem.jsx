import React, { useState, useEffect } from 'react';
import './_order-item.scss';

const OrderItem = ({
    orderArray,
    inputAmountChange,
    inputBlur,
    changeAmount,
    onDelete,
}) => {
    const getPriceAfterDiscount = (order) => {
        return (
            order.productPrice * (order.amount||1) -
            Math.floor((order.productPrice * order.discount) / 100) *
                (order.amount||1)
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
                                {order.productPrice * (order.amount||1)}грн
                            </p>
                        ) : null}
                        <p className="order__price order__price--after">
                            {order.discount > 0
                                ? getPriceAfterDiscount(order)
                                : order.productPrice * (order.amount||1)}
                            грн
                        </p>
                    </div>
                    <div className="order__quantity quantity">
                        <button
                            className="quantity__btn quantity__btn--increase"
                            type="button"
                            onClick={() => changeAmount(order, 1)}
                        ></button>
                        <input
                            className={`quantity__input ${order.amount < 1||isNaN(order.amount)? 'quantity__input--incorrect' : ''}`}
                            type="number"
                            value={order.amount}
                            onInput={(e) => inputAmountChange(e, order)}
                            onBlur={(e) => inputBlur(e, order)}
                        />
                        <button
                            className="quantity__btn quantity__btn--decrease"
                            type="button"
                            onClick={() => changeAmount(order, -1)}
                        ></button>
                    </div>
                    <button
                        className="order__btn order__btn--del"
                        type="button"
                        onClick={() => onDelete(order)}
                    ></button>
                </article>
            ))}
        </>
    );
};

export default OrderItem;

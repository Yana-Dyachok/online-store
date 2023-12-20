import { useState, useEffect } from 'react';

import './_to-order.scss';

const ToOrder = () => {
    return (
        <div className="full-cart__btns">
            <button
                className="full-cart__btn btn full-cart__btn--continue"
                type="button"
            >
                Продовжити покупки
            </button>
            <button
                className="full-cart__btn btn full-cart__btn--order"
                type="button"
            >
                Оформити замовлення
            </button>
        </div>
    );
};

export default ToOrder;

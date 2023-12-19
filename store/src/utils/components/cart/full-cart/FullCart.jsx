import { useState, useEffect } from 'react';

import OrderItem from '../order-item/OrderItem';
import PromoCode from '../promo-code/PromoCode';
import OrderSum from '../order-sum/OrderSum';

import './_full-cart.scss';
const FullCart = ({ orderArray, setOrderArray }) => {
    const [totalSum, setTotalSum] = useState(0); 

    const changeAmount = (item, d) => {
        const i = orderArray.indexOf(item);
        const tempArray = orderArray;
        tempArray[i].amount += d;

        if (tempArray[i].amount === 0) tempArray[i].amount = 1;
        setOrderArray([...tempArray]);
    };

    const onDelete = (orderId) => {
        setOrderArray((prevOrders) =>
            prevOrders.filter((order) => order.id !== orderId)
        );
        getTotalSum();
    };

    const getTotalSum = () => {
        let sum = 0;
        orderArray.map((item) => (sum += item.amount * item.productPrice));
        setTotalSum(sum);
    };

    useEffect(() => {
        getTotalSum();
    });

    return (
        <article className="full-cart">
            <OrderItem
                orderArray={orderArray}
                changeAmount={changeAmount}
                onDelete={onDelete}
            />
            <PromoCode />
            <OrderSum totalSum={totalSum} />
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
        </article>
    );
};
export default FullCart;

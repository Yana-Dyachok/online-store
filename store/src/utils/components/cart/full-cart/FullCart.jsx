import { useState, useEffect } from 'react';

import OrderItem from '../order-item/OrderItem';
import PromoCode from '../promo-code/PromoCode';
import OrderSum from '../order-sum/OrderSum';
import ToOrder from '../to-order/ToOrder';

import './_full-cart.scss';
const FullCart = ({ orderArray, setOrderArray }) => {
    const [totalSum, setTotalSum] = useState(0);
    const [totalDiscount, setTotalDiscount] = useState(0);
    const changeAmount = (item, d) => {
        const i = orderArray.indexOf(item);
        const tempArray = orderArray;
        tempArray[i].amount += d;

        if (tempArray[i].amount === 0) tempArray[i].amount = 1;
        setOrderArray([...tempArray]);
    };

    const inputAmountChange = (e, item) => {
        const i = orderArray.indexOf(item);
        const tempArray = orderArray;
        const newAmount = parseInt(e.target.value, 10);
        tempArray[i].amount = newAmount;
        setOrderArray([...tempArray]);
    };

    const inputBlur = (e, item) => {
        if (e.target.value.trim() === '' || e.target.value < 1) {
            inputAmountChange({ target: { value: '1' } }, item);
        }
    };

    const onDelete = (item) => {
        setOrderArray((prevOrders) => {
            item.amount = 0;
            return prevOrders.filter((order) => order.id !== item.id);
        });
        getTotalSum();
    };

    const getDiscount = (item) =>
        Math.floor(item.productPrice * (item.discount / 100)) * (item.amount||1);

    const getTotalSum = () => {
        let sum = 0;
        orderArray.forEach((item) => {
            let disc = getDiscount(item);
            sum += (item.amount||1) * item.productPrice - disc;
        });
        setTotalSum(sum);
    };

    const getTotalDiscount = () => {
        let sum = 0;
        orderArray.forEach((item) => {
            let discount = getDiscount(item);
            sum += discount;
        });
        setTotalDiscount(sum);
    };
    console.log(totalDiscount);

    useEffect(() => {
        getTotalSum();
        getTotalDiscount();
    });

    return (
        <article className="full-cart">
            <OrderItem
                orderArray={orderArray}
                inputAmountChange={inputAmountChange}
                inputBlur={inputBlur}
                changeAmount={changeAmount}
                onDelete={onDelete}
            />
            <div className="full-cart__container container">
                <PromoCode />
                <OrderSum totalSum={totalSum} totalDiscount={totalDiscount} />
                <ToOrder />
            </div>
        </article>
    );
};
export default FullCart;

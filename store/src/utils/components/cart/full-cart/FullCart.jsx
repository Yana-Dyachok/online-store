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

    const onDelete = (orderId) => {
        setOrderArray((prevOrders) =>
            prevOrders.filter((order) => order.id !== orderId)
        );
        getTotalSum();
    };

    const getDiscount = (item) =>
        Math.floor(item.productPrice * (item.discount / 100)) * item.amount;

    const getTotalSum = () => {
        let sum = 0;
        orderArray.forEach((item) => {
            let disc = getDiscount(item);
            sum += item.amount * item.productPrice - disc;
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
                changeAmount={changeAmount}
                onDelete={onDelete}
            />
            <div className='full-cart__container container'>
                <PromoCode />
                <OrderSum totalSum={totalSum} totalDiscount={totalDiscount} />
                <ToOrder/>
            </div>
        </article>
    );
};
export default FullCart;
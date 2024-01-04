import { useState, useEffect } from 'react';

import { useOrderArray } from '../OrderArray';
import EmptyCart from './empty-cart/EmptyCart';
import FullCart from './full-cart/FullCart';

import './_opened-cart.scss';

const OpenedCart = () => {
    const { orderArray, setOrderArray } = useOrderArray();
    const [isCartEmpty, setIsCartEmpty] = useState(true);
    useEffect(() => {
        setIsCartEmpty(orderArray.length > 0 ? false : true);
    }, [orderArray]);

    return (
        <div className="cart container">
            <h2 className="cart__name title">Кошик</h2>
           {isCartEmpty?<EmptyCart/>:<FullCart orderArray={orderArray} setOrderArray={setOrderArray} />}
        </div>
    );
};

export default OpenedCart;
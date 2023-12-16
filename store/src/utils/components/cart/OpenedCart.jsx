import { useState, useEffect } from 'react';

import EmptyCart from './empty-cart/EmptyCart';
import FullCart from './full-cart/FullCart';

import './_opened-cart.scss';

const OpenedCart = ({handleToggleCart}) => {
    const [isCartEmpty, setIsCartEmpty] = useState(true);
    return (
        <div className="cart">
            <h2 className="cart__name title">Корзина</h2>
            {/* isCartEmpty? <EmptyCart handleToggleCart={handleToggleCart}/>:<FullCart/> */}
            {/* <EmptyCart handleToggleCart={handleToggleCart}/> */}
            <FullCart/>
        </div>
    );
};

export default OpenedCart;

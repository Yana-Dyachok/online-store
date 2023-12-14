import { useState, useEffect } from 'react';

import EmptyCart from './empty-cart/EmptyCart';

import './_opened-cart.scss';

const OpenedCart = ({handleToggleCart}) => {
    const [isCartEmpty, setIsCartEmpty] = useState(true);
    return (
        <div className="cart">
            <h2 className="cart__name title">Корзина</h2>
            {/* isCartEmpty? <EmptyCart />: */}
            <EmptyCart handleToggleCart={handleToggleCart}/>
        </div>
    );
};

export default OpenedCart;

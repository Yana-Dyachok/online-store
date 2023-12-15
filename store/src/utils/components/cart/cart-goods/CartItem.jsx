import './_cart-item.scss';
const CartItem = () => {
    return (
        <article className="cart__item cart-goods">
            <img
                className="cart-goods__img"
                src={productImageUrl}
                alt={productName}
                width="196"
                height="196"
            />
            <div className="cart-goods__info">
                <p className="cart-goods__name">{productName}</p>
                <p className="cart-goods__price">{productPrice} грн</p>
            </div>
            <div className="cart-goods__quantity quantity-control">
                <button className="quantity-control quantity-control--decrease" type='button'>-</button>
                <div className="quantity-control quantity-control--display">{count}</div>
                <button className="quantity-control quantity-control--increase" type='button'>+</button>
            </div>
            <button className='cart-goods__btn cart-goods__btn--del' type='button'></button>
        </article>
    );
};
export default CartItem;

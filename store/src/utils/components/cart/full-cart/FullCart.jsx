import OrderItem from '../order-item/OrderItem';
import PromoCode from '../promo-code/PromoCode';
import OrderSum from '../order-sum/OrderSum';
import './_full-cart.scss';
const FullCart = ({ handleToggleCart }) => {
    return (
        <article className="full-cart">
            <OrderItem />
            <PromoCode />
            <OrderSum/>
            <div className=''>
              
            </div>
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

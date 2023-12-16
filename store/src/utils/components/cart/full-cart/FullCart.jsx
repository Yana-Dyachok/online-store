import CartItem from '../cart-item/CartItem';
import './_full-cart.scss';
const FullCart=({handleToggleCart})=> {
    return (
      <article className='full-cart'>
        <CartItem/>
        <div className='full-cart__btns'></div>
        <button className="full-cart__btn btn full-cart__btn--continue" type="button">Продовжити покупки</button>
        <button className="full-cart__btn btn full-cart__btn--order" type="button">Оформити замовлення</button>
      </article>
    )
  }
export default FullCart
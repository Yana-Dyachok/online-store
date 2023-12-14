import './_empty-cart.scss';
const EmptyCart=({handleToggleCart})=> {
    return (
      <article className='empty-cart'>
        <div className="empty-cart__img"></div>
        <h4 className="empty-cart__report">Ваша корзина порожня.</h4>
        <p className="empty-cart__advice">Почніть додавати товари, які сподобалися у корзину.</p>
        <button className="empty-cart__btn btn" type="button" onClick={handleToggleCart}>На головну</button>
      </article>
    )
  }
export default EmptyCart
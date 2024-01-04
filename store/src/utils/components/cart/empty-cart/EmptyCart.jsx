import './_empty-cart.scss';
import { NavLink, Link, useNavigate } from 'react-router-dom';

const EmptyCart=()=> {
  const navigate = useNavigate();

  const backToHomePage = () => {
      navigate('/');
  };
    return (
      <article className='empty-cart'>
        <div className="empty-cart__img"></div>
        <p className="empty-cart__report">Ваш кошик порожній.</p>
        <p className="empty-cart__advice">Почніть додавати товари, які сподобалися у кошик.</p>
        <button className="empty-cart__btn btn" type="button" onClick={backToHomePage}>На головну</button>
      </article>
    )
  }
export default EmptyCart
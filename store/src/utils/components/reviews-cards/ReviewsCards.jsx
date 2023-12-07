import imgItem from '../../../assets/img/slider-img.webp';
const ReviewsCards=()=> {
    return (
      <article className="reviews-card">
          <img className='reviews-card__img' src={imgItem} alt="photo" width="199" height="200"/>
           <div className='reviews-card__text'>
             <p className='reviews-card__name'>Тарас</p>
             <div className='reviews-card__stars'></div>
             <p className='reviews-card__description'>Полюбляю цей сайт. Є великий вибір та швидка доставка. Рекмендую.</p>
           </div>
      </article>
    )
}

export default ReviewsCards
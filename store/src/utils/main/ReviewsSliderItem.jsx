import imgItem from '../../../src/assets/img/slider-img.jpg';

const ReviewsSliderItem = () => {
    return (
        <li className='reviews-slider__item'>
           <img className='reviews-slider__img' src={imgItem} alt="photo" width="199" height="200"/>
           <div className='reviews-slider__text'>
             <p className='reviews-slider__name'>Тарас</p>
             <div className='reviews-slider__stars'></div>
             <p className='reviews-slider__description'>Полюбляю цей сайт. Є великий вибір та швидка доставка. Рекмендую.</p>
           </div>
        </li>
    )
}

export default ReviewsSliderItem

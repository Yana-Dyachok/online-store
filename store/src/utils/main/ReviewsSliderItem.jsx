import React, { Component } from 'react'
import imgItem from '../../../src/assets/img/slider-img.jpg';
export class ReviewsSliderItem extends Component {
  render() {
    return (
        <li className='slider__item'>
           <img className='slider__img' src={imgItem} alt="photo" width="199" height="200"/>
           <div className='slider__text'>
             <p className='slider__name'>Тарас</p>
             <div className='slider__stars'></div>
             <p className='slider__description'>Полюбляю цей сайт. Є великий вибір та швидка доставка. Рекмендую.</p>
           </div>
        </li>
    )
  }
}

export default ReviewsSliderItem

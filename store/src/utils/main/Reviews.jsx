import React, { Component } from 'react';
import ReviewsSliderItem from './ReviewsSliderItem';
export class Reviews extends Component {
    render() {
        return (
            <section className="reviews">
                <div className="container">
                    <h3 className="reviews__title titles">Відгуки</h3>
                    <div className="reviews__slider slider">
                        <button className="slider__btn reviews-btn--prev" type='button'></button>
                        <div className="slider__container">
                            <ul class="slider__list">
                                <ReviewsSliderItem/>
                                <ReviewsSliderItem/>
                                <ReviewsSliderItem/>
                                <ReviewsSliderItem/>
                                <ReviewsSliderItem/>
                            </ul>
                        </div>
                        <button className="slider__btn reviews-btn--next" type='button'></button>
                    </div>
                </div>
            </section>
        );
    }
}

export default Reviews;

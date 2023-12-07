import ReviewsSliderItem from '../reviews-slider-items/ReviewsSliderItem';
import './_reviews.scss';
const Reviews = () => {
    return (
        <section className="reviews">
            <div className="reviews__inner container">
                <h3 className="reviews__title title">Відгуки</h3>
                <div className="reviews__slider reviews-slider ">
                    <button
                        className="reviews-slider__btn reviews-slider__btn--prev"
                        type="button"
                    ></button>
                    <div className="reviews-slider__container">
                        <ul class="reviews-slider__list">
                            <ReviewsSliderItem />
                            <ReviewsSliderItem />
                            <ReviewsSliderItem />
                            <ReviewsSliderItem />
                            <ReviewsSliderItem />
                        </ul>
                    </div>
                    <button
                        className="reviews-slider__btn reviews-slider__btn--next"
                        type="button"
                    ></button>
                </div>
            </div>
        </section>
    );
}

export default Reviews;

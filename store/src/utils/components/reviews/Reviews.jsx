import ReviewsSliderItem from '../reviews-slider-items/ReviewsSliderItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
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
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '.reviews-slider__btn--next',
                            prevEl: '.reviews-slider__btn--prev',
                        }}
                        spaceBetween={5}
                        slidesPerView={2}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                            <SwiperSlide>
                                <ReviewsSliderItem/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ReviewsSliderItem/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ReviewsSliderItem/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ReviewsSliderItem/>
                            </SwiperSlide>
                    </Swiper>
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

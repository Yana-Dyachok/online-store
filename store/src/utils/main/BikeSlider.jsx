import BikeSliderItem from './BikeSliderItem';

const BikeSlider = () => {
    return (
        <section className="bike-slider">
            <div className="bike-slider__inner container">
                <h3 className="bike-slider__title title">Рекомендації</h3>
                <div className="bike-slider__wrapper">
                    <button
                        className="bike-slider__btn bike-slider__btn--prev"
                        type="button"
                    ></button>
                    <div className="bike-slider__container">
                        <ul class="bike-slider__list">
                            <BikeSliderItem />
                            <BikeSliderItem />
                            <BikeSliderItem />
                            <BikeSliderItem />
                            <BikeSliderItem />
                            <BikeSliderItem />
                            <BikeSliderItem />
                        </ul>
                    </div>
                    <button
                        className="bike-slider__btn bike-slider__btn--next"
                        type="button"
                    ></button>
                </div>
            </div>
        </section>
    );
};

export default BikeSlider;

import React, { Component } from 'react';
import BikeSliderItem from './BikeSliderItem';

export class BikeSlider extends Component {
    render() {
        return (
            <section className="bike-slider">
                <div className="container">
                    <h3 className="bike-slider__title titles">Рекомендації</h3>
                    <div className="bike-slider__inner">
                        <button
                            className="bike-slider__btn bike-slider--prev"
                            type="button"
                        ></button>
                        <div className="bike-slider__container">
                            <ul class="bike-slider__line"> 
                                <BikeSliderItem/>
                                <BikeSliderItem/>
                                <BikeSliderItem/>
                                <BikeSliderItem/>
                                <BikeSliderItem/>
                                <BikeSliderItem/>
                                <BikeSliderItem/>
                            </ul>
                        </div>
                        <button
                            className="bike-slider__btn bike-slider--next"
                            type="button"
                        ></button>
                    </div>
                </div>
            </section>
        );
    }
}

export default BikeSlider;

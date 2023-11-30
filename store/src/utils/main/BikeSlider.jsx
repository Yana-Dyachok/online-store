import React, { Component } from 'react';

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
                            <div class="bike-slider__line"></div>
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

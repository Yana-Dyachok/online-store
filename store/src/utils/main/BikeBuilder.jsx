import React, { Component } from 'react';

export class BikeBuilder extends Component {
    render() {
        return (
            <section id="bike-builder">
                <div className="container">
                    <h2 className="bike-builder__title titles">Підбір велосипеда</h2>
                    <div className="bike-builder__inner">
                        <div className="bike-builder__img"></div>
                        <div className="bike-builder__parameters">
                            <h3 className="bike-builder__name">
                                Тип велосипеда
                            </h3>
                            <div className="bike-builder__buttons">
                                <form>
                                    <div className="bike-builder__item btn">
                                        <input
                                            type="radio"
                                            id="bike-type-one"
                                            name="bike"
                                            value="bike-one"
                                        />
                                        <label
                                            className="bike-builder__label"
                                            htmlFor="bike-type-one"
                                        >
                                            Шосейний
                                        </label>
                                    </div>
                                    <div className="bike-builder__item btn">
                                        <input
                                            type="radio"
                                            id="bike-type-two"
                                            name="bike"
                                            value="bike-two"
                                        />
                                        <label
                                            className="bike-builder__label"
                                            htmlFor="bike-type-two"
                                        >
                                            {' '}
                                            Гірський
                                        </label>
                                    </div>
                                    <div className="bike-builder__item btn">
                                        <input
                                            type="radio"
                                            id="bike-type-three"
                                            name="bike"
                                            value="bike-three"
                                        />
                                        <label
                                            className="bike-builder__label"
                                            htmlFor="bike-type-three"
                                        >
                                            {' '}
                                            Міський
                                        </label>
                                    </div>
                                    <div className="bike-builder__item btn">
                                        <input
                                            type="radio"
                                            id="bike-type-four"
                                            name="bike"
                                            value="bike-four"
                                        />
                                        <label
                                            className="bike-builder__label"
                                            htmlFor="bike-type-four"
                                        >
                                            {' '}
                                            Електро
                                        </label>
                                    </div>
                                </form>
                            </div>
                            <h3 className="bike-builder__name">Зріст</h3>
                            <div className="bike-builder__buttons">
                                <form>
                                    <div className="bike-builder__item btn">
                                        <input
                                            type="radio"
                                            id="height-one"
                                            name="height"
                                            value="height-one"
                                        />
                                        <label
                                            className="bike-builder__label"
                                            htmlFor="height-one"
                                        >
                                            160-170
                                        </label>
                                    </div>
                                    <div className="bike-builder__item btn">
                                        <input
                                            type="radio"
                                            id="height-two"
                                            name="height"
                                            value="height-two"
                                        />
                                        <label
                                            className="bike-builder__label"
                                            htmlFor="height-two"
                                        >
                                            {' '}
                                            170-180
                                        </label>
                                    </div>
                                    <div className="bike-builder__item btn">
                                        <input
                                            type="radio"
                                            id="height-three"
                                            name="height"
                                            value="height-three"
                                        />
                                        <label
                                            className="bike-builder__label"
                                            htmlFor="height-three"
                                        >
                                            {' '}
                                            180-190
                                        </label>
                                    </div>
                                </form>
                            </div>
                            <h3 className="bike-builder__name">
                                Діаметр колес
                            </h3>
                            <div className="bike-builder__buttons">
                                <form>
                                    <div className="bike-builder__item btn">
                                        <input
                                            type="radio"
                                            id="wheel-diameterone"
                                            name="wheel-diameter"
                                            value="-wheel-diameterone"
                                        />
                                        <label
                                            className="bike-builder__label"
                                            htmlFor="wheel-diameter-one"
                                        >
                                            26
                                        </label>
                                    </div>
                                    <div className="bike-builder__item btn">
                                        <input
                                            type="radio"
                                            id="wheel-diameter-two"
                                            name="wheel-diameter"
                                            value="wheel-diameter-two"
                                        />
                                        <label
                                            className="bike-builder__label"
                                            htmlFor="wheel-diameter-two"
                                        >
                                            {' '}
                                            28
                                        </label>
                                    </div>
                                    <div className="bike-builder__item btn">
                                        <input
                                            type="radio"
                                            id="wheel-diameter-three"
                                            name="wheel-diameter"
                                            value="wheel-diameter-three"
                                        />
                                        <label
                                            className="bike-builder__label"
                                            htmlFor="wheel-diameter-three"
                                        >
                                            {' '}
                                            29
                                        </label>
                                    </div>
                                </form>
                            </div>
                            <button
                                className="bike-builder__btn btn"
                                type="button"
                            >
                                Підібрати
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BikeBuilder;

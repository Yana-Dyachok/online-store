import React, { Component } from 'react';

export class Hero extends Component {
    render() {
        return (
            <section className="hero">
                <div className="container">
                    <div className="hero__text">
                        <h1 className="hero__name titles">Розкрий свій шлях</h1>
                        <h2 className="hero__description">
                            Підбери велосипед, який створенний для твоїх
                            досягнень!
                        </h2>
                        <button className="hero__btn btn" type="button">
                            Підібрати
                        </button>
                    </div>
                    <div className="hero__img"></div>
                </div>
            </section>
        );
    }
}

export default Hero;

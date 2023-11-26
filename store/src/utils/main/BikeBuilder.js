import React, { Component } from 'react';

export class BikeBuilder extends Component {
    render() {
        return (
            <section id="bike-builder">
                <h2 className="bike-builder__title">Підбір велосипеда</h2>
                <div className="bike-builder__container">
                    <div className="bike-builder__img"></div>
                    <div className="bike-builder__parameters">
                        <h3 className="bike-builder__name">Тип велосипеда</h3>
                        <div className="bike-builder__buttons">
                            <form>
                              <input type="radio" id="bike-type-one" name="bike" value="bike-type" />
                              <label className='btn' htmlFor="bike-type-one">Шосейний</label> 
                              <input type="radio" id="bike-type-two" name="bike" value="bike-type" />
                              <label  className='btn' htmlFor="bike-type-two"> Гірський</label> 
                              <input type="radio" id="bike-type-three" name="bike" value="bike-type" />
                              <label className='btn'  htmlFor="bike-type-three"> Міський</label> 
                              <input type="radio" id="bike-type-four" name="bike" value="bike-type" />
                              <label className='btn' htmlFor="bike-type-four"> Електро</label> 
                            </form>
                        </div>
                        <h3 className="bike-builder__name">Зріст</h3>
                        <h3 className="bike-builder__name">Діаметр колес</h3>
                        <button className="bike-builder-btn btn" type="button">
                            Підібрати
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}

export default BikeBuilder;

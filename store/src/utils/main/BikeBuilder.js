import React, { Component } from 'react'

export class BikeBuilder extends Component {
  render() {
    return (
      <section id='bike-builder'>
        <h2 className='bike-builder__title'>Підбір велосипеда</h2>
        <div className='bike-builder__container'>
            <div className='bike-builder__img'></div>
            <div className='bike-builder__parameters'>
                <h3 className='parameters__title'>Тип велосипеда</h3>
                <h3 className='parameters__title'>Зріст</h3>
                <h3 className='parameters__title'>Діаметр колес</h3>
                <button className='bike-builder__choosing-btn'>Підібрати</button>
            </div>
        </div>
      </section>
    )
  }
}

export default BikeBuilder

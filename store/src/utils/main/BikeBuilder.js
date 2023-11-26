import React, { Component } from 'react'

export class BikeBuilder extends Component {
  render() {
    return (
      <section id='bike-builder'>
        <h2 className='bike-builder__title'>Підбір велосипеда</h2>
        <div className='bike-builder__container'>
            <div className='bike-builder__img'></div>
            <div className='bike-builder__parameters'>
                <h3 className='bike-builder__name'>Тип велосипеда</h3>
                <h3 className='bike-builder__name'>Зріст</h3>
                <h3 className='bike-builder__name'>Діаметр колес</h3>
                <button className='bike-builder-btn btn' type='button'>Підібрати</button>
            </div>
        </div>
      </section>
    )
  }
}

export default BikeBuilder

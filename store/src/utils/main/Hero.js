import React, { Component } from 'react'

export class Hero extends Component {
  render() {
    return (
        <section className="hero-section">
        <div className="hero__text">
          <h1 className="hero__title">Розкрий свій шлях</h1>
          <h2 className="hero__subtitle">
            Підбери велосипед, який створенний для твоїх досягнень!
          </h2>
          <button className="hero__choosing-btn btn" type='button'>Підібрати</button>
        </div>
        <div className="hero__img">
        </div>
      </section>
    )
  }
}

export default Hero


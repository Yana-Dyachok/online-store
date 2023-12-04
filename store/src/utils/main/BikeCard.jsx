import imgItem from '../../../src/assets/img/bike-slider-item.webp';
const BikeCard=()=> {
    return (
      <article className="bike-card">
          <img
                className="bike-card__img"
                src={imgItem}
                alt="bike"
                width="279.52"
                height="250"
            />
            <p className="bike-card__name">
                Шосейний велосипед BraveWheel BT 28 inch
            </p>
            <p className="bike-card__price">15 934 грн</p>
      </article>
    )
}

export default BikeCard

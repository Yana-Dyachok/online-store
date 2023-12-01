import imgItem from '../../../src/assets/img/bike-slider-item.jpg';

const BikeSliderItem = () => {
    return (
        <li className="bike-slider__item">
            <img
                className="bike-slider__img"
                src={imgItem}
                alt="bike"
                width="279.52"
                height="250"
            />
            <p className="bike-slider__name">
                Шосейний велосипед BraveWheel BT 28 inch
            </p>
            <p className="bike-slider__price">15 934 грн</p>
        </li>
    );
}

export default BikeSliderItem;

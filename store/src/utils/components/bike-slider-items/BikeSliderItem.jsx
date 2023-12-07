import React from 'react';
import BikeCard from '../bike-card/BikeCard';

const BikeSliderItem = ({ bike }) => {
    return (
        <li className="bike-slider__item">
            <BikeCard bike={bike} />
        </li>
    );
};

export default BikeSliderItem;
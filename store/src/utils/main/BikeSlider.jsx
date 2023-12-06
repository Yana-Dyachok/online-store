import BikeSliderItem from './BikeSliderItem';
import {useState, useEffect} from 'react';
const CARD_WIDTH=233;
const BikeSlider = () => {
    const [cards, setCards]=useState([])
    const [offset, setOffset]=useState(0)
    const handlePrevClick=()=>{
        setOffset=(currentOffset)=>{
            const newOffset=currentOffset+CARD_WIDTH;
        }
    }
    const handleNextClick=()=>{
        setOffset=(currentOffset)=>{
            const newOffset=currentOffset-CARD_WIDTH;
        }
    }
    return (
        <section className="bike-slider">
            <div className="bike-slider__inner container">
                <h3 className="bike-slider__title title">Рекомендації</h3>
                <div className="bike-slider__wrapper">
                    <button
                        className="bike-slider__btn bike-slider__btn--prev"
                        type="button"
                        onClick={handlePrevClick}>
                    </button>
                    <div className="bike-slider__container">
                        <ul class="bike-slider__list">
                            <BikeSliderItem />
                            <BikeSliderItem />
                            <BikeSliderItem />
                            <BikeSliderItem />
                            <BikeSliderItem />
                            <BikeSliderItem />
                            <BikeSliderItem />
                        </ul>
                    </div>
                    <button
                        className="bike-slider__btn bike-slider__btn--next"
                        type="button"
                        onClick={handleNextClick}>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BikeSlider;
